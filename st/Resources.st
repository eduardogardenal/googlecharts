Smalltalk current createPackage: 'Resources' properties: #{}!
Object subclass: #ResourceProvider
	instanceVariableNames: 'requests satisfied'
	package: 'Resources'!
!ResourceProvider commentStamp!
I allow abstract resources to be requested and satisified.!

!ResourceProvider methodsFor: 'not yet classified'!

canProvide: aSet
    "Determine if a given set can be provided by this provider"
	|provides|
    provides := self nativeProvides.
	aSet do:[:resource| (provides includes:resource) ifFalse:[^false]].
    ^true
!

notSatisfied: aSet
   "Return the subset of a set with all satisfied packages removed"
	|s|
    s := self satisfied.
	^ aSet reject:[:i | s includes: i]
!

produce: aSet callback: callback
	"Cause the production of the set of Resources and do the callback when completed."
    |stillNeeded|
    stillNeeded := self notSatisfied: aSet.
    (self canProvide: stillNeeded) ifFalse:[UnknownResource signal:'Can not provide resources'].
    self nativeProvideResources: stillNeeded callback:[
       	:justProvided |
          self satisfied:(self satisfied, justProvided).
          self requests:(self requests reject:[:req| req provided:justProvided. req blocked not]).
          callback value]
!

produceAllRequested: callback
	"Satisfy all Reqests now by providing all resource of all requests if possible."
	|all|
    all := Set new.
	self requests do:[:request| all addAll:request required].
    self produce:all callback: callback
!

request: aSet callback: aBlock
	"Request a resource and do the callback when it becomes available"
    |request|
    (self canProvide: aSet) ifFalse:[UnknownResource signal:'Can not provide resources'].
    request := ResourceRequest new required: aSet; callback: aBlock.
    self requests add: request.
!

requests
	"Return all the ResourceRequests for this provider"
	^requests ifNil:[requests := Array new]
!

requests: anArray
	"Set all the ResourceRequests for this provider"
	requests := anArray
!

satisfied
	"Return all the packages provided by this Provider at this time."
	^satisfied ifNil:[satisfied := Set new]
!

satisfied: aSet
	"Set the set of packages that this provider provides at this time."
	satisfied := aSet
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

