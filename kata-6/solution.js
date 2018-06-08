function validatePIN (pin) {
  const regex4 = /^[0-9]{4}$/.test(pin);
  const regex6 = /^[0-9]{6}$/.test(pin);
  if(regex4 || regex6) {
    return true; 
  }
  else {
    return false;
  }
}