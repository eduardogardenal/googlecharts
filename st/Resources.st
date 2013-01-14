Smalltalk current createPackage: 'Resources' properties: #{}!
Object subclass: #ResourceProvider
	instanceVariableNames: 'requests satisfied'
	package: 'Resources'!
!ResourceProvider commentStamp!
I am an Abstract framework that allows a set of resources to be requested and provided.

Subclasses need to implement:
	nativeProvides
    	to a returns a Set of  all the resources that can be produced.
        
     nativeProvideResources: aSet  callback: aBlock 
     	 Where aSet is the resources requested to be provided and aBlock is called with a Set of the actual resources newly provided.
         
      Then semantics of resource provision are up to your implementation.
         
         
      When you desire to force the production of resources  produce: aSet callback: aBlock will force your native routines to produce the resource.
      
      If you desire to have actions occur when a set of resources becomes available you can send waitFor: aSet callback: aBlock and the block will be called when the resources at some time in the future.!

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
!

waitFor: aSet callback: aBlock
	"Request a resource and do the callback when it becomes available"
    |request|
    (self canProvide: aSet) ifFalse:[UnknownResource signal:'Can not provide resources'].
    request := ResourceRequest new required: aSet; callback: aBlock.
    self requests add: request.
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

Object subclass: #SerialNumber
	instanceVariableNames: 'serial'
	package: 'Resources'!

!SerialNumber methodsFor: 'not yet classified'!

initialize
	"Start the sequence with 1"
	serial := 1
!

next
	"Return the next serial in the sequence"
	|v|
    v := serial.
    serial := serial + 1.
    ^v
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

