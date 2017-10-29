function validatePIN (pin) {
 let validPin = /^(\d{4}|\d{6})$/.test(pin);
 return validPin;
}

//resubmit
