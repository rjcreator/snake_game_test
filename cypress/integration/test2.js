describe('The downarrow', function () {
    it('work downarrow', function () {
    cy.visit('/index.html');

    cy.get('canvas')

    cy.get('body').type('{uparrow}')
    cy.get('body').type('{rightarrow}')
    cy.get('body').type('{downarrow}')
    cy.get('body').type('{leftarrow}')
    
    cy.contains('Score:');
    })
})