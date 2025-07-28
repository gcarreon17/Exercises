export class AutomationExercisePages {
  // Button selectors
  signUpButton = '[data-qa="signup-button"]';
  createButtonLabel = '[data-qa="create-account"]';

  // Label selectors
  titleLabel = '.clearfix > :nth-child(1)';
  genderMrLabel = ':nth-child(3) > .top';
  genderMRsLabel = ':nth-child(4) > .top';
  nameLabel = 'form > :nth-child(3) > label';
  regEmailAddressLabel = 'form > :nth-child(4) > label';
  passwordLabel = 'form > :nth-child(5) > label';
  dobLabel = 'form > :nth-child(6) > label';
  newsletterLabel = 'form > :nth-child(7) > label';
  receiveSpecialOffersLabel = 'form > :nth-child(8) > label';
  optinLabel = 'form > :nth-child(8) > label';
  firstNameLabel = 'form > :nth-child(11) > label';
  lastNameLabel = 'form > :nth-child(12) > label';
  companyLabel = 'form > :nth-child(13) > label';
  addressLabel = 'form > :nth-child(14) > label';
  address2Label = 'form > :nth-child(15) > label';
  countryLabel = 'form > :nth-child(16) > label';
  stateLabel = 'form > :nth-child(17) > label';
  cityLabel = 'form > :nth-child(18) > label';
  zipCodeLabel = 'form > :nth-child(19) > label';
  mobileNumberLabel = 'form > :nth-child(20) > label';

  // Field selectors
  signUpNameField = '[data-qa="signup-name"]';
  signUpEmailAddressField = '[data-qa="signup-email"]';
  titleField = '.clearfix';
  mrRadioButton = '#id_gender1';
  mrsRadioButton = '#id_gender2';
  nameField = '[data-qa="name"]';
  regEmailAddressField = '[data-qa="email"]';
  passwordfield = '[data-qa="password"]';
  dayField = '[data-qa="days"]';
  monthField = '[data-qa="months"]';
  yearField = '[data-qa="years"]';
  newsletterCheckbox = '#newsletter';
  receiveSpecialOffersCheckbox = '#optin';
  firstNameField = '[data-qa="first_name"]';
  lastNameField = '[data-qa="last_name"]';
  companyField = '[data-qa="company"]';
  addressField = '[data-qa="address"]';
  address2Field = '[data-qa="address2"]';
  countryField = '[data-qa="country"]';
  stateField = '[data-qa="state"]';
  cityField = '[data-qa="city"]';
  zipCodeField = '[data-qa="zipcode"]';
  mobileNumberField = '[data-qa="mobile_number"]';
}


export const registrationPage = new AutomationExercisePages();