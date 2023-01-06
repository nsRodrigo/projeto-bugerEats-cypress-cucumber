import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/HomePage";

/* Access application */

Given(/^that i access the application$/, () => {
	homePage.accessUrl()
});

/* Validade the access to the BugerEats home page */

When(/^to view the title "([^"]*)"$/, (title) => {
    homePage.validatePageTitle(title);
});

Then(/^i see the BugerEats logo$/, () => {
	homePage.validateHomeLogo();
});

Then(/^i see the title "([^"]*)"$/, (homeTitle) => {
	homePage.validateHomeTitle(homeTitle);
});

Then(/^i see the subtitle "([^"]*)"$/, (subTitle) => {
	homePage.validateHomeSubTitle(subTitle);
});

Then(/^i visualize the button "Cadastre-se para fazer entregas'$/, () => {
	homePage.validateButton();
});

/* Validade behavor button 'cadastre-se para fazer entregas' */

When(/^i visualize the button layout$/, () => {
	homePage.validatePrimaryColorButton();
});

When(/^position the mouse over the button$/, () => {
	homePage.hoverOnButton();
});

Then(/^i visualize the button layout change$/, () => {
	homePage.validateLayoutButtonChange();
});

/*	Validate targeting on button click 'cadastre-se para fazer entregas' */

When(/^i click button$/, () => {
	homePage.buttonClick();
});




