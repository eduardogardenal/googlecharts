Smalltalk current createPackage: 'Resources' properties: #{}!
Object subclass: #ResourceProvider
	instanceVariableNames: 'requests satisfied'
	package: 'Resources'!
!ResourceProvider commentStamp!
I allow abstract resources to be requested and satisified.!

!ResourceProvider methodsFor: 'not yet classified'!

canProvide: aSet
	|provides|
    provides := self nativeProvides.
	aSet do:[:resource| (provides includes:resource) ifFalse:[^false]].
    ^true
!

removeSatisfied: aSet
	|s|
    s := self satisfied.
	^ aSet reject:[:i | s includes: i]
!

request: aSet callback: aBlock
	"Request a Set of resources from the provider - syncronously"
    |request|
    (self canProvide: aSet) ifFalse:[UnknownResource signal:'Can not provide resources'].
    request := ResourceRequest new required: aSet; callback: aBlock.
    self requests add: request.
!

requests
	^requests ifNil:[requests := Array new]
!

requests: anArray
	requests := anArray
!

satisfied
	^satisfied ifNil:[satisfied := Set new]
!

satisfied: aSet
	satisfied := aSet
!

satisfy: aSet callback: callback
	"Request a Set of resources from the provider - syncronous"
    |needed|
    needed := self removeSatisfied: aSet.
    (self canProvide: needed) ifFalse:[UnknownResource signal:'Can not provide resources'].
    self nativeProvideResources: needed callback:[
       	:justProvided |
          self satisfied:(self satisfied, justProvided).
          self requests:(self requests reject:[:req| req provided:justProvided. req blocked not]).
          callback value]
!

satisfyAllAndCallback: callback
	|all|
    all := Set new.
	self requests do:[:request| all addAll:request required].
    self satisfy:all callback: callback
! !

Object subclass: #ResourceRequest
	instanceVariableNames: 'required callback'
	package: 'Resources'!
!ResourceRequest commentStamp!
I am a unsatisfied request for a resource and have a callback for resources when they are provided (satisfied).!

!ResourceRequest methodsFor: 'not yet classified'!

blocked
	^self required isEmpty not
!

callback
	^callback ifNil:[callback := []]
!

callback: aBlock
	callback := aBlock
!

provided: aSet
	"This request is provided the set of Resources"
	self required: (self required reject:[:r| aSet includes:r]).
    (self blocked) ifFalse:[self callback value.self callback:[]].
!

required
	^required ifNil:[required := Set new]
!

required: aSet
	required := aSet
! !

Error subclass: #UnknownResource
	instanceVariableNames: 'resourceSet'
	package: 'Resources'!
!UnknownResource commentStamp!
I am an error to be thrown when a provides does not know about a specific resource that is requested.!

!UnknownResource methodsFor: 'not yet classified'!

resourceSet
	^resourceSet  ifNil:[resourceSet := Set new]
!

resourceSet: aSet
	resourceSet := aSet
! !

