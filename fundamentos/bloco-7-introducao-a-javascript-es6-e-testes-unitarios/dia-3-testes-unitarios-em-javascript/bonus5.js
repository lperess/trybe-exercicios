const verify = password => {
  let conditions = 0;

  if (!(password == null)) {
    conditions += 1;
    console.log(conditions)

    if (!(password.length <= 8)) {
      conditions += 1;
    }
  }
  console.log(conditions)

  if (/[A-Z]/.test(password)) { conditions += 1; }
  console.log(conditions)

  if (/[a-z]/.test(password)) { conditions += 1; }
  console.log(conditions)

  if (/[0-9]/.test(password)) { conditions += 1; }
  console.log(conditions)

  if (conditions < 3) { return false; }
  return true;
}
console.log(verify('a3'));
