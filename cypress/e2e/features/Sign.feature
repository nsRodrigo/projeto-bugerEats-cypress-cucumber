Feature: Registration worker
Who worker
I Whant to register my documents 
To start to Job in the BugerEats

  Background: Access Register Page
    Given that i access the application
    When i click button
    Then i see the title "Cadastre-se para  fazer entregas"

  Scenario Outline: Validate the registration of the worker's personal data
    When i fill in the field "<name>"
    And i fill in the field "<cpf>"
    And i fill in the field "<email>"
    And i fill in the field "<whatsApp>"
    And i fill in the field "<postalCode>"
    And i click to search the postal code
    And i fill in the field "<addressNumber>"
    And i fill in the field "<addressDetail>"
    And i validade the field "<address>"
    And i validade the field "<district>"
    And i validade the field "<cityUF>"
    And i get the deliver method "<deliverType>"
    And i attach the image doc

    Examples: 
      | name               | cpf           | email            | whatsApp    | postalCode | addressNumber   | addressDetail | address | district    | cityUF         | deliverType |
      | Rodrigo Nascimento | 00000014141AA | rodrigo@mail.com | 11999998888 |   06386000 | Estrada Tambory |           804 | Casa 4  | Vila Mercês | Carapicuíba/SP | Van/Carro   |
