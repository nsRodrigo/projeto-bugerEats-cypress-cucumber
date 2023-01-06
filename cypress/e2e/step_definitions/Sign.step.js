import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { signPage } from "@pages/SignPage";


When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputNameField(args1)
});

When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputCPFField(args1)
});

When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputEmailField(args1)
});

When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputWhatsAppField(args1)
});

When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputPostalCodeField(args1)
});

When(/^i click to search the postal code$/, () => {
	signPage.clickSearchPostalCodeButton()
});

When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputAddressNumberField(args1)
});

When(/^i fill in the field "([^"]*)"$/, (args1) => {
	signPage.inputAddressDetailField(args1)
});

When(/^i validade the field "([^"]*)"$/, (args1) => {
	signPage.validateAddressField(args1)
});

When(/^i validade the field "([^"]*)"$/, (args1) => {
	signPage.validateDistrictField(args1)
});

When(/^i validade the field "([^"]*)"$/, (args1) => {
	signPage.validateCityUFField(args1)
});

When(/^i get the deliver method "([^"]*)"$/, (args1) => {
	signPage.getDeliverMethod(args1)
});

When(/^i attach the image doc$/, () => {
	signPage.attachImageDoc()
});
