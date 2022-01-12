'use strict';
const Product = use('App/Models/Product');
const NotFoundException = use('App/Exceptions/NotFoundException');

class DeleteProductFeature {
  constructor(request, response, product_id) {
    this.request = request;
    this.response = response;
    this.product_id = product_id;
  }

  async handle() {
    const foundProduct = await Product.findBy('id', this.product_id);

    if (!foundProduct) {
      throw new NotFoundException('Product');
    }

    foundProduct.delete();

    return this.response.status(200).send({
      message: 'Product Delete Successful',
      status: 'Success',
      status_code: 200,
    });
  }
}
module.exports = DeleteProductFeature;
