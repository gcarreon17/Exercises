/// <reference types="cypress" />

describe("Extract All URLs from a Website", {testIsolation: true}, () => {
  it("Should get all links on the page", () => {
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    let linksArray = [];

    cy.get("a")
      .each(($el) => {
        const link = $el.prop("href");
        if (link) {
          cy.log(link);
          linksArray.push(link);
        }
      })
      .then(() => {
        cy.writeFile("cypress/fixtures/urls.json", linksArray);
      });

    // Verify total number of URLs are correct
    cy.get("a").should("have.length", 147);
    cy.log(`Total number of links found: ${linksArray.length}`);
    cy.captureSnapshot("Automation Exercise UI/Extracted all URLs from the website");
  });
});