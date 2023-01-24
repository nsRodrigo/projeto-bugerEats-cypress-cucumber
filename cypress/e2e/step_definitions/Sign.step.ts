import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { signPage } from "@pages/SignPage";
import { Efield } from "cypress/fixtures/fields";
import { Emassa } from "cypress/fixtures/massa";
import { EMessage } from "cypress/fixtures/message";

/*
* Validate the registration of the worker's personal data
*/

Then(/^i see the title Cadastre-se para  fazer entregas$/, () => {
	signPage.validateTitle()
});

When(/^i fill in the field name$/, () => {
	signPage.inputField(Efield.name, Emassa.name)
});

When(/^i fill in the field cpf$/, () => {
	signPage.inputField(Efield.cpf, Emassa.cpf)
});

When(/^i fill in the field email$/, () => {
	signPage.inputField(Efield.email, Emassa.email)
});

When(/^i fill in the field whatsApp$/, () => {
	signPage.inputField(Efield.whatsApp, Emassa.whatsApp)
});

When(/^i fill in the field postalCode$/, () => {
	signPage.inputField(Efield.postalCode, Emassa.postalCode)
});

When(/^i click to search the postal code$/, () => {
	signPage.clickSearchPostalCodeButton()
});

When(/^i fill in the field addressNumber$/, () => {
	signPage.inputField(Efield.addressNumber, Emassa.addressNumber)
});

When(/^i fill in the field addressDetail$/, () => {
	signPage.inputField(Efield.addressDetail, Emassa.addressDetail)
});

When(/^i validate the field address$/, () => {
	signPage.validateField(Efield.address, Emassa.address)
});

When(/^i validate the field district$/, () => {
	signPage.validateField(Efield.district, Emassa.district)
});

When(/^i validate the field cityUF$/, () => {
	signPage.validateField(Efield.cityUF, Emassa.cityUF)
});

When(/^i get the deliver method deliverType$/, () => {
	signPage.getDeliverMethod(Emassa.deliverType)
});

When(/^i attach the image doc$/, () => {
	signPage.attachImageDoc()
});

When(/^i click to sign-in button$/, () => {
	signPage.clickSignInButton()
});

/*
* Validate error messages when not filling fields
*/

Then(/^i validate the message error name$/, () => {
	signPage.validateErrorMessage(EMessage.nameError)
});

Then(/^i validate the message error cpf$/, () => {
	signPage.validateErrorMessage(EMessage.cpfError)
});

Then(/^i validate the message error email$/, () => {
	signPage.validateErrorMessage(EMessage.emailError)
});

Then(/^i validate the message error postalCode$/, () => {
	signPage.validateErrorMessage(EMessage.postalCodeError)
});

Then(/^i validate the message error addressNumber$/, () => {
	signPage.validateErrorMessage(EMessage.addressNumberError)
});

Then(/^i validate the message error deliverType$/, () => {
	signPage.validateErrorMessage(EMessage.deliverTypeError)
});

Then(/^i validate the message error image doc$/, () => {
	signPage.validateErrorMessage(EMessage.imageError)
});


