describe('Pagina de cadastro', () => {
  it('preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('davi@hotmail.com');
    cy.get('[data-test="fullName"]').type('davi nicollas');
    cy.get('[data-test="registerUserName"]').type('carowl');
    cy.get('[data-test="registerPassword"]').type('12345678');
    cy.contains('button','Register').click();


  })
})