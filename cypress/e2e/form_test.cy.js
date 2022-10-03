
describe('empty spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })



  it('passes', () => {
    cy.visit("http://localhost:3000/")
  })




  // Helpers

  // const textInput = () => cy.get("input[name=username]");
  // const emailInput = () => cy.get("input[name=email]");
  // const passwordInput = () => cy.get("input[name=password]");
  // const tos = () => cy.get("input[name=tos]");
  // const subBtn = () => cy.get("input[type=submit]")
  // Sanity is good 
  it("Sanity Check", () => {
    expect(1 + 2).to.equal(3);
    expect({}).not.to.equal({});
  })

  ////

  it("Test name", () => {
    cy.get("input[name=username]")
      .should("exist").should("have.value", "")
      .type("Lionel")
      .should("have.value", "Lionel");

  })



  it("Test Email", () => {
    cy.get("input[name=email]")
      .should("exist").should("have.value", "")
      .type("imcool@gmail.com")
      .should("have.value", "imcool@gmail.com");

  })

  it("Test Password", () => {
    cy.get("input[name=password]")
      .should("exist").should("have.value", "")
      .type("narutoshippuden")
      .should("have.value", "narutoshippuden");
  })

  it("TOS Tes", () => {
    cy.get("input[name=tos]")
      .should("exist")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.checked")
  })



  describe("Sub Btn", () => {

    const subBtn = () => cy.get("input[type=submit]")
    const emailInput = () => cy.get("input[name=email]");

    it("Should submit", () => {
      const textInput = () => cy.get("input[name=username]");
      const passwordInput = () => cy.get("input[name=password]");
      const subBtn = () => cy.get("input[type=submit]")

      textInput().type("Lionel")
      emailInput().type("iamcool@gmail.com")
      passwordInput().type("narutoshippuden")
      subBtn()
        .should('exist')
        .click()

      cy.document().contains("iamcool@gmail.com")
    })
    it("Shouldn't submit", () => {

      emailInput().type("larryislame@gmail.com")
      subBtn()
      .click()
     
      cy.document().contains("larryislame@gmail.com").should("not.exist")


    })


  })




})



