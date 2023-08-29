describe('Pagina de cadastro', () => {
    it('preencher os campos do formulario incorretamente', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('a','Register now').click();
      cy.contains('button','Register').click();
      cy.contains('button','Register').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })