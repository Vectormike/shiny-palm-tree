'use strict';
const ProductSubCategory = use('App/Models/ProductSubCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class ReadProductSubCategoryFeature {
  constructor(request, response, product_sub_category_id) {
    this.request = request;
    this.response = response;
    this.product_sub_category_id = product_sub_category_id;
  }

  async handle() {
    const foundProductSubCategory = await ProductSubCategory.query().where('id', this.product_sub_category_id).with('productCategory').fetch();

    if (!foundProductSubCategory) {
      throw new NotFoundException('Product Sub Category');
    }

    return this.response.status(200).send({
      message: 'Product Sub Category Read Successful',
      status: 'Success',
      result: foundProductSubCategory,
    });
  }
}
module.exports = ReadProductSubCategoryFeature;
