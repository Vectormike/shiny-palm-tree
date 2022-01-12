const User = use('App/Models/User');
const { validateAll } = use('Validator');

class SignUpFeature {
  constructor(request, response, auth) {
    this.request = request;
    this.response = response;
    this.auth = auth;
  }

  async handle() {
    try {
      const { username, first_name, last_name, email, type, gender, password, contact_number, address } = this.request.all();

      const user = new User();
      user.username = username;
      user.first_name = first_name;
      user.last_name = last_name;
      user.type = type;
      user.email = email;
      user.gender = gender;
      user.password = password;
      user.contact_number = contact_number;
      user.address = address;
      await user.save();

      return this.response.status(201).send({
        status: 'Success',
        message: 'Successfully Registered',
        status_code: 201,
      });
    } catch (signUpError) {
      console.log('signUpError', signUpError);
      return this.response.status(500).send({
        status: 'Fail',
        message: 'Internal Server Error',
        status_code: 500,
      });
    }
  }
}
module.exports = SignUpFeature;
