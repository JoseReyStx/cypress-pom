/// <reference types="Cypress" />

class homeSaucePage {

    elements = {
        usernameInput: () => cy.get("[data-test=username]"),
        passwordInput: () => cy.get("[data-test=password]"),
        loginButton: () => cy.get("input#login-button"),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    login(username, password){
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }

}

module.exports = new homeSaucePage()