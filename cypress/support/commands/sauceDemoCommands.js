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


//Commandds to execute BEFORE
Cypress.Commands.add('clearBefore', () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
  cy.window().then((win) => {
    win.localStorage.clear();
    win.sessionStorage.clear();
  });
});


//Launch SauceDemo Website
Cypress.Commands.add("launchWebsite", () => {
    cy.visit('https://www.saucedemo.com');
    cy.title().should('contain', 'Swag Labs');
    cy.get('.login_logo').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled');
    cy.captureSnapshot("SauceDemo/Launch Website");
})

//Login SauceDemo  
Cypress.Commands.add('authLogin', (username, password) => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
    cy.captureSnapshot("SauceDemo/Valid Login2") 
    })

    
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
    cy.captureSnapshot(fileName);
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