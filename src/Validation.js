
export default function Validation(values) {
  const errors = {};
  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if(values.name == ''){
    errors.name = 'Name is Required';
  }
  if(values.password == ''){
    errors.password = 'Password is Required';
  }
  else if(!password_pattern.test(values.password)){
    errors.password = "Password didn't match";
  }
  if(values.email == ''){
    errors.email = 'Email is Required';
  }
  else if(!email_pattern.test(values.email)){
    errors.email = "Email didn't match";
  }
 return errors;
}
