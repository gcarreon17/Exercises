import { faker } from '@faker-js/faker';

describe("User API - POST", () => {
  
  //const baseUrl = 'https://petstore.swagger.io/'
  it("POST - Verify successful creation of users and returns status code 200", () => {
    const usersList = [
      {
        id: 101,
        username: 'user101',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: '1234567890',
        userStatus: 1
      }
    ];


    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithList',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: usersList
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('code');
      expect(response.body).to.have.property('type');
      expect(response.body).to.have.property('message');
      cy.log('Response Message:', response.body.message);
      });
    });


    it("POST - Verify returns status code 405 for incorrect method (GET)", () => {  
      cy.api({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/createWithList',
        headers: {
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,  
      }).then((response) => {
        expect(response.status).to.eq(405);
        });
      });


    it("POST - Verify returns status code 400 for incorrect URL", () => {  
      cy.api({
         method: 'POST',
         url: 'https://petstore.swagger.io/v2/user/createWithList%',
         headers: {
            'Content-Type': 'application/json'
          },
          failOnStatusCode: false,  
        }).then((response) => {
          expect(response.status).to.eq(400);
          });
        });


    it("POST - Verify returns status code 500 for incorrect id format", () => {
       const usersList = [
         {
           id: 'a',
           username: 'user101',
           firstName: 'John',
           lastName: 'Doe',
           email: 'john.doe@example.com',
           password: 'password123',
           phone: '1234567890',
           userStatus: 1
          }
        ];
    
    
        cy.api({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user/createWithList',
          failOnStatusCode: false,
          headers: {
            'Content-Type': 'application/json'
          },
          body: usersList
        }).then((response) => {
          expect(response.status).to.eq(500);
          });
        });
      });
  

    

  describe("User API - GET", () => {
    const userData = {
      id: 1234,
      username: "testuser123",
      firstName: "Test",
      lastName: "User",
      email: "testuser@example.com",
      password: "testpass",
      phone: "1234567890",
      userStatus: 1
    };

    before(() => {
      // Create the user before retrieving it
      cy.api({
        method: "POST",
        url: "https://petstore.swagger.io/v2/user",
        headers: {
          "Content-Type": "application/json"
        },
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });

  it("GET - Successfully retrieval of created user record by username and returns status 200", () => {
    cy.api({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${userData.username}`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(userData);
    });
  });
});



describe("User API - PUT", () => {
  const originalUser = {
    id: faker.number.int({ min: 1, max: 1000 }),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    userStatus: 1
  };

  const updatedUser = {
    ...originalUser,
    firstName: faker.person.firstName(),  // change first name
    lastName: faker.person.lastName(),    // change last name
    email: faker.internet.email()         // change email
  };

  before(() => {
    // Create the user first using POST
    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      headers: {
        'Content-Type': 'application/json'
      },
      body: originalUser
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("PUT - Update the user details and assert status 200", () => {
    cy.api({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/user/${originalUser.username}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: updatedUser
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});



describe("User API - DELETE", () => {
  const user = {
    id: faker.number.int({ min: 1000, max: 9999 }),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    userStatus: 1
  };

  before(() => {
    // Create the user first so we can delete it
    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("DELETE - Successfully deletes the user and returns status 200", () => {
    cy.api({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(user.username);
    });
  });
});




describe("Petstore User API - Successful Full CRUD Flow", () => {
  let userData;
  let updatedUserData;

  before(() => {
    // Generate user test data once for all steps
    userData = {
      id: faker.number.int({ min: 1, max: 9999 }),
      username: faker.internet.username().toLowerCase(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
      userStatus: 0
    };

    updatedUserData = {
      ...userData,
      firstName: "UpdatedFirst",
      lastName: "UpdatedLast",
      email: "invalid-email-format", // for testing invalid format if needed
    };
  });

  it("POST - Create a user", () => {
    cy.api({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("GET - Retrieve the created user", () => {
    cy.api({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${userData.username}`,
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(userData);
    });
  });

  it("PUT - Update the user information", () => {
    cy.api({
      method: "PUT",
      url: `https://petstore.swagger.io/v2/user/${userData.username}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: updatedUserData
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("DELETE - Delete the user", () => {
    cy.api({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${userData.username}`,
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});