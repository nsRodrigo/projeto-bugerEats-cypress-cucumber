Feature: Validade Home
How client
I Want access the page https://buger-eats.vercel.app/
To be able to buy on the website

  Background: Access application
    Given that i access the application

  Scenario: Validate the access to the BugerEats home page
    When to view the title "BugerEats"
    Then i see the BugerEats logo
    And i see the title "Seja um parceiro entregador pela Buger Eats"
    And i see the subtitle "Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe."
    And i visualize the button "Cadastre-se para fazer entregas'

  Scenario: Validate behavor button 'cadastre-se para fazer entregas'
    When i visualize the button layout
    And position the mouse over the button
    Then i visualize the button layout change

  Scenario: Validate targeting on button click 'cadastre-se para fazer entregas'
    When i click button
    Then i see the title "Cadastre-se para  fazer entregas"
