'use strict';
const ProductSubCategory = use('App/Models/ProductSubCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class DeleteProductSubCategoryFeature {
  constructor(request, response, product_sub_category_id) {
    this.request = request;
    this.response = response;
    this.product_sub_category_id = product_sub_category_id;
  }

  async handle() {
    const foundProductSubCategory = await ProductSubCategory.findBy('id', this.product_sub_category_id);

    if (!foundProductSubCategory) {
      throw new NotFoundException('Product Category');
    }

    foundProductSubCategory.delete();

    return this.response.status(200).send({
      message: 'Product Category Delete Successful',
      status: 'Success',
    });
  }
}
module.exports = DeleteProductSubCategoryFeature;
