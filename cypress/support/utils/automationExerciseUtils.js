import { faker } from '@faker-js/faker';

export function automationExerciseTestData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const emailAddress = `${firstName}.${lastName}@test.com`.toLowerCase();
  const title = faker.helpers.arrayElement(['Mr', 'Mrs']);
  const titleWithPeriod = `${title}.`;
  const company = `${faker.company.name()} Inc.`;
  const address = faker.location.streetAddress();
  const state = faker.location.state();
  const city = faker.location.city();
  const zipCode = faker.location.zipCode();
  const mobileNumber = faker.phone.number();
  const country = faker.helpers.arrayElement([
    "India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"
  ]);
  const dob = faker.date.birthdate({ min: 18, max: 50, mode: 'age' });
  const day = dob.getDate().toString();
  const longMonth = dob.toLocaleString('default', { month: 'long' });
  const shortMonth = dob.toLocaleString('default', { month: 'short' });
  const futureDate = faker.date.future();
  const creditYr = futureDate.getFullYear().toString(); 
  const year = dob.getFullYear().toString();
  const cardNumber = faker.finance.creditCardNumber('#### #### #### ####');
  const cvv = faker.finance.creditCardCVV();
  const expectedHeaders = ['Item', 'Description', 'Price', 'Quantity', 'Total'];


  return {
    firstName,
    lastName,
    emailAddress,
    signUpName: `${firstName} ${lastName}`,
    signUpEmailAddress: emailAddress,
    title,
    titleWithPeriod,
    password: 'Passw0rd',
    company,
    address,
    state,
    city,
    zipCode,
    mobileNumber,
    country,
    day,
    longMonth,
    shortMonth,
    year,
    creditYr,
    cardNumber,
    cvv,
    expectedHeaders
  };
}