/// <reference types="cypress" />

import parabankPage from '../../support/pages/parabankPages.js';
import { parabankTestData } from '../../support/utils/parabankUtils';



describe("Parabank Registration", { testIsolation: false }, () => {
  let testData;
  
  before(() => {
    cy.clearBefore();
    testData = parabankTestData();
  });


  it("Verify successful launch of Parabank Registration Page", () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.url().should('contain', '/register.htm');
    cy.title().should('contain', 'ParaBank | Register for Free Online Account Access');
    cy.captureSnapshot("Parabank/Redirection to Parabank Registration Page");
  });


  // it("Verify Registration Page fields are displayed", () => {
  //     cy.get(':nth-child(1) > [align="right"] > b').should('be.visible').and('contain', "First Name");
  //     cy.get(':nth-child(2) > [align="right"] > b').should('be.visible').and('contain', "Last Name");
  //     cy.get(':nth-child(3) > [align="right"] > b').should('be.visible').and('contain', "Address");
  //     cy.get(':nth-child(4) > [align="right"] > b').should('be.visible').and('contain', "City");
  //     cy.get(':nth-child(5) > [align="right"] > b').should('be.visible').and('contain', "State");
  //     cy.get(':nth-child(6) > [align="right"] > b').should('be.visible').and('contain', "Zip Code");
  //     cy.get(':nth-child(7) > [align="right"] > b').should('be.visible').and('contain', "Phone #");
  //     cy.get("[id='customer.firstName']").should('be.visible').and('be.empty');
  //     cy.get("[id='customer.lastName']").should('be.visible').and('be.empty');
  //     cy.get("[id='customer.address.street']").should('be.visible').and('be.empty');
  //     cy.get("[id='customer.address.city']").should('be.visible').and('be.empty');
  //     cy.get("[id='customer.address.state']").should('be.visible').and('be.empty');
  //     cy.get("[id='customer.address.zipCode']").should('be.visible').and('be.empty');
  //     cy.get("[id='customer.phoneNumber']").should('be.visible').and('be.empty');
  //     });

  //Verify registration page using POM
  it("Verify field display in Registration Page using POM", () => {
    parabankPage.parabankRegistrationForm(testData);
    cy.captureSnapshot("Parabank/Registration Page Field Display");
  });

        // Enter default values in the Registration form
    // it("Verify Filled Registration Form", () => {
    //     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type('TestFirstName');
    //     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type('TestLastName');
    //     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type('TestAddress');
    //     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type('TestCity');
    //     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type('TestState');
    //     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type('12345');
    //     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type('1234567890');
    //     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type('123-45-6789');
    //     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type('TestUsername1');
    //     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type('TestPassword');
    //     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type('TestPassword');
    //     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //     cy.url().should('contain', '/register.htm');
    //     cy.get('.title').should('contain', 'Welcome ' + 'TestUsername');
    //     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //     cy.captureSnapshot("Parabank/Filled Registration Form") ;
    //     });
    


        //Fill in the Registration form from fixture data
    // it("Verify Filled Registration Form using fixture", () => {
    //      cy.fixture('RegistrationData2').then((fixtureData) => {
    //      cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(fixtureData.firstName);
    //      cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(fixtureData.lastName);
    //      cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(fixtureData.address);
    //      cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(fixtureData.city);
    //      cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(fixtureData.state);
    //      cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(fixtureData.zipCode);
    //      cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(fixtureData.phoneNumber);
    //      cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(fixtureData.ssn);
    //      cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(fixtureData.userName);
    //      cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(fixtureData.password);
    //      cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(fixtureData.password);
    //      cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //      cy.url().should('contain', '/register.htm');
    //      cy.get('.title').should('contain', 'Welcome ' + fixtureData.userName);
    //      cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //      cy.captureSnapshot("Parabank/Filled Registration Form");
    //     });
    //   });
        
             

        //Fill in the Registration form from using utility.js
    // it("Verify Filled Registration Form using faker-utility", () => {
    //     const testData =  parabankTestData()
    //     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(testData.firstName);
    //     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(testData.lastName);
    //     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(testData.address);
    //     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(testData.city);
    //     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(testData.state);
    //     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(testData.zipCode);
    //     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(testData.phoneNumber);
    //     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(testData.ssn);
    //     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(testData.userName);
    //     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(testData.password);
    //     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(testData.password);
    //     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //     cy.url().should('include', '/register.htm');
    //     cy.get('.title').should('contain', 'Welcome ' + testData.userName);
    //     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //     cy.captureSnapshot("Parabank/Filled Registration Form using faker-utility");
    //    });

    
      //  Fill in the Registration form from using commands.js
    // it("Fill in the Registration form using commands.js", () => {
    //     cy.fillParabankRegistrationForm(testData) ;
    //     cy.captureSnapshot("Parabank/Filled Registration Formn using commands.js");
    // });
    

        // Fill in the Registration form using page object model
    it("Fill in the Registration form using POM", () => {
        parabankPage.fillRegistrationFormWithData(testData);
        // cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register')
        // .click();
        // cy.url().should('include', '/register.htm');
        // cy.get('.title').should('contain', 'Welcome ' + testData.userName);
        // cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
        cy.captureSnapshot("Parabank/Filled Registration Form using POM"); 
    });


    it("Verify successful logout", () => {
      cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click();
      cy.url().should('contain', '/index.htm');
      cy.get('h2').should('be.visible').and('contain', 'Customer Login');
      cy.captureSnapshot("Parabank/Successfully logged out")
  });       
});