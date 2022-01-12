'use strict';
const SignUpFeature = use('App/Features/SignUpFeature');
const LoginFeature = use('App/Features/LoginFeature');

class AuthController {
  async signUp({ request, response, auth }) {
    return new SignUpFeature(request, response, auth).handle();
  }

  async logIn({ request, response, auth }) {
    return new LoginFeature(request, response, auth).handle();
  }
}

module.exports = AuthController;
