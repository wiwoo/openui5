/*global opaTest *///declare unusual global vars for JSLint/SAPUI5 validation

sap.ui.require(
[],
function () {
	"use strict";

	QUnit.module("Phone busy indication");

	opaTest("Should see a global busy indication while loading the metadata", function (Given, When, Then) {
		// Arrangements
		Given.iStartTheAppOnAPhoneWithDelay("", 10000);

		//Actions
		When.onTheAppPage.iLookAtTheScreen();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheBusyIndicator().
			and.iTeardownMyAppFrame();
	});

	opaTest("Should see a busy indication on the master and detail after loading the metadata", function (Given, When, Then) {
		// Arrangements
		Given.iStartTheAppOnAPhoneWithDelay("", 10000);

		//Actions
		When.onTheAppPage.iWaitUntilTheBusyIndicatorIsGone();

		// Assertions
		Then.onTheMasterPage.iShouldSeeTheBusyIndicator().
			and.iTeardownMyAppFrame();
	});

});
