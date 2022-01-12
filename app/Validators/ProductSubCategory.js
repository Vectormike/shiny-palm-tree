'use strict';

class ProductSubCategory {
  get rules() {
    return {
      name: 'required',
      product_category_id: 'required',
      status: 'required',
    };
  }

  get messages() {
    return {
      'name.required': 'Please provide the name of the category',
      'product_category_id.required': 'Please provide product category ID',
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

module.exports = ProductSubCategory;
