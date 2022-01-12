'use strict';

class ProductCategory {
  get rules() {
    return {
      name: 'required',
      status: 'required',
    };
  }

  get messages() {
    return {
      'name.required': 'Please provide the name of the category',
      'status.required': 'Status is required',
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

module.exports = ProductCategory;
