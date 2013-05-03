Smalltalk current createPackage: 'GoogleLoader'!
Object subclass: #GoogleJSAPI
	instanceVariableNames: ''
	package: 'GoogleLoader'!

!GoogleJSAPI class methodsFor: 'not yet classified'!

basicLoad: aBlock
	"Do the callback once jaspi is loaded"
	<$.getScript("https://www.google.com/jsapi",aBlock);>
!

isLoaded
	"Test that the google.load() function is defined."
	<return typeof(google) !!== 'undefined' >
! !

Object subclass: #GoogleLoader
	instanceVariableNames: ''
	package: 'GoogleLoader'!
!GoogleLoader commentStamp!
I am load the Google JSAPI spec

https://developers.google.com/loader/

Usage:
	GoogleLoader onLoadCallback: aBlock!

!GoogleLoader methodsFor: 'not yet classified'!

initialize
! !

!GoogleLoader class methodsFor: 'not yet classified'!

basicLoad: aBlock
	"Do the callback once jaspi is loaded"
	<$.getScript("https://www.google.com/jsapi",aBlock);>
!

basicSetOnLoadCallback: aBlock
	<google.setOnLoadCallback(aBlock)>
!

isLoaded
	"Test that the google.load() function is defined."
	<return typeof(google) !!== 'undefined' && typeof(google.load)  == 'function'>
!

load: aBlock
	"Do the callback on load or immediately if already loaded."
    	self isLoaded 
        	ifTrue:[aBlock value]
      		ifFalse: [self basicLoad:aBlock]
! !

