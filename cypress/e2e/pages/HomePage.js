class HomePage{

    elements = {

        imageLogo: () => cy.get('img'),
        tituloHome: () => cy.get('h1'),
        subTituloHome: () => cy.get('p'),
        botaoCadastreSe: () => cy.get('a'),

    }

    acessarUrl() {
        cy.visit("/");
    }

    validarTituloPage(titulo) {
        cy.title("have.text", titulo);
    }

    validarLogoHome() {
        this.elements.imageLogo().should("be.visible");
    }

    validarTituloHome(tituloHome) {
        this.elements.tituloHome().should("have.text", tituloHome);
    }

    validarSubTituloHome(subTituloHome) {
        this.elements.subTituloHome().should("have.text", subTituloHome);
    }

    validarBotaoCadastreSe() {
        this.elements.botaoCadastreSe().should("be.visible")
    }

    hoverOnButton(){
        this.elements.botaoCadastreSe().realHover()
    }

    validateLayoutButtonChange(){
        this.elements.botaoCadastreSe().should("have.css", "background-color", "rgb(47, 184, 110)")
    }

    hoverOffButton(){
        this.elements.botaoCadastreSe().next().realHover()
    }

    validatePrimaryColorButton(){
        this.elements.botaoCadastreSe().should("have.css", "background-color", "rgb(52, 203, 121)")
    }

    buttonClick() {
        this.elements.botaoCadastreSe().click()
    }

}

export const homePage = new HomePage();