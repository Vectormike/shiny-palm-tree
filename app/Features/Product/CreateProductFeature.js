'use strict';
const Product = use('App/Models/Product');

class CreateProductFeature {
  constructor(request, response, auth) {
    this.request = request;
    this.response = response;
    this.auth = auth;
  }

  async handle() {
    const { product_category_id, product_sub_category_id, title, description, price } = this.request.all();
    const user_id = this.auth.current.user.id;

    // Create Product
    const product = new Product();
    product.user_id = user_id;
    product.product_category_id = Number(product_category_id);
    product.product_sub_category_id = Number(product_sub_category_id);
    product.title = title;
    product.description = description;
    product.price = price;

    product.save();

    return this.response.status(200).send({
      message: 'Product Create Successful',
      status: 'Success',
      result: product,
    });
  }
}
module.exports = CreateProductFeature;
