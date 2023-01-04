import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/HomePage";


Given(/^que acesso a aplicação$/, () => {
	homePage.acessarUrl()
});

When(/^visualizar o titulo "([^"]*)"$/, (titulo) => {
    homePage.validarTituloPage(titulo);
});

Then(/^eu visualizo o logo da BugerEats$/, () => {
	homePage.validarLogoHome();
});

Then(/^eu visualizo o titulo "([^"]*)"$/, (tituloHome) => {
	homePage.validarTituloHome(tituloHome);
});

Then(/^eu visualizo o sub-titulo "([^"]*)"$/, (subTituloHome) => {
	homePage.validarSubTituloHome(subTituloHome);
});

Then(/^eu visualizo o botão "Cadastre-se para fazer entregas'$/, () => {
	homePage.validarBotaoCadastreSe();
});
