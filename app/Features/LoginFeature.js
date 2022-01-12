'use strict';
const User = use('App/Models/User');
const NotFoundException = use('App/Exceptions/NotFoundException');
const Config = use('Config');

class LoginFeature {
  constructor(request, response, auth) {
    this.request = request;
    this.response = response;
    this.auth = auth;
  }

  async handle() {
    try {
      const { email, password } = this.request.all();

      const user = await User.query().where('email', email).first();

      if (!user) {
        throw new NotFoundException('User');
      }

      let token;

      token = await this.auth.attempt(email, password);

      const authConfig = Config.get('auth');
      const { expiresIn } = authConfig.jwt.options;
      token.expiresIn = expiresIn;

      return this.response.status(200).send({
        message: 'Login Successful',
        status: 'Success',
        status_code: 200,
        result: token,
      });
    } catch (loginError) {
      console.log('loginError -> ', loginError);
      return this.response.status(400).send({
        status: 'Fail',
        status_code: 400,
        message: 'Email Or Password Incorrect',
      });
    }
  }
}
module.exports = LoginFeature;
