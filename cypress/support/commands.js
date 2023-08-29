Cypress.Commands.add('login', (nome, senha) => {
    cy.get('[data-test="loginUserName"]').type(nome)
    cy.get('[data-test="loginPassword"]').type(senha)

    cy.contains('button',' login ').click();
    cy.contains('a', '(Logout)').should('be.visible');


})


Cypress.Commands.add('loginIncorreto', (nome, senha) => {
    cy.get('[data-test="loginUserName"]').type(nome)
    cy.get('[data-test="loginPassword"]').type(senha)

    cy.contains('button',' login ').click();
    //cy.contains('a', '(Logout)').should('be.visible');


})
