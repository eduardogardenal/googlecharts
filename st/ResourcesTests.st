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

request: aSet callback: aCallBack
	"comment stating purpose of message"
	super request: aSet callback:[self traced addAll:aSet. aCallBack value]
!

traced
	^traced ifNil:[traced := Set new]
!

traced: aSet
	traced := aSet
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
    provider request:(Set with: 'a' with:'c') callback:[count := count + 1].
    provider request:'b' callback:[count := count + 2].
    provider request:'c' callback:[count := count + 4].
    provider request:'d' callback:[count := count + 8].
    provider request:'e' callback:[count := count + 16].
    provider satisfy: (Set with:'c') callback:[
      self assert:(count = 4).
      provider satisfy:(Set with:'a' with:'e') callback:[
      self assert:(count = 21).
      provider satisfyAllAndCallback:[
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
    self shouldnt:[provider request: (Set with:'a' with:'b')callback:[async := true]] raise: UnknownResource.
	self shouldnt:[provider satisfy: (Set with:'a' with: 'b') callback:[self assert:true]] raise: UnknownResource.
    self assert: async.
!

testCanProvide
	self assert:(provider canProvide:(Set with:'a')).
    self deny:(provider canProvide:(Set with:'x')).
!

testSatisfyAll
	""
    provider request: (Set with:'a') callback:[].
    provider request: (Set with:'c') callback:[].
    provider satisfyAllAndCallback:[
    self assert:(provider traced includes:'a').
    self assert:(provider traced includes:'c')].
!

testUnavailableResource
  "Testing Unavailable Resources"
	self should:[provider request: (Set with:'x' with: 'b') callback:[self signalFailure:'Should not execute!!']] raise: UnknownResource.
	self should:[provider satisfy: (Set with:'x' with: 'b') callback:[self error:'Callback should not complete!!']] raise: UnknownResource.
! !

