Smalltalk current createPackage: 'GoogleChartsTests' properties: #{}!
GoogleLoader subclass: #GoogleLoaderFixture
	instanceVariableNames: 'packages'
	package: 'GoogleChartsTests'!

!GoogleLoaderFixture methodsFor: 'not yet classified'!

googleLoad: p
	packages := p.
!

packages
	^packages
! !

TestCase subclass: #GoogleLoaderTest
	instanceVariableNames: ''
	package: 'GoogleChartsTests'!

!GoogleLoaderTest methodsFor: 'not yet classified'!

testFixturePackageTracking
	|loader|
    loader := GoogleLoaderFixture new.
    loader googleLoad: {'gump'} asSet.
    self deny: (loader packages isNil).
    self assert:(loader packages includes:'gump').
!

testThreeBlock
	|loader count|
    loader := GoogleLoaderFixture new.
    count := 0.
    loader requestPackages:{'corechart'.'gauge'.'treemap'.'geochart'} do:[count := count].
    loader requestPackages:{'corechart'} do:[count  := count + 1].
    loader requestPackages:{'gauge'.'corechart'.'treemap'} do:[count := count +1].
    loader requestPackages: {'treemap'} do:[count := count +1].
    loader satisfy:{'treemap'}.
    self assert:(loader packages includes:'treemap').
	self assert:(count == 1).
    loader satisfy:{'corechart'}.
    self assert:(count == 2).
    loader satisfy:{'gauge'}.
    self assert:(count ==3).
!

testValidate
	|loader |
    loader := GoogleLoaderFixture new.
   "Test of an invalid package"
   self should:[ loader  validateRequest:(LoadRequest new packages:{'bogus'} asSet; block:[];yourself)] raise: UnknownRequestError.
   "Test of a valid package"
   self shouldnt:[ loader validateRequest:(LoadRequest new packages:{'treemap'.'corechart'} asSet; block:[];yourself)] raise:UnknownRequestError .
! !

