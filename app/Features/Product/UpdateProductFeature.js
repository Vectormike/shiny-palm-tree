'use strict';
const Product = use('App/Models/Product');
const ProductCategory = use('App/Models/ProductCategory');
const ProductSubCategory = use('App/Models/ProductSubCategory');
const NotFoundException = use('App/Exceptions/NotFoundException');

class UpdateProductFeature {
  constructor(request, response, product_id) {
    this.request = request;
    this.response = response;
    this.product_id = product_id;
  }

  async handle() {
    const { product_category_id, product_sub_category_id, title, description, price } = this.request.all();

    const foundProduct = await Product.findBy('id', this.product_id);

    if (!foundProduct) {
      throw new NotFoundException('Product');
    }

    // Check if Product Category Exist
    if (product_category_id) {
      const foundProductCategory = await ProductCategory.findBy('id', product_category_id);
      if (!foundProductCategory) {
        throw new NotFoundException('Product Category');
      }
    }

    // Check if Product Sub Category Exist
    if (product_sub_category_id) {
      const foundProductSubCategory = await ProductSubCategory.findBy('id', product_sub_category_id);
      if (!foundProductSubCategory) {
        throw new NotFoundException('Product Sub Category');
      }
    }

    foundProduct.product_category_id = product_category_id;
    foundProduct.product_sub_category_id = product_sub_category_id;
    foundProduct.title = title;
    foundProduct.description = description;
    foundProduct.price = price;

    foundProduct.save();

    return this.response.status(200).send({
      message: 'Product Update Successful',
      status: 'Success',
      status_code: 200,
      result: foundProduct,
    });
  }
}
module.exports = UpdateProductFeature;
