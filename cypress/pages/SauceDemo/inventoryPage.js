class inventoryPage {

    getTitle() {
        return cy.get(".product_label");
    }

}

export default new inventoryPage();