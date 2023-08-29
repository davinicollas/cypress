const el = require('./element').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro (){
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('davi@hotmail.com');
        cy.get('[data-test="fullName"]').type('davi nicollas');
        cy.get('[data-test="registerUserName"]').type('carowl');
        cy.get('[data-test="registerPassword"]').type('12345678');
    }

    clickFormulario(){
        cy.get('[data-test="btnRegister"]').click();
    }
}


export default new Cadastro();