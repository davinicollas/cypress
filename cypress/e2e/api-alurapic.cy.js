describe('Api Alurapic', () => {
 /* it('Dados APi', () => {    
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/user/login',
      body: Cypress.env()
    }).then((res)=> {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('id')
      expect(res.body.id).to.be.equal(3)
    })
  })*/

  it('Fotos usuarios', () => {    

    const tempoEsperado = Math.random() * 50;
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/davinicollas/photos'
    }).then((res)=> {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[0]).to.have.property('description')
      expect(res.body[0].description).to.be.equal('')
      expect(res.duration).to.be.lte(tempoEsperado);
    })
  })
})