'use strict';
const ProductSubCategory = use('App/Models/ProductSubCategory');
const ProductCategory = use('App/Models/ProductCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class CreateProductSubCategoryFeature {
  constructor(request, response, auth) {
    this.request = request;
    this.response = response;
    this.auth = auth;
  }

  async handle() {
    const { name, product_category_id, status } = this.request.all();

    const productCategory = await ProductCategory.findBy('id', product_category_id);
    if (!productCategory) {
      throw new NotFoundException('Product Category');
    }

    // Create Product Sub Category
    const productSubCategory = new ProductSubCategory();
    productSubCategory.name = name;
    productSubCategory.status = Boolean(status);
    productSubCategory.product_category_id = product_category_id;

    productSubCategory.save();

    return this.response.status(200).send({
      message: 'Product Category Create Successful',
      status: 'Success',
      status_code: 200,
      result: productSubCategory,
    });
  }
}
module.exports = CreateProductSubCategoryFeature;
