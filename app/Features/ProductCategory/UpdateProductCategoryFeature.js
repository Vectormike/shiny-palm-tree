'use strict';
const ProductCategory = use('App/Models/ProductCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class UpdateProductCategoryFeature {
  constructor(request, response, product_category_id) {
    this.request = request;
    this.response = response;
    this.product_category_id = product_category_id;
  }

  async handle() {
    const { name, status } = this.request.all();

    const foundProductCategory = await ProductCategory.findBy('id', this.product_category_id);

    if (!foundProductCategory) {
      throw new NotFoundException('Product Category');
    }

    foundProductCategory.name = name;
    foundProductCategory.status = Boolean(status);

    foundProductCategory.save();

    return this.response.status(200).send({
      message: 'Product Category Update Successful',
      status: 'Success',
      status_code: 200,
      result: foundProductCategory,
    });
  }
}
module.exports = UpdateProductCategoryFeature;
