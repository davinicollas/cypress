describe('Pagina de login', () => {
    it('Verificar mensagens vampos obrigatorios', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })