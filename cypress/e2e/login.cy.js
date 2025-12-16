describe("Login Form E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("başarılı form doldurulduğunda submit edebiliyorum", () => {
    cy.get('[data-cy="input-email"]').type("test@test.com");
    cy.get('[data-cy="input-password"]').type("Password1");
    cy.get('[data-cy="input-terms"]').check();

    cy.get('[data-cy="btn-submit"]').click();

    cy.get('[data-cy="success-page"]').should("be.visible");
    cy.contains("Başarıyla giriş yaptınız").should("be.visible");
  });

  it("email yanlış girdim: 1 hata mesajı görünür ve buton disabled kalır", () => {
    cy.get('[data-cy="input-email"]').type("yanlisemail");
    cy.get('[data-cy="input-password"]').type("Password1"); // geçerli password

    cy.get('[data-cy="error-message"]').should("have.length", 1);
    cy.contains("Geçerli bir email giriniz!").should("be.visible");
    cy.get('[data-cy="btn-submit"]').should("be.disabled");
  });

  it("email ve password yanlış: 2 hata mesajı görünür ve password mesajı var", () => {
    cy.get('[data-cy="input-email"]').type("yanlisemail");
    cy.get('[data-cy="input-password"]').type("123"); // geçersiz password

    cy.get('[data-cy="error-message"]').should("have.length", 2);
    cy.contains("Şifre en az 8 karakter, 1 büyük harf ve 1 rakam içermeli!").should(
      "be.visible"
    );
    cy.get('[data-cy="btn-submit"]').should("be.disabled");
  });

  it("email ve password doğru ama terms kabul edilmedi: buton disabled", () => {
    cy.get('[data-cy="input-email"]').type("test@test.com");
    cy.get('[data-cy="input-password"]').type("Password1");

    cy.get('[data-cy="btn-submit"]').should("be.disabled");
  });
});
