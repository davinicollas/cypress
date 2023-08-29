import Cadastro from "../support/pages/cadastro/pagina-cadastro"
describe('Pagina de cadastro', () => {
  beforeEach(()=>{
   // cy.visit('http://localhost:4200/#/home');
  })
  it('preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
  
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.clickFormulario();


  })
})