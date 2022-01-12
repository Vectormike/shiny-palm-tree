'use strict';
const ProductCategory = use('App/Models/ProductCategory');

class CreateProductCategoryFeature {
  constructor(request, response, auth) {
    this.request = request;
    this.response = response;
    this.auth = auth;
  }

  async handle() {
    const { name, status } = this.request.all();

    const productCategory = new ProductCategory();
    productCategory.name = name;
    productCategory.status = Boolean(status);

    productCategory.save();

    return this.response.status(200).send({
      message: 'Product Category Create Successful',
      status: 'Success',
      status_code: 200,
      result: productCategory,
    });
  }
}
module.exports = CreateProductCategoryFeature;
