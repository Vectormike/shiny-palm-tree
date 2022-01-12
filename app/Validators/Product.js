'use strict';

class Product {
  get rules() {
    return {
      product_category_id: 'required',
      product_sub_category_id: 'required',
      title: 'required',
      description: 'required',
      price: 'required',
    };
  }

  get messages() {
    return {
      'product_category_id.required': 'Product category is required',
      'product_sub_category_id.required': 'Product sub category is required',
      'title.required': 'Please provide title',
      'description.required': 'Please provide description',
      'price.required': 'Please provide price',
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

module.exports = Product;
