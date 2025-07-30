///<reference types = "cypress"/>

describe("Remove Products", { testIsolation: false }, () => {
  let cart_qty = 4; 

  before(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.url().should("eq", "https://www.automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.captureSnapshot("Automation Exercise UI/Redirection to Automation Exercise");
  });

  it("Verify List of Products are visible", () => {
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title").should("be.visible").invoke("text").should("eq", "All Products");
  });

  it("Verify Item 1", () => {
    cy.get(":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Top");

    cy.get(":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a").click();
    cy.url().should("eq", "https://www.automationexercise.com/product_details/1");
    cy.get(".product-information > h2")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Top");

    cy.get("label").should("be.visible").invoke("text").should("eq", "Quantity:");
    cy.get("#quantity")
      .should("be.visible")
      .and("be.enabled")
      .clear()
      .type(cart_qty)
      .should("have.value", cart_qty);

    cy.get(":nth-child(5) > .btn").should("be.visible").click();
  });

  it("Verify successful item added to cart", () => {
    cy.get(".modal-title").should("be.visible").invoke("text").should("eq", "Added!");
    cy.get(".modal-body > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Your product has been added to cart.");
    cy.get(".modal-footer > .btn").should("be.visible").invoke("text").should("eq", "Continue Shopping");
    cy.contains("View Cart").should("be.visible").invoke("text").should("eq", "View Cart");
  });

  it("Verify successful view cart", () => {
    cy.contains("View Cart").click();
    cy.get("h4 > a").should("be.visible").invoke("text").should("eq", "Blue Top");
  });

  it("Verify qty displayed is the same as input", () => {
    cy.get(".disabled")
      .should("be.visible")
      .invoke("text")
      .should("eq", cart_qty.toString());
  });

  it("Verify successful removal of an item in the cart", () => {
    cy.get(".cart_quantity_delete > .fa").should("be.visible").click();
    cy.get("#empty_cart")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const cleanedText = text.trim().replace(/\s+/g, " ");
        expect(cleanedText).to.eq("Cart is empty! Click here to buy products.");
      });
  });
});