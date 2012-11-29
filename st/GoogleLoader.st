Smalltalk current createPackage: 'GoogleLoader' properties: #{}!
Object subclass: #GoogleLoader
	instanceVariableNames: ''
	package: 'GoogleLoader'!

!GoogleLoader methodsFor: 'not yet classified'!

initialize
! !

!GoogleLoader class methodsFor: 'not yet classified'!

onLoadCallback: aBlock
		<$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});>
! !

