'use strict';
const ProductCategory = use('App/Models/ProductCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class ReadProductCategoryFeature {
  constructor(request, response, product_category_id) {
    this.request = request;
    this.response = response;
    this.product_category_id = product_category_id;
  }

  async handle() {
    const foundProductCategory = await ProductCategory.findBy('id', this.product_category_id);

    if (!foundProductCategory) {
      throw new NotFoundException('Product Category');
    }

    return this.response.status(200).send({
      message: 'Product Read Successful',
      status: 'Success',
      result: foundProductCategory,
    });
  }
}
module.exports = ReadProductCategoryFeature;
