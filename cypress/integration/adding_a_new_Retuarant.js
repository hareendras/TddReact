describe("adding a retuarnt", () => {
  it("displays the retuarant in the list", () => {
    const resturantName = "Sushi Place";
    cy.visit("http://localhost:1234");
    cy.get('[data-test="newRetuarantName"]').should("not.be.visible");
    cy.get('[data-test="addRestuarantButton"]').click();
    cy.get('[data-test="newRetuarantName"]').type(resturantName);
    cy.get('[data-test="saveNewRestuarantButton"]').click();
    cy.get('[data-test="newRetuarantName"]').should("be.visible");
    cy.contains(resturantName);
  });
});

