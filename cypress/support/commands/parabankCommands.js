///<reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("LaunchParabank", () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.url().should('contain', '/register.htm');
    cy.title().should('contain', 'ParaBank | Register for Free Online Account Access');
    cy.captureSnapshot("Parabank/Redirection to Parabank Registration Page");
});

Cypress.Commands.add("AssertParabankRegPage", () => {
    cy.get(':nth-child(1) > [align="right"] > b').should('be.visible').and('contain', "First Name");
    cy.get(':nth-child(2) > [align="right"] > b').should('be.visible').and('contain', "Last Name");
    cy.get(':nth-child(3) > [align="right"] > b').should('be.visible').and('contain', "Address");
    cy.get(':nth-child(4) > [align="right"] > b').should('be.visible').and('contain', "City");
    cy.get(':nth-child(5) > [align="right"] > b').should('be.visible').and('contain', "State");
    cy.get(':nth-child(6) > [align="right"] > b').should('be.visible').and('contain', "Zip Code");
    cy.get(':nth-child(7) > [align="right"] > b').should('be.visible').and('contain', "Phone #");
    cy.get("[id='customer.firstName']").should('be.visible').and('be.empty');
    cy.get("[id='customer.lastName']").should('be.visible').and('be.empty');
    cy.get("[id='customer.address.street']").should('be.visible').and('be.empty');
    cy.get("[id='customer.address.city']").should('be.visible').and('be.empty');
    cy.get("[id='customer.address.state']").should('be.visible').and('be.empty');
    cy.get("[id='customer.address.zipCode']").should('be.visible').and('be.empty');
    cy.get("[id='customer.phoneNumber']").should('be.visible').and('be.empty');
    });


//Fill in fields in the Parabank registration form using commands.js file
Cypress.Commands.add('fillParabankRegistrationForm', (testData) => {
  testData = parabankRegTestData();
     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(testData.firstName);
     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(testData.lastName);
     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(testData.address);
     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(testData.city);
     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(testData.state);
     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(datestDatata.zipCode);
     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(testData.phoneNumber);
     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(testData.ssn);
     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(testData.userName);
     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(testData.password);
     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(testData.password);
     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
     cy.url().should('include', '/register.htm');
     cy.get('.title').should('contain', 'Welcome ' + testData.userName);
     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
     cy.captureSnapshot("Parabank/Filled Registration Form using commands.js");
});


Cypress.Commands.add('fillParabankRegistrationFormWithData', (testData) => {
     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(testData.firstName);
     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(testData.lastName);
     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(testData.address);
     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(testData.city);
     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(testData.state);
     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(testData.zipCode);
     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(testData.phoneNumber);
     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(testData.ssn);
     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(testData.userName);
     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(testData.password);
     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(testData.password);
     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
     cy.url().should('include', '/register.htm');
     cy.get('.title').should('contain', 'Welcome ' + testData.userName);
     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
     cy.captureSnapshot("Parabank/Filled Registration Form using faker-utility");
});



//Clear all cookies, local storage and session storage
Cypress.Commands.add('clearBefore', () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();  
  cy.window().then((win) => {
     win.localStorage.clear();
     win.sessionStorage.clear();
    })
});


//Screengrab command
// Cypress.Commands.add("takeScreenshot", (prefix) => {
//     const date = new Date();
//     const formattedDate = 
//       `${String(date.getMonth() + 1).
//         padStart(2, '0')}-${String(date.getDate()).
//         padStart(2, '0')}-${String(date.getFullYear()).
//           slice(-2)}`;
//     const fileName = `${prefix}-${formattedDate}`;
//     cy.captureSnapshot(fileName);
// });


//screenshot command to capture a snapshot with a date and time suffix
Cypress.Commands.add('captureSnapshot', (label = 'snapshot') => {
  const now = new Date();
  const date = now.toISOString().split('T')[0]; // e.g. "2025-07-23"
  const time = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // e.g. "14-35-07"
  const timestamp = `${date}_${time}`; // final format: "2025-07-23_14-35-07"
    cy.screenshot(`${label}_${timestamp}`, { capture: 'runner' });
});



//screenshot command to capture a snapshot with a date suffix
// Cypress.Commands.add('captureSnapshot', (label = 'snapshot') => {
//   const now = new Date().toISOString().replace(/[:.]/g, '-');
//   cy.screenshot(`${label} ${now}`, { capture: 'runner' });
// });

// Cypress.Commands.add('captureSnapshot', (label = 'snapshot') => {
//   const date = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
//   cy.screenshot(`${label} ${date}`);
// });

// Cypress.Commands.add('captureFullScreen', () => {
//   cy.task('captureFullScreen');
// });
 

//screenshot while page is scrolling
Cypress.Commands.add('scrollAndScreenshot', (prefix = 'scroll-screenshot', stepDelay = 500) => {
  cy.document().then((doc) => {
    const viewportHeight = Cypress.config('viewportHeight');
    const date = new Date();
    const formattedDate = 
      `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`;
    const fileName = `${prefix}-${formattedDate}`;


    // Scroll down one viewport height
    cy.scrollTo(0, viewportHeight);
    cy.wait(stepDelay);
    cy.screenshot(fileName);
  });
});


 
Cypress.Commands.add('selectGender', (gender) => {
  const genderLower = gender.toLowerCase();

  if (genderLower === 'male') {
    cy.get('input[type="radio"][value="Male"]').check({ force: true });
  } else if (genderLower === 'female') {
    cy.get('input[type="radio"][value="Female"]').check({ force: true });
  }
});




Cypress.Commands.add('disableAnimations', () => {
  cy.document().then((doc) => {
    const style = doc.createElement('style');
    style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
    doc.head.appendChild(style);
  });
});




Cypress.Commands.add('saveCart', () => {
  cy.window().then((win) => {
    const cart = win.localStorage.getItem('cart-contents') || '[]';
    Cypress.env('savedCart', cart);
  });
});

Cypress.Commands.add('restoreCart', () => {
  const cart = Cypress.env('savedCart') || '[]';
  cy.window().then((win) => {
    win.localStorage.setItem('cart-contents', cart);
  });
});



//Fill in fields in the Parabank registration form using utility file
// import {generateCustomerData} from '../support/utility';
// Cypress.Commands.add('fillRegistrationForm', () => {
//   const Userinput = generateCustomerData()
//   cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName).should('have.value', Userinput.FirstName);
//   cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName).should('have.value', Userinput.LastName);
//   cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address).should('have.value', Userinput.Address);
//   cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City).should('have.value', Userinput.City);
//   cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State).should('have.value', Userinput.State);
//   cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode).should('have.value', Userinput.ZipCode);
//   cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber).should('have.value', Userinput.PhoneNumber);
//   cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN).should('have.value', Userinput.SSN);
//   cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username).should('have.value', Userinput.Username);
//   cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password).should('have.value', Userinput.Password);
//   cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password).should('have.value', Userinput.Password); 
//   cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
//   cy.url().should('include', '/register.htm');
//   cy.get('.title').should('contain', 'Welcome ' + Userinput.Username);
//   cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
//   });