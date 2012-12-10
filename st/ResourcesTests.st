Smalltalk current createPackage: 'ResourcesTests' properties: #{}!
ResourceProvider subclass: #ResourceProviderFixture
	instanceVariableNames: 'traced'
	package: 'ResourcesTests'!

!ResourceProviderFixture methodsFor: 'not yet classified'!

nativeProvideResources: aSet callback: callback
	"Simulate proving resouces"
    | available|
    available := self nativeProvides.
    callback value: (aSet reject: [:rs| (available includes: rs)not]).
!

nativeProvides
	"A Testing Fixture"
	^ {'a' . 'b' . 'c' . 'd' . 'e'} asSet
!

traced
	^traced ifNil:[traced := Set new]
!

traced: aSet
	traced := aSet
!

waitFor: aSet callback: aCallBack
	"comment stating purpose of message"
	super waitFor: aSet callback:[self traced addAll:aSet. aCallBack value]
! !

TestCase subclass: #ResourceSequenceTests
	instanceVariableNames: 'provider'
	package: 'ResourcesTests'!

!ResourceSequenceTests methodsFor: 'not yet classified'!

setUp
    provider := ResourceProviderFixture new
!

testSequencesCallbacks
	"create and execute a sequence"
    |count|
    count := 0.
    provider waitFor:(Set with: 'a' with:'c') callback:[count := count + 1].
    provider waitFor:'b' callback:[count := count + 2].
    provider waitFor:'c' callback:[count := count + 4].
    provider waitFor:'d' callback:[count := count + 8].
    provider waitFor:'e' callback:[count := count + 16].
    provider produce: (Set with:'c') callback:[
      self assert:(count = 4).
      provider produce:(Set with:'a' with:'e') callback:[
      self assert:(count = 21).
      provider produceAllRequested:[
      self assert:(count = 31)]]]
! !

TestCase subclass: #ResourceValidationTests
	instanceVariableNames: 'provider'
	package: 'ResourcesTests'!

!ResourceValidationTests methodsFor: 'not yet classified'!

setUp
    provider := ResourceProviderFixture new
!

testAvailableResourceCallback
	"Test available resource are not unknown"
    |async|
    async := false.
    self shouldnt:[provider waitFor: (Set with:'a' with:'b')callback:[async := true]] raise: UnknownResource.
	self shouldnt:[provider produce: (Set with:'a' with: 'b') callback:[self assert:true]] raise: UnknownResource.
    self assert: async.
!

testCanProvide
	self assert:(provider canProvide:(Set with:'a')).
    self deny:(provider canProvide:(Set with:'x')).
!

testSatisfyAll
	""
    provider waitFor: (Set with:'a') callback:[].
    provider waitFor: (Set with:'c') callback:[].
    provider produceAllRequested:[
    self assert:(provider traced includes:'a').
    self assert:(provider traced includes:'c')].
!

testUnavailableResource
  "Testing Unavailable Resources"
	self should:[provider waitFor: (Set with:'x' with: 'b') callback:[self signalFailure:'Should not execute!!']] raise: UnknownResource.
	self should:[provider produce: (Set with:'x' with: 'b') callback:[self error:'Callback should not complete!!']] raise: UnknownResource.
! !

