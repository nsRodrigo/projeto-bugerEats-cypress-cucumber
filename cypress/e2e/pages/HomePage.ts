class HomePage{

    elements = {

        imageLogo: () => cy.get('img'),
        homeTitle: () => cy.get('h1'),
        homeSubTitle: () => cy.get('p'),
        button: () => cy.get('a'),

    }

    /* method to access url */

    accessUrl() {
        cy.visit("/");
    }

    /* mehtod to validate the page title */

    validatePageTitle(title) {
       cy.title("have.text", title);
    }

    /* method to validate the logo of home page */

    validateHomeLogo() {
        this.elements.imageLogo().should("be.visible");
    }

    /* method to validate the title in the home page */

    validateHomeTitle(homeTitle) {
        this.elements.homeTitle().should("have.text", homeTitle);
    }

    /* method to validate the subtitle in the home page */

    validateHomeSubTitle(subTitle) {
        this.elements.homeSubTitle().should("have.text", subTitle);
    }

    /* method to validate that the button be visible */
    
    validateButton() {
        this.elements.button().should("be.visible")
    }

    /* method to position mouse over the button */

    hoverOnButton(){
        this.elements.button().realHover()
    }

    /* method to validate the button layout after put the mouse on button */

    validateLayoutButtonChange(){
        this.elements.button().should("have.css", "background-color", "rgb(47, 184, 110)")
    }

    /* method to getout the mouse over the button */

    hoverOffButton(){
        this.elements.button().next().realHover()
    }

    /* method to validate the primary color button */

    validatePrimaryColorButton(){
        this.elements.button().should("have.css", "background-color", "rgb(52, 203, 121)")
    }

    /* method to click button */

    buttonClick() {
        this.elements.button().click()
    }

}

export const homePage = new HomePage();