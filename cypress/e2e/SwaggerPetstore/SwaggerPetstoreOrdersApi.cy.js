describe('GET - Pet Store Inventory', () => {
  it('GET - log all available statuses in the inventory response and status code 200', () => {
    cy.api({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/store/inventory',
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('object');
      const statusKeys = Object.keys(response.body);
      cy.log('Available status keys: ' + statusKeys.join(', '));
      expect(statusKeys.length).to.be.greaterThan(0);
      statusKeys.forEach((key) => {
        expect(response.body[key]).to.be.a('number');
      });
      cy.captureSnapshot("API/log all available statuses");
    });
  });

  it('GET - Verify returns status code 404 for incorrect URL', () => {
    cy.api({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/store/inventorys',
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
    cy.captureSnapshot("API/Verified GET - returns status code 404 for incorrect URL")
  });


  it('GET - Verify returns status code 405 for incorrect method', () => {
    cy.api({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/store/inventory',
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
    cy.captureSnapshot("API/Verified GET - returns status code 405 for incorrect method");
  });


  it.skip('GET - Verify status code 500', () => {
    cy.intercept('GET', '**/store/inventory', {
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('getInventory');

    cy.api({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2store/inventory',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body.message).to.eq('Internal Server Error');
    });
    cy.captureSnapshot("API/Verified Get - status code 500 ");
  });
});

describe('POST - Place Pet Order', () => {
  let Id = 1;
  let petId = 1;

  it('POST - Verify returns status code 200 for valid order', () => {
    const dynamicShipDate = new Date().toISOString().replace('Z', '+0000');
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/order',
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(orderPayload);
    });
    cy.captureSnapshot("API/Verified POST - returns status code 200 for valid order");
  });

  it('POST - Verify returns status code 404 for incorrect URL', () => {
    const dynamicShipDate = new Date().toISOString();
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/orders',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
    cy.captureSnapshot("API/Verified POST - returns status code 404 for incorrect URL");
  });


  it("POST - Verify returns status code 405 for invalid method (GET)", () => {
    const dynamicShipDate = new Date().toISOString();
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/store/order',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
    cy.captureSnapshot("API/Verified POST - Verified returns status code 405 for invalid method (GET)");
  });


  it("POST - Verify return status code 500 for invalid payload (force internal error)", () => {
    const dynamicShipDate = new Date().toISOString();
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: "invalid",
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/order',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect([400, 500]).to.include(response.status);
    });
    cy.captureSnapshot("API/Verified return status code 500 for invalid payload (force internal error)");
  });
});



describe("PUT - Attempt to update order (expect 405 Method Not Allowed)", () => {
  const dynamicShipDate = new Date().toISOString().replace('Z', '+0000');
  const orderPayload = {    
    id: 1,
    petId: 1,
    quantity: 1,
    shipDate: dynamicShipDate,
    status: "placed",
    complete: true
  };  

  it("PUT - Attempt to update order (expect 405 Method Not Allowed)", () => {
    cy.api({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/store/order",
      headers: {
        "Content-Type": "application/json"
      },
      body: orderPayload,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(405); // PUT not allowed for /store/order
   });
    cy.captureSnapshot("API/Verified return status code 500 for invalid payload (force internal error)");
  });
});




describe('DELETE - Order Record', () => {
  it("DELETE - Verify returns status code 200 for successful delete order record", () => {
    const orderId = 1;

    cy.api({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/store/order/${orderId}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', String(orderId));
    });
    cy.captureSnapshot("API/Verified Verify returns status code 200 for successful delete order record)");
  });


  it("DELETE - Verify status code 404 after deleting a non-existent order", () => {
    const fakeOrderId = 99999;

    cy.api({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/store/order/${fakeOrderId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
    cy.captureSnapshot("API/Verified Verify returns status code 200 for successful delete order record)");
  });


  it('DELETE - Verify status code 405 for invalid URL', () => {
    const fakeOrderId = 99999;

    cy.api({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2store/inventory`,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
    cy.captureSnapshot("API/Verified DELETE - returns status code 200 for successful delete order record");
  });
});


  



describe("Petstore Order API - Successful Full CRUD Flow", () => {
  let orderId;
  let orderPayload;

  before(() => {
    const dynamicShipDate = new Date().toISOString().replace('Z', '+0000');
    orderPayload = {
      id: Math.floor(Math.random() * 100000),
      petId: Math.floor(Math.random() * 10000),
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };
    orderId = orderPayload.id;
  });

  it("POST - Verify successful place a new order", () => {
    cy.api({
      method: "POST",
      url: "https://petstore.swagger.io/v2/store/order",
      headers: {
        "Content-Type": "application/json"
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(orderPayload);
    });
    cy.captureSnapshot("API/Post - Verified successful place a new order");
  });


  it("GET - Verified sucessful Retrieval of placed order", () => {
    cy.api({
      method: "GET",
      url: `https://petstore.swagger.io/v2/store/order/${orderId}`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(orderId);
    });
    cy.captureSnapshot("API/Verified GET sucessful Retrieval of placed order");
  });

  it("PUT - Attempt to update order (expect 405 Method Not Allowed)", () => {
    cy.api({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/store/order",
      headers: {
        "Content-Type": "application/json"
      },
      body: orderPayload,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(405); // PUT not allowed for /store/order
    });
    cy.captureSnapshot("API/Verified PUT attempt to update order -expect 405 Method Not Allowed");
  });

  it("DELETE - Successful deletion of placed order", () => {
    cy.api({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/store/order/${orderId}`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.captureSnapshot("API/Verified successful deletion of placed order")
  });
});

