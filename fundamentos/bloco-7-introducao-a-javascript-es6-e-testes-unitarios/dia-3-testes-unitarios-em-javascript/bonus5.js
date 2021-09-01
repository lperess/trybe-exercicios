const verify = password => {

  if (password == null) {
    throw new Error('password is null');
  }
  if (password.length <= 8) {
    throw new Error('password should be larger than 8 chars');
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error('password should have one uppercase letter at least');
  }
  if (!/[a-z]/.test(password)) {
    throw new Error('password should have one lowercase letter at least');
  }
  if (!/[0-9]/.test(password)) {
    throw new Error('password should have one number at least');
  }
  return true;
}
console.log(verify('1231234Ab'));
