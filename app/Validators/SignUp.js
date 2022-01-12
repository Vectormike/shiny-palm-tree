'use strict';

class SignUp {
  get rules() {
    return {
      username: 'required',
      first_name: 'required',
      last_name: 'required',
      email: 'required|email',
      contact_number: 'required',
      type: 'required',
      gender: 'required',
      password: 'required',
      address: 'required',
    };
  }

  get messages() {
    return {
      'username.required': 'Please provide your username',
      'first_name.required': 'Please provide your first name',
      'last_name.required': 'Please provide your last name',
      'email.required': 'Email is required',
      'contact_number.required': 'Contact is required',
      'gender.required': 'Gender is required',
      'type.required': 'Type is required',
      'password.required': 'Password is required',
      'address.required': 'Address is required',
      'email.email': 'Please provide a valid email address',
    };
  }

  get sanitizationRules() {
    return {
      email: 'normalize_email',
    };
  }

  get validateAll() {
    return true;
  }

  async fails(authError) {
    authError.forEach((err) => delete err.validation);
    return this.ctx.response.status(400).send({
      status: 'error',
      error: authError,
    });
  }
}

module.exports = SignUp;
