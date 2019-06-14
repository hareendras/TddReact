describe("adding a retuarnt", () => {
  it("displays the retuarant in the list", () => {
    const resturantName = "Sushi Place";
    cy.visit("http://localhost:1234");
    cy.get('[data-test="addRestuarantButton"]').click();
    cy.get('[data-test="newRetuarantName"]').type(resturantName);
    cy.get('[data-test="saveNewRestuarantButton"]').click();
    cy.contains(resturantName);
  });
});

