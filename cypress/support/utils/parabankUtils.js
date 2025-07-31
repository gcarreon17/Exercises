import { faker } from '@faker-js/faker';

//Parabank Registration Data
export function parabankTestData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zipCode = faker.location.zipCode();
  const phoneNumber = faker.phone.number();
  const ssn = faker.string.numeric(9);
  const accountType = faker.helpers.arrayElement(['CHECKING', 'SAVINGS']);


   return {
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phoneNumber,
    ssn,
    userName: firstName.toLowerCase() + lastName.toLowerCase(),
    password: 'Passw0rd',
    confirmPassword: 'Passw0rd',
    firstNameUpdated: `_${'updated'}`,
    lastNameUpdated: `_${'updated'}`,
    addressUpdated: `_${'updated'}`,
    cityUpdated: `_${'updated'}`,
    stateUpdated: `_${'updated'}`,
    zipCodeUpdated: `_${'updated'}`,
    phoneNumberUpdated: `_${'updated'}`,
    accountType
   }
  }