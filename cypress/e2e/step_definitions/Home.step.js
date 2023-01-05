import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/HomePage";


Given(/^that I access the application$/, () => {
	homePage.acessarUrl()
});

When(/^to view the title "([^"]*)"$/, (titulo) => {
    homePage.validarTituloPage(titulo);
});


Then(/^i see the BugerEats logo$/, () => {
	homePage.validarLogoHome();
});

Then(/^i see the title "([^"]*)"$/, (tituloHome) => {
	homePage.validarTituloHome(tituloHome);
});

Then(/^i see the subtitle "([^"]*)"$/, (subTituloHome) => {
	homePage.validarSubTituloHome(subTituloHome);
});

Then(/^i visualize the button "Cadastre-se para fazer entregas'$/, () => {
	homePage.validarBotaoCadastreSe();
});



When(/^eu visualizar o layout do botão$/, () => {
	homePage.validatePrimaryColorButton();
});

When(/^posicionar o mouse em cima do botão$/, () => {
	homePage.hoverOnButton();
});

Then(/^eu visualizo a alteração do layout do botão$/, () => {
	homePage.validateLayoutButtonChange();
});



When(/^eu clicar no botão$/, () => {
	homePage.buttonClick();
});




