'use strict';
const Product = use('App/Models/Product');
const NotFoundException = use('App/Exceptions/NotFoundException');

class ReadProductFeature {
  constructor(request, response, product_id) {
    this.request = request;
    this.response = response;
    this.product_id = product_id;
  }

  async handle() {
    const foundProduct = await Product.query().where('id', this.product_id).with('productCategory').with('productSubCategory').fetch();

    if (!foundProduct) {
      throw new NotFoundException('Product');
    }

    return this.response.status(200).send({
      message: 'Product Read Successful',
      status: 'Success',
      result: foundProduct,
    });
  }
}
module.exports = ReadProductFeature;
