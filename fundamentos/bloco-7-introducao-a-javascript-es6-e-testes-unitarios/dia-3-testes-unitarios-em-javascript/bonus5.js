const verify = password => {
  let isValid = true;

  if (password === null) { isValid = false; }
  if (password.length <= 8) { isValid = false }
  if (!/[A-Z]/.test(password)) { isValid = false }
  if (!/[a-z]/.test(password)) { isValid = false }
  if (!/[0-9]/.test(password)) { isValid = false }

  return isValid;
}
console.log(verify('123123123Aa'))
