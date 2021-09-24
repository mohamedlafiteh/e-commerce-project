export function emailValidate(email) {
  var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (expression.test(email.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

export function nameValidate(name) {
  if (name == null || name.length == 0) {
    return false;
  } else {
    return true;
  }
}

export function passwordValidate(password) {
  return password.length > 3;
}
