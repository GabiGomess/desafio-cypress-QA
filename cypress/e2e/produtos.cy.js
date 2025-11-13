/// <reference types="cypress" />
import 'cypress-xpath'

describe('Incluir produto no carrinho com sucesso', () => {
  beforeEach(() => {
    cy.visit('lojaebac.ebaconline.art.br');
  })

  afterEach(() => {
    cy.screenshot();
  })

  it('Validar inclusão de produto no carrinho com sucesso', () => {
    // Pesquisar por produto
    cy.xpath('//button[@class="btn btn-primary btn-lg"]').eq(1).click({ force: true})
    cy.xpath("//input[@name='s']").eq(1).click({ force: true }).type('Ingrid Running Jacket', { force: true });
    cy.xpath("//button[@class='button-search btn btn-sm']").eq(2).click({ force: true });

    // Selecionar produto
    cy.xpath('//img[@src="http://lojaebac.ebaconline.art.br/wp-content/uploads/2021/05/wj04-white_alt1-427x546.jpg"]').click({ force: true });
    
    // Adicionar ao carrinho
    cy.xpath('//select[@id="size"]').select('S', { force: true });
    cy.xpath('//select[@id="color"]').select('Orange', { force: true });
    cy.xpath('//input[@name="quantity"]').clear().type('3', { force: true });
    cy.xpath('//button[@type="submit" and text()="Comprar"]').click();
    cy.wait(5000);
    
    cy.xpath('//div[@class="woocommerce-message"]')
      .should('contain', '3 × “Ingrid Running Jacket” foram adicionados no seu carrinho.');

    // Validar carrinho
    cy.xpath('//div[@class="woocommerce-message"]/a').click();

    cy.xpath('//img[@class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"]').should('be.visible');
    cy.xpath('//td[@class="product-name"]/a').should('contain', 'Ingrid Running Jacket - S, Orange');
    cy.xpath('//td[@class="product-price"]//span[@class="woocommerce-Price-currencySymbol"]').should('contain', 'R$');
    cy.xpath('//td[@class="product-price"]/span/bdi').should('contain', '84,00');
    cy.xpath('//input[@title="Qty"]').invoke('val').then(value => { expect(value).to.equal('3') })
    cy.xpath('//td[@class="product-subtotal price"]/span/bdi').should('contain', '252,00');

  })

  it('Validar detalhes do produto', () => {
    // Pesquisar por produto
    cy.xpath('//button[@class="btn btn-primary btn-lg"]').eq(1).click({ force: true})
    cy.xpath("//input[@name='s']").eq(1).click({ force: true }).type('Ingrid Running Jacket', { force: true });
    cy.xpath("//button[@class='button-search btn btn-sm']").eq(2).click({ force: true });

    // Selecionar produto
    cy.xpath('//img[@src="http://lojaebac.ebaconline.art.br/wp-content/uploads/2021/05/wj04-white_alt1-427x546.jpg"]').click({ force: true });
    
    cy.xpath('//select[@id="size"]').select('XS', { force: true }).should('have.value', 'XS');
    cy.xpath('//select[@id="size"]').select('S', { force: true }).should('have.value', 'S');
    cy.xpath('//select[@id="size"]').select('M', { force: true }).should('have.value', 'M');
    cy.xpath('//select[@id="size"]').select('L', { force: true }).should('have.value', 'L');
    cy.xpath('//select[@id="size"]').select('XL', { force: true }).should('have.value', 'XL');

    cy.xpath('//select[@id="color"]').select('Orange', { force: true }).should('have.value', 'Orange');
    cy.xpath('//select[@id="color"]').select('Red', { force: true }).should('have.value', 'Red');
    cy.xpath('//select[@id="color"]').select('White', { force: true }).should('have.value', 'White');

    cy.xpath('//div[@class="woocommerce-variation-description"]')
      .should('contain', 'The Ingrid Running Jacket combines sleek design and high performance with slim, contoured fit and moisture-wicking fabric. It features a full-zip construction and a collared neck to keep the elements out and body heat in. ')
      .should('contain', '• Slim fit. ')
      .should('contain', '• Moisture-wicking fabric. ')
      .should('contain', '• Two side pockets. ')
      .should('contain', '• Zippered pocket at back waist. ')
      .should('contain', '• Machine wash/dry.')
      .should('contain', '• Ivory specked full zip');

    cy.xpath('//a[@href="#tab-description"]').should('contain', 'Descrição').click();
    cy.xpath('//div[@class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"]')
      .should('contain', 'The Ingrid Running Jacket combines sleek design and high performance with slim, contoured fit and moisture-wicking fabric. It features a full-zip construction and a collared neck to keep the elements out and body heat in. ')
      .should('contain', '• Slim fit. ')
      .should('contain', '• Moisture-wicking fabric. ')
      .should('contain', '• Two side pockets. ')
      .should('contain', '• Zippered pocket at back waist. ')
      .should('contain', '• Machine wash/dry.')
      .should('contain', '• Ivory specked full zip');

    cy.xpath('//a[@href="#tab-additional_information"]').should('contain', 'Informação adicional').click();
    cy.xpath('//th[@class="woocommerce-product-attributes-item__label" and text()="Size"]').should('be.visible');
    cy.xpath('//td[@class="woocommerce-product-attributes-item__value"]').eq(0).should('contain', 'XS, S, M, L, XL');
    cy.xpath('//th[@class="woocommerce-product-attributes-item__label" and text()="Color"]').should('be.visible');
    cy.xpath('//td[@class="woocommerce-product-attributes-item__value"]').eq(1).should('contain', 'Orange, Red, White');

    cy.xpath('//a[@href="#tab-reviews"]').should('contain', 'Avaliações (0)').click();
    cy.xpath('//a[@class="star-1"]').should('be.visible');
    cy.xpath('//a[@class="star-2"]').should('be.visible');
    cy.xpath('//a[@class="star-3"]').should('be.visible');
    cy.xpath('//a[@class="star-4"]').should('be.visible');
    cy.xpath('//a[@class="star-5"]').should('be.visible');
    cy.xpath('//p[@class="comment-form-author"]/label').should('contain', 'Name');
    cy.xpath('//p[@class="comment-form-email"]/label').should('contain', 'Email');
    cy.xpath('//p[@class="comment-form-comment"]/label').should('contain', 'Your Review');
    cy.xpath('//input[@id="wp-comment-cookies-consent"]').should('be.visible');
    cy.xpath('//p[@class="comment-form-cookies-consent"]/label').should('contain', 'Salvar meus dados neste navegador para a próxima vez que eu comentar.');
    cy.xpath('//p[@class="form-submit"]/input[@name="submit"]').should('be.visible');
  });
});