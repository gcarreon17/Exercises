///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';
import { productNames, productPrices, productImageUrls } from '../../support/utils/automationExerciseProductsUtils';


describe("AddToCart_Register_Payment_DownloadInvoice", { testIsolation: false }, () => {

  let testData;
  let productsData;

  before(() => {
    testData = automationExerciseTestData();
    productsData = {
      names: productNames, prices: productPrices, images: productImageUrls
    };
    cy.clearAllCookies();
  });


  it("Verify Home Page displays", () => {
    cy.LaunchWebsite();
  });


  it("Verify product name, price, and image match correctly", () => {
    cy.ProductList(productsData);
  //   cy.get('.features_items .product-image-wrapper')
  //     .should('have.length', productsData.names.length)
  //     .each(($el, index) => {
  //       // Assert product name
  //       cy.wrap($el).find('.productinfo > p')
  //         .should('be.visible')
  //         .and('have.text', productsData.names[index]);
  //       // Assert product price
  //       cy.wrap($el).find('.productinfo > h2')
  //         .should('be.visible')
  //         .and('have.text', productsData.prices[index]);
  //       // Assert product image
  //       cy.wrap($el).find('.productinfo > img')
  //         .should('be.visible')
  //         .and(($img) => {
  //           const src = $img.attr('src');
  //           expect(src, `Image src should include expected path`).to.include(productsData.images[index]);
  //           expect($img[0].naturalWidth, `Image should not be broken for "${productsData.names[index]}"`).to.be.greaterThan(0);
  //         });
  //       cy.captureSnapshot("Automation Exercise UI/Product Listing is displayed");
  //     });
  });



  it("Verify successful adding to cart", () => {
    cy.AddtoCart();
  //   cy.get('.features_items .product-image-wrapper')
  //     .should('have.length.greaterThan', 0)
  //     .then(($products) => {
  //       const randomIndex = Math.floor(Math.random() * $products.length);
  //       const $selected = $products[randomIndex];

  //       // Get product details: name, price, image and qty
  //       const quantity = 1;
  //       const selectedProductName = Cypress.$($selected).find('.productinfo > p').text().trim();
  //       const selectedProductPrice = Cypress.$($selected).find('.productinfo > h2').text().trim();
  //       const selectedProductImage = Cypress.$($selected).find('.productinfo > img').attr('src');


  //       // Store in Cypress environment
  //       Cypress.env('selectedProductName', selectedProductName);
  //       Cypress.env('selectedProductPrice', selectedProductPrice);
  //       Cypress.env('selectedProductImage', selectedProductImage);
  //       Cypress.env('selectedProductQty', quantity);

  //       // Log for debug
  //       cy.log(`Product added: ${quantity} | ${selectedProductName} | Price: ${selectedProductPrice} | Image: ${selectedProductImage}`);


  //       // Navigate to product detail page and add to cart
  //       cy.wrap($selected).within(() => {
  //         cy.get('a[href*="/product_details/"]').invoke('removeAttr', 'target').click();
  //       });
  //       cy.get('.product-information').should('be.visible');
  //       cy.contains('Add to cart').click();
  //       cy.captureSnapshot('Automation Exercise UI/Successful adding to cart');
  //       cy.get('.modal-content').should('be.visible');
  //       cy.get('.modal-title').should('be.visible').and('have.text', 'Added!');
  //       cy.log(`Product added: ${Cypress.env('selectedProductName')}`);
  //       cy.get('.modal-body').should('contain.text', 'Your product has been added to cart.');
  //       cy.contains('View Cart').should('be.visible').and('have.attr', 'href').and('include', 'view_cart');
  //       cy.get('#cartModal').should('be.visible').contains('Continue Shopping').click();
  //       cy.captureSnapshot("Automation Exercise UI/Successful adding to cart")
  //     });
  });


  it("Verify successful review of a product", () => {
    cy.ReviewProduct(testData);
  //   cy.get(".active > a")
  //     .should('be.visible')
  //     .invoke('text')
  //     .should('eq', "Write Your Review");
  //   cy.get("#name")
  //     .should('be.visible')
  //     .and('have.attr', "placeholder", "Your Name")
  //     .type(testData.signUpName);
  //   cy.get("#email")
  //     .should('be.visible')
  //     .and('have.attr', "placeholder", "Email Address")
  //     .type(testData.signUpEmailAddress);
  //   cy.get("#review")
  //     .should('be.visible')
  //     .and('have.attr', "placeholder", "Add Review Here!")
  //     .type("Testing");
  //   cy.get('#button-review').should('be.visible').click();
  //   cy.get('span').invoke('text').should('include', 'Thank you for your review.');
  //   cy.captureSnapshot("Automation Exercise UI/Successful Product Review");
  });



  it("Verify product exists in cart with correct qty, name, price, and image", () => {
    cy.CheckCartDetails(productsData);
    // const quantity = 1;
    // const expectedName = Cypress.env('selectedProductName');
    // const expectedPrice = Cypress.env('selectedProductPrice');
    // const expectedImage = Cypress.env('selectedProductImage');
    // const expectedQty = Cypress.env('selectedProductQty', quantity);

    // cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    // cy.url().should('include', '/view_cart');

    // // Assert Product Name
    // cy.get('h4 > a').should('be.visible').invoke('text').should('eq', expectedName);

    // // Assert Product Price
    // cy.get('.cart_price > p').should('be.visible').invoke('text').should('eq', expectedPrice);

    // // Assert Quantity
    // cy.get('.quantity').should('be.visible').invoke('text').should('eq', "Quantity");
    // cy.get('.cart_quantity .disabled').should('be.visible').invoke('text').should('eq', expectedQty.toString());


    // // Assert Product Image
    // cy.get('.cart_product img')
    //   .should('be.visible')
    //   .and('have.attr', 'src')
    //   .then((src) => {
    //     const actualPath = new URL(src, window.location.origin).pathname;
    //     expect(actualPath).to.eq(expectedImage);
    //   });

    // cy.captureSnapshot("Automation Exercise UI/Verified product in cart with correct qty, name, price, and image");
  });



  it("Verify need to register to proceed with check-out", () => {
    cy.RegisterToCheckOut(testData);
    // cy.get(".col-sm-6 > .btn").should('be.visible').and("have.text", "Proceed To Checkout").and("not.be.disabled").click();
    // cy.url().should('eq', "https://www.automationexercise.com/view_cart");
    // cy.get(".modal-title").should('be.visible').invoke('text').should('eq', "Checkout");
    // cy.get(".modal-body > :nth-child(2) > a > u").should('be.visible').invoke('text').should('eq', "Register / Login")
    // cy.get('.modal-body > :nth-child(2) > a > u').click();
    // cy.url().should('eq', "https://www.automationexercise.com/login");
    // cy.captureSnapshot("Automation Exercise UI/Verified redirected to Signup/Login page");
  });

  // //Fixture user data and fill in the registration form
  // cy.fixture("AutomationExerciseUser.json").then((Userdata) => {
  //   //"user" + faker.string.alpha(2) + "@test.com";
  //   var Name = Math.random().toString(36).substring(2, 9);
  //   var EmailAddress = Name + "@test.com";
  //   cy.get('[data-qa="signup-name"]').type(Name).should("have.value", Name);
  //   cy.get('[data-qa="signup-email"]')
  //     .type(EmailAddress)
  //     .should("have.value", EmailAddress);


  it("Verify assertion and Fill up of SignUp Form is correct", () => {
    cy.SignUpLogin(testData)
    // cy.url().should('eq', "https://www.automationexercise.com/login");
    // cy.contains("Signup / Login").click();
    // cy.get(".signup-form > h2").should('be.visible');
    // cy.get('[data-qa="signup-name"]').should("have.value", "");
    // cy.get('[data-qa="signup-email"]').should("have.value", "");
    // cy.get('[data-qa="signup-button"]').should('be.visible').and("be.enabled");
    // cy.captureSnapshot("Automation Exercise UI/Sign Up Page is displayed");
    // cy.get('[data-qa="signup-name"]').type(testData.signUpName);
    // cy.get('[data-qa="signup-email"]').type(testData.signUpEmailAddress);
    // cy.captureSnapshot("Automation Exercise UI/Filled up Sign Up Page");
    // cy.get('[data-qa="signup-button"]').click();
    // cy.captureSnapshot("Automation Exercise UI/Verified successful  filled up SignUp Page");
  });



  it("Verify assertion and Fill up Registration Page is correct", () => {
    cy.Registration(testData)
    // const title = Math.random() < 0.5 ? 'Mr' : 'Mrs';
    // //Title
    // cy.get('.clearfix > :nth-child(1)').should('be.visible').and('have.text', 'Title');
    // cy.get(':nth-child(3) > .top').should('be.visible').invoke('text').should('contain', 'Mr.');
    // cy.get(':nth-child(4) > .top').should('be.visible').invoke('text').should('contain', 'Mrs.');
    // cy.log(`Randomly selected title: ${testData.title}`);
    // cy.get('.clearfix').find(`input[type="radio"][value="${testData.title}"]`).check({ force: true }).should('be.checked');
    // //Name
    // cy.get('form > :nth-child(3) > label').invoke('text').should('eq', "Name *");
    // cy.get('[data-qa="name"]').invoke('val')
    //   .then((enteredName) => {
    //     cy.log('Name is: ' + enteredName);
    //     expect(enteredName).to.equal(testData.signUpName);
    //   });
    // //Email       
    // cy.get('form > :nth-child(4) > label').invoke('text').should('eq', "Email *");
    // cy.get('[data-qa="email"]').invoke('val')
    //   .then((enteredEmail) => {
    //     cy.log('Email is:' + enteredEmail)
    //     expect(enteredEmail).to.equal(testData.signUpEmailAddress);
    //   });
    // //Password
    // cy.get(':nth-child(5) > label').invoke('text').should('eq', "Password *");
    // cy.get('[data-qa="password"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.password);
    // //Date of Birth
    // cy.get(':nth-child(6) > label').invoke('text').should('eq', "Date of Birth");
    // //DOB-Date
    // cy.get('[data-qa="days"]').should('be.visible').invoke('text')
    //   .then((text) => {
    //     const cleanText = text.replace(/\s+/g, ' ').trim();
    //     expect(cleanText).to.contain('Day');
    //     cy.get('[data-qa="days"]').select(testData.day);
    //   });
    // //DOB-Month
    // cy.get('[data-qa="months"]').should('be.visible').invoke('text')
    //   .then((text) => {
    //     const cleanText = text.replace(/\s+/g, ' ').trim();
    //     expect(cleanText).to.contain("Month");
    //     cy.get('[data-qa="months"]').select(testData.longMonth);
    // //DOB-Year
    // cy.get('[data-qa="years"]').should('be.visible').invoke('text')
    //   .then((text) => {
    //      const cleanText = text.replace(/\s+/g, ' ').trim();
    //      expect(cleanText).to.contain('Year');
    // cy.get('[data-qa="years"]').select(testData.year);
    //       });
    // //Newsletter and Special offer
    // cy.get(':nth-child(7) > label').invoke('text').should('eq', "Sign up for our newsletter!");
    // cy.get(':nth-child(8) > label').invoke('text').should('eq', "Receive special offers from our partners!");
    // cy.get('#newsletter').should('be.visible').check().should('be.checked');
    // cy.get('#optin').should('be.visible').check().should('be.checked');
    // cy.get('form > .title > b').invoke('text').should('eq', "Address Information");
    // //First Name
    // cy.get(':nth-child(11) > label').invoke('text').should('eq', "First name *");
    // cy.get('[data-qa="first_name"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.firstName);
    // //Last Name
    // cy.get(':nth-child(12) > label').invoke('text').should('eq', "Last name *");
    // cy.get('[data-qa="last_name"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.lastName);
    // //Company
    // cy.get(':nth-child(13) > label').invoke('text').should('eq', "Company");
    // cy.get('[data-qa="company"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="company"]').type(testData.company);
    // //Address
    // cy.get('.inline-infos').invoke('text').should('eq', "(Street address, P.O. Box, Company name, etc.)");
    // cy.get('[data-qa="address"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="address"]').type(testData.address);
    // //Address2
    // cy.get(':nth-child(15) > label').invoke('text').should('eq', "Address 2");
    // cy.get('[data-qa="address2"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="address2"]').type(testData.address);
    // //Country
    // cy.contains('label', 'Country *');
    // cy.get('[data-qa="country"]').should('be.visible').and('be.enabled');
    // cy.get('[data-qa="country"] option:selected').should('have.text', 'India');
    // cy.get('[data-qa="country"]').select(testData.country);
    // cy.get('[data-qa="country"]').should('have.value', testData.country);
    // //State
    // cy.contains('label', 'State *');
    // cy.get('[data-qa="state"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="state"]').type(testData.state);
    // //City
    // cy.contains('label', 'City *');
    // cy.get('[data-qa="city"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="city"]').type(testData.city);
    // //Zip Code
    // cy.contains('label', 'Zipcode *');
    // cy.get('[data-qa="zipcode"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="zipcode"]').type(testData.zipCode);
    // //Mobile Number
    // cy.contains('label', 'Mobile Number *');
    // cy.get('[data-qa="mobile_number"]').should('be.visible').and('be.empty').and('be.enabled');
    // cy.get('[data-qa="mobile_number"]').type(testData.mobileNumber);
    // //Create Account button
    // cy.get('[data-qa="create-account"]').should('have.text', "Create Account").and('be.enabled');
    // cy.captureSnapshot("Automation Exercise UI/Verified Registration Page is displayed");
    // cy.get('[data-qa="create-account"]').click();
    // });
  });



  it("Verify successful registration of user account", () => {
    cy.SuccessfulRegistration(testData);
    // cy.url().should('eq', 'https://www.automationexercise.com/account_created');
    // cy.contains('Account Created!').should('be.visible').and('have.text', "Account Created!");
    // cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text', "Congratulations! Your new account has been successfully created!");
    // cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text', "You can now take advantage of member privileges to enhance your online shopping experience with us.")
    // cy.get('[data-qa="continue-button"]').should('be.visible').and('not.have.class', 'disabled').click();
    // cy.captureSnapshot("Automation Exercise UI/Verify successful registration of user account");
  });

  

  it("Verify Login as Name is correct", () => {
    cy.LoginAsName(testData);
    // cy.get(":nth-child(10) > a").should('be.visible').and("contain", `Logged in as ${testData.signUpName}`);
    // cy.captureSnapshot("Automation Exercise UI/Verified Login as Name is correct");
  });


  it("Verify successful Proceed to Checkout", () => {
    cy.ProceedCheckout(testData)
    // cy.get(".shop-menu > .nav > :nth-child(3) > a").should('be.visible').click();
    // cy.url().should('eq', "https://www.automationexercise.com/view_cart");
    // cy.contains("Proceed To Checkout").should('be.visible').invoke('text').should('eq', "Proceed To Checkout");
    // cy.get(".col-sm-6 > .btn").should('be.visible').click();
    // cy.captureSnapshot("Automation Exercise UI/Verified Checkout screen");
  });


  it("Verify Checkout screen - Address Details section is displayed", () => {
    cy.AddressDetailsSection(testData)
    // cy.url().should('eq', "https://www.automationexercise.com/checkout");
    // cy.get(":nth-child(2) > .heading").should('be.visible').invoke('text').should('eq', "Address Details");
    // cy.get('#address_delivery > .address_city').should('be.visible')
    //   .invoke('text')
    //   .then((text) => {
    //     expect(text.replace(/\s+/g, ' ').trim()).to.eq(`${testData.city} ${testData.state} ${testData.zipCode}`);
    //   });

    // cy.get('#address_delivery > .address_country_name')
    //   .should('be.visible')
    //   .and("have.text", testData.country);

    // cy.get('#address_delivery > .address_phone')
    //   .should('be.visible')
    //   .and("have.text", testData.mobileNumber);
  });


  it("Verify Checkout screen - Billing Details section  is displayed", () => {
    cy.BillingDetailsSection(testData);
    // cy.url().should('eq', "https://www.automationexercise.com/checkout");
    // cy.get('#address_invoice > .address_title > .page-subheading').should('be.visible').invoke('text').should('eq', "Your billing address");
    // cy.get('#address_invoice > .address_firstname').should('be.visible').and("have.text", `${testData.titleWithPeriod} ${testData.firstName} ${testData.lastName}`);
    // cy.get('#address_invoice > :nth-child(3)').should('be.visible').and("have.text", testData.company);
    // cy.get('#address_invoice > :nth-child(4)').should('be.visible').and("have.text", testData.address);
    // cy.get('#address_invoice > :nth-child(5)').should('be.visible').and("have.text", testData.address);
    // cy.get('#address_invoice > .address_city').should('be.visible')
    //   .invoke('text')
    //   .then((text) => {
    //     const cleanedText = text.replace(/\s+/g, ' ').trim();
    //     const expected = `${testData.city} ${testData.state} ${testData.zipCode}`;
    //     expect(cleanedText).to.eq(expected);
    //   });
    // cy.get('#address_invoice > .address_country_name').should('be.visible').and("have.text", testData.country);
    // cy.get('#address_invoice > .address_phone').should('be.visible').and("have.text", testData.mobileNumber);
  });


  it("Verify successful Review your Order", () => {
    cy.ReviewOrder(testData)
    // const expectedName = Cypress.env('selectedProductName');
    // const expectedPrice = Cypress.env('selectedProductPrice');
    // const expectedImage = Cypress.env('selectedProductImage');
    // const expectedQty = Cypress.env('selectedProductQty') || 1;
    // const unitPrice = Number(expectedPrice.replace(/[^\d]/g, ''));
    // const expectedTotal = unitPrice * expectedQty;

    // cy.get('table.table-condensed thead .cart_menu td')
    //   .filter((i, el) => Cypress.$(el).text().trim() !== '')
    //   .should('have.length', testData.expectedHeaders.length)
    //   .each(($td, index) => {
    //     cy.wrap($td).invoke('text').should('eq', testData.expectedHeaders[index])
    //   });
    // // Assert Product Image
    // cy.get('.cart_product img')
    //   .should('be.visible')
    //   .and('have.attr', 'src')
    //   .then((src) => {
    //     const actualPath = new URL(src, window.location.origin).pathname;
    //     expect(actualPath).to.eq(expectedImage);
    //   });
    // // Assert Quantity
    // cy.get('.cart_quantity .disabled').should('be.visible').invoke('text').should('eq', expectedQty.toString());
    // // Assert Product Name
    // cy.get('h4 > a').should('be.visible').invoke('text').should('eq', expectedName);
    // // Assert Product Price
    // cy.get('.cart_price > p').should('be.visible').invoke('text').should('eq', expectedPrice);
    // // Assert Total
    // cy.get('h4 > b').should('be.visible').invoke('text').should('eq', "Total Amount");
    // cy.get('.cart_total_price').then($els => {
    //   cy.log(`Found ${$els.length} price element(s)`);
    //   cy.get('.cart_total_price')
    //     .should('have.length.at.least', 1)
    //     .last()
    //     .invoke('text')
    //     .then((totalText) => {
    //       const displayedTotal = Number(totalText.replace(/[^\d]/g, ''));
    //       expect(displayedTotal).to.eq(expectedTotal);
    //       cy.log(`Unit price: ${unitPrice}, Qty: ${expectedQty}, Expected total: ${expectedTotal}`);
    //       cy.get(':nth-child(7) > .btn').should('be.visible').invoke('text').should('eq', "Place Order");
    //       cy.get(':nth-child(7) > .btn').click();
    //     });
    // });
  });



  it("Verify successful Payment screen", () => {
    cy.Payment(testData);
//     cy.url().should('eq', "https://www.automationexercise.com/payment");
//     cy.get(".heading").should('be.visible').invoke("text").should('eq', "Payment");
//     cy.get(":nth-child(2) > .col-sm-12 > .control-label").should('be.visible').invoke("text").should('eq', "Name on Card");
//     cy.get('[data-qa="name-on-card"]').should('be.visible').invoke('val').and('eq', '');
//     cy.get('[data-qa="name-on-card"]').type(testData.signUpName);
//     cy.get(":nth-child(3) > .col-sm-12 > .control-label").should('be.visible').invoke("text").should('eq', "Card Number");
//     cy.get('[data-qa="card-number"]').should('be.visible').invoke('val').and('eq', '');
//     cy.get('[data-qa="card-number"]').type(testData.cardNumber);
//     cy.get(".cvc > .control-label").should('be.visible').invoke("text").should('eq', "CVC");
//     cy.get('[data-qa="cvc"]').should('be.visible').and("have.value", '').and('have.attr', "placeholder", "ex. 311").type(testData.cvv);
//     cy.get(":nth-child(2) > .control-label").should('be.visible').invoke("text").should('eq', "Expiration");
//     cy.get('[data-qa="expiry-month"]').should('be.visible').and("have.value", '').and('have.attr', "placeholder", "MM").type(testData.shortMonth);
//     cy.get('[data-qa="expiry-year"]').should('be.visible').and("have.value", '').and('have.attr', "placeholder", "YYYY").type(testData.creditYr);
//     cy.captureSnapshot("Automation Exercise UI/Verified Payment screen");
//     cy.contains("Pay and Confirm Order").should('be.visible').and("be.enabled").invoke("text").should('eq', "Pay and Confirm Order");
//     cy.contains("Pay and Confirm Order").click();
//     cy.get("body").then(($body) => {
//       if ($body.find("#success_message > .alert-success").length > 0) {
//         cy.get("#success_message > .alert-success").invoke("text").then((text) => {
//           cy.log("Captured Message: " + text)
//             .expect(text.trim()).to.eq("Your order has been placed successfully!");
//         });
//       } else {
//         cy.log("Success message was not found in the DOM.");
//       }
//     cy.captureSnapshot("Automation Exercise UI/Verified successful payment");
  });



  it("Verify successful checkout and download invoice", () => {
    cy.CheckoutDownload();
    // cy.url().should('include', "https://www.automationexercise.com/payment_done/");
    // cy.get('[data-qa="order-placed"] > b').should('be.visible').invoke("text").should('eq', "Order Placed!");
    // cy.get(".col-sm-9 > p").should('be.visible').invoke("text").should('eq', "Congratulations! Your order has been confirmed!");
    // cy.captureSnapshot("Automation Exercise UI/Verified successful checkout");
    });
  



  it("Verify successful download of invoice", () => {
    cy.VerifydownloadedFile(testData)
    // const expectedQty = Cypress.env('selectedProductQty') || 1;
    // const expectedPrice = Cypress.env('selectedProductPrice');
    // const unitPrice = Number(expectedPrice.replace(/[^\d]/g, ''));
    // const expectedTotal = unitPrice * expectedQty;
    // cy.get(".col-sm-9 > .btn-default").should('be.visible').invoke("text").should('eq', "Download Invoice");
    // cy.get(".col-sm-9 > .btn-default").click();
    // cy.readFile("cypress/downloads/invoice.txt").should('exist').its('length').should('be.gt', 0);
    // cy.readFile("cypress/downloads/invoice.txt").should('eq', `Hi ${testData.firstName} ${testData.lastName}, Your total purchase amount is ${expectedTotal}. Thank you`);
    // cy.captureSnapshot("Automation Exercise UI/Verified successful download of invoice");
   });
  });