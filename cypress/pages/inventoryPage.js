class inventoryPage {

    elements = {
        title: () => cy.get(".product_label")
    }

}

module.exports = new inventoryPage()