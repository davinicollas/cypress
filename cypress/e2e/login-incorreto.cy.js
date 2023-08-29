describe('Página de login', () => {

  beforeEach(() => {
      cy.visit ('http://localhost:4200/#/home');
      cy.intercept('POST', 'http://localhost:3000/user/login', {
        statusCode: 400
        }).as('stubPost');
    })

          
      it('Verifica mensagens de campos obrigatórios na página de login', () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
      });

      it('Preencher os campos de login corretamente para realizar login', () => {
        cy.loginIncorreto('davinicollas', '12345678');
        cy.wait('@stubPost')

      });

})