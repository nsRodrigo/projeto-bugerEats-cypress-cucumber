class SignPage{

    elements = {

        name: () => cy.get('input[name="name"]'),
        cpf: () => cy.get('input[name="cpf"]'),
        email: () => cy.get('input[name="email"]'),
        whatsApp: () => cy.get('input[name="whatsapp"]'),
        postalCode: () => cy.get('input[name="postalcode"]'),
        searchPostalCodeButton: () => cy.get('input[type="button"][value="Buscar CEP"]'),
        addressNumber: () => cy.get('input[name="address-number"]'),
        addressDetail: () => cy.get('input[name="address-details"]'),
        address: () => cy.get('input[name="address"]'),
        district: () => cy.get('input[name="district"]'),
        cityUF: () => cy.get('input[name="city-uf"]'),
        image: () => cy.get('input[accept^="image"]'),

    }

        inputNameField(name){
            this.elements.name().invoke('val', name)
        }

        inputCPFField(cpf){
            this.elements.cpf().invoke('val', cpf)
        }

        inputEmailField(email){
            this.elements.email().invoke('val', email)
        }

        inputWhatsAppField(whatsApp){
            this.elements.whatsApp().invoke('val', whatsApp)
        }

        inputPostalCodeField(postalCode){
            this.elements.postalCode().invoke('val', postalCode)
        }

        clickSearchPostalCodeButton(){
            this.elements.searchPostalCodeButton().click()
        }

        inputAddressNumberField(addressNumber){
            this.elements.addressNumber().invoke('val', addressNumber)
        }

        inputAddressDetailField(addressDetail){
            this.elements.addressDetail().invoke('val', addressDetail).rea
        }

        validateAddressField(address) {
            this.elements.address().should('have.value', address)
        }  
        
        validateDistrictField(district) {
            this.elements.district().should('have.value', district)
        }   

        validateCityUFField(cityUF) {
            this.elements.cityUF().should('have.value', cityUF)
        }   

        getDeliverMethod(deliverType) {
            cy.contains('.delivery-method li', deliverType).click()
        }

        attachImageDoc(){
            cy.get('input[accept^="image"]').attachFile('cnh-digital.jpg')
        }
        
    }

export const signPage = new SignPage();