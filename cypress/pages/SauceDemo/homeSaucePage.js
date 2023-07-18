/// <reference types="Cypress" />

class homeSaucePage {

    usernameInput() {
        return cy.get("[data-test=username]");
    }

    passwordInput() {
        return cy.get("[data-test=password]");
    }
    
    loginButton() {
        return cy.get("input#login-button");
    }

    errorMessage() {
        return cy.get('h3[data-test="error"]')
    }

    login(username, password) {
        this.usernameInput().type(username);
        this.passwordInput().type(password);
        this.loginButton().click();
    }

}

export default new homeSaucePage();