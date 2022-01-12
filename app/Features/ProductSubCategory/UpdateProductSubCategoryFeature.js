'use strict';
const ProductSubCategory = use('App/Models/ProductSubCategory');
const ProductCategory = use('App/Models/ProductCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class UpdateProductSubCategoryFeature {
  constructor(request, response, product_sub_category_id) {
    this.request = request;
    this.response = response;
    this.product_sub_category_id = product_sub_category_id;
  }

  async handle() {
    const { name, product_category_id, status } = this.request.all();
    console.log(this.product_sub_category_id, 'his.product_sub_category_id');
    const foundProductSubCategory = await ProductSubCategory.findBy('id', this.product_sub_category_id);

    if (!foundProductSubCategory) {
      throw new NotFoundException('Product Sub Category');
    }

    // Check if Product Category Exists
    if (product_category_id) {
      const foundProductCategory = await ProductCategory.findBy('id', product_category_id);
      if (!foundProductCategory) {
        throw new NotFoundException('Product Category');
      }
    }

    foundProductSubCategory.name = name;
    foundProductSubCategory.status = status;
    foundProductSubCategory.product_category_id = product_category_id;

    foundProductSubCategory.save();

    return this.response.status(200).send({
      message: 'Product Sub Category Update Successful',
      status: 'Success',
      result: foundProductSubCategory,
    });
  }
}
module.exports = UpdateProductSubCategoryFeature;
