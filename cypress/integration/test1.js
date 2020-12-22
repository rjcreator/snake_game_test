describe('The uparrow', function () {
    it('work uparrow', function () {
    cy.visit('/index.html');

    cy.get('canvas')

    cy.get('body').type('{uparrow}')
    cy.get('body').type('{leftarrow}')
    cy.get('body').type('{downarrow}')
    cy.get('body').type('{rightarrow}')

    cy.contains('Score:');
    
    })
})
 