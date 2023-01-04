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

}

export const homePage = new HomePage();