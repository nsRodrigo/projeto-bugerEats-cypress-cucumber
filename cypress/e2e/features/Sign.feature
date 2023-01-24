Feature: Registration worker
Who worker
I Whant to register my documents 
To start to Job in the BugerEats

  Background: Access Register Page
    Given that i access the application
    When i click button
    Then i see the title Cadastre-se para  fazer entregas

  Scenario: Validate the registration of the worker's personal data
    When i fill in the field name
    And i fill in the field cpf
    And i fill in the field email
    And i fill in the field whatsApp
    And i fill in the field postalCode
    And i click to search the postal code
    And i fill in the field addressNumber
    And i fill in the field addressDetail
    And i validate the field address
    And i validate the field district
    And i validate the field cityUF
    And i get the deliver method deliverType
    And i attach the image doc

  Scenario: Validate error messages when not filling fields
    When i click to sign-in button
    Then i validate the message error name
    And i validate the message error cpf
    And i validate the message error email
    And i validate the message error postalCode
    And i validate the message error addressNumber
    And i validate the message error deliverType
    And i validate the message error image doc

  Scenario: Validate error message when not filling field
