class SignPage {

    elements = {

        title: () => cy.xpath('//h1[text() = "Cadastre-se para "]'),
        searchPostalCodeButton: () => cy.get('input[type="button"][value="Buscar CEP"]'),
        buttonSignin: () => cy.get('.button-success'),
    }

    validateTitle() {
        this.elements.title().should('have.text', 'Cadastre-se para  fazer entregas')
    }

    validateField(field: string, value: string) {
        cy.get('input[name="'+ field +'"]').should('have.value', value)
    }

    validateErrorMessage(error: string) {
        cy.xpath('//span[contains(text(), "'+ error +'")]').should('have.text', error)
    }

    inputField(field: string, value: string) {
        cy.get('input[name="'+ field +'"]').type(value)
    }

    attachImageDoc() {
        cy.get('input[accept^="image"]').attachFile('cnh-digital.jpg')
    }

    clickSearchPostalCodeButton() {
        this.elements.searchPostalCodeButton().click({ force: true })
    }

    clickSignInButton() {
        this.elements.buttonSignin().click({ force: true })
    }

    getDeliverMethod(deliverType: string) {
        cy.contains('.delivery-method li', deliverType).click()
    }

}

export const signPage = new SignPage();