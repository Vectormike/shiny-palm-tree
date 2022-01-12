'use strict';

class Login {
  get rules() {
    return {
      email: 'required',
      password: 'required',
    };
  }

  get messages() {
    return {
      'username.required': 'Please provide your email',
      'password.required': 'Password is required',
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

module.exports = Login;
