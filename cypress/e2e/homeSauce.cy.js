/// <reference types="Cypress" />
import homeSaucePage from "../pages/SauceDemo/homeSaucePage";
import inventoryPage from "../pages/SauceDemo/inventoryPage";


describe("Page Object Model Exercise", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/")
    })

    it("Verify login", () => {
        homeSaucePage.login("standard_user", "secret_sauce")
        cy.location("pathname").should("eq", "/v1/inventory.html")
        inventoryPage.getTitle().should("have.text", "Products")
    })

    it("Verify error message when trying to login", () => {
        homeSaucePage.login("asdasd", "12345")
        cy.location("pathname").should("not.eq", "/v1/inventory.html")
        homeSaucePage.errorMessage().should("be.visible")
    })

})