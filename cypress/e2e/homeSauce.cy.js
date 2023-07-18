/// <reference types="Cypress" />
import homeSaucePage from "../pages/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";


describe("Page Object Model Exercise", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/")
    })

    it("Verify login", () => {
        homeSaucePage.login("standard_user", "secret_sauce")
        cy.location("pathname").should("eq", "/v1/inventory.html")
        inventoryPage.elements.title().should("have.text", "Products")
    })

    it("Verify error message when trying to login", () => {
        homeSaucePage.login("asdasd", "12345")
        cy.location("pathname").should("not.eq", "/v1/inventory.html")
        homeSaucePage.elements.errorMessage().should("be.visible")
    })

})