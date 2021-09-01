const verify = password => {
  let conditions = 0;

  if (!(password == null)) {
    conditions += 1;
    if (!(password.length <= 8)) {
      conditions += 1;
    }
  }

  if (/[A-Z]/.test(password)) { conditions += 1; }

  if (/[a-z]/.test(password)) { conditions += 1; }
  else { return false; }

  if (/[0-9]/.test(password)) { conditions += 1; }

  if (conditions < 3) { return false; }
  return true;
}
console.log(verify('12345ABCD'));
