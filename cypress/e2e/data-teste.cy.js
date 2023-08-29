describe('Pagina de cadastro', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:4200/#/home')
  })

  const usuarios = require('../fixtures/usuarios.json');
  usuarios.forEach(usuario =>{
    it('preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
      cy.contains('a','Register now').click();
      cy.get('[data-test="email"]').type(usuario.email);
      cy.get('[data-test="fullName"]').type(usuario.fullName);
      cy.get('[data-test="registerUserName"]').type(usuario.userName);
      cy.get('[data-test="registerPassword"]').type(usuario.password);
      cy.contains('button','Register').click();
  
  
    })

  })
 
})