describe('The Home Page', function () {
    it('successfully loads', function () {
    cy.visit('/index.html');

    cy.get('canvas')

    cy.contains('Score:');
    
    cy.get("#score").contains('0');
    
    })
})
 