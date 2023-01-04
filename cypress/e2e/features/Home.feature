Feature: Validar Home
Como cliente
Quero acessar a pagina https://buger-eats.vercel.app/
Para efetuar compras no site

  Background: Acessar aplicação
    Given que acesso a aplicação

  Scenario: Validar acesso a home da BugerEats
    When visualizar o titulo "Buger Eats"
    Then eu visualizo o logo da BugerEats
    And eu visualizo o titulo "Seja um parceiro entregador pela Buger Eats"
    And eu visualizo o sub-titulo "Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe."
    And eu visualizo o botão "Cadastre-se para fazer entregas'

  Scenario: Validar comportamento do botão 'cadastre-se para fazer entregas'
    When posicionar o mouse em cima do botão "Cadastre-se para fazer entregas'
    Then eu visualizo a alteração do layout do botão
    And eu visualizo o titulo "Seja um parceiro entregador pela Buger Eats"
    And eu visualizo o sub-titulo "Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe."
    And eu visualizo o botão "Cadastre-se para fazer entregas'
