import { errorMessages } from "./errorMessages";
function emailValidate(email) {
  var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (expression.test(email.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
function nameValidate(name) {
  if (name == null || name.length == 0) {
    return false;
  } else {
    return true;
  }
}

function passwordValidate(password) {
  return password.length > 3;
}
function genderValidate(gender) {
  if (gender == null || gender.length == 0) {
    return false;
  } else {
    return true;
  }
}
function interestValidate(interest) {
  if (interest == null || interest.length == 0) {
    return false;
  } else {
    return true;
  }
}

export const validateAllFormFields = ({
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation,
  gender,
  interests,
}) => {
  let errorMessage = {};
  if (!nameValidate(firstName)) {
    errorMessage.firstName = errorMessages.firstName;
  }

  if (!nameValidate(lastName)) {
    errorMessage.lastName = errorMessages.lastName;
  }
  if (!emailValidate(email)) {
    errorMessage.email = errorMessages.email;
  }

  if (!passwordValidate(password)) {
    errorMessage.password = errorMessages.password;
  }

  if (password !== passwordConfirmation) {
    errorMessage.passwordConfirmation = errorMessages.passwordConfirmation;
  }
  if (!genderValidate(gender)) {
    errorMessage.gender = errorMessages.gender;
  }
  if (!interestValidate(interests)) {
    errorMessage.interests = errorMessages.interests;
  }
  return errorMessage;
};
