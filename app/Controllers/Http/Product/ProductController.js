'use strict';
const CreateProductFeature = use('App/Features/Product/CreateProductFeature');
const CreateProductCategoryFeature = use('App/Features/ProductCategory/CreateProductCategoryFeature');
const CreateProductSubCategoryFeature = use('App/Features/ProductSubCategory/CreateProductSubCategoryFeature');
const ReadProductFeature = use('App/Features/Product/ReadProductFeature');
const ReadProductCategoryFeature = use('App/Features/ProductCategory/ReadProductCategoryFeature');
const ReadProductSubCategoryFeature = use('App/Features/ProductSubCategory/ReadProductSubCategoryFeature');
const UpdateProductFeature = use('App/Features/Product/UpdateProductFeature');
const UpdateProductCategoryFeature = use('App/Features/ProductCategory/UpdateProductCategoryFeature');
const UpdateProductSubCategoryFeature = use('App/Features/ProductSubCategory/UpdateProductSubCategoryFeature');
const DeleteProductFeature = use('App/Features/Product/DeleteProductFeature');
const DeleteProductCategoryFeature = use('App/Features/ProductCategory/DeleteProductCategoryFeature');
const DeleteProductSubCategoryFeature = use('App/Features/ProductSubCategory/DeleteProductSubCategoryFeature');

class ProductController {
  async createProduct({ request, response, auth }) {
    return new CreateProductFeature(request, response, auth).handle();
  }

  async createProductCategory({ request, response, auth }) {
    return new CreateProductCategoryFeature(request, response, auth).handle();
  }

  async createProductSubCategory({ request, response, auth }) {
    return new CreateProductSubCategoryFeature(request, response, auth).handle();
  }

  async readProduct({ request, response, params: { product_id } }) {
    return new ReadProductFeature(request, response, product_id).handle();
  }

  async readProductCategory({ request, response, params: { product_category_id } }) {
    return new ReadProductCategoryFeature(request, response, product_category_id).handle();
  }

  async readProductSubCategory({ request, response, params: { product_sub_category_id } }) {
    return new ReadProductSubCategoryFeature(request, response, product_sub_category_id).handle();
  }

  async updateProduct({ request, response, params: { product_id } }) {
    return new UpdateProductFeature(request, response, product_id).handle();
  }

  async updateProductCategory({ request, response, params: { product_category_id } }) {
    return new UpdateProductCategoryFeature(request, response, product_category_id).handle();
  }

  async updateProductSubCategory({ request, response, params: { product_sub_category_id } }) {
    return new UpdateProductSubCategoryFeature(request, response, product_sub_category_id).handle();
  }

  async deleteProduct({ request, response, params: { product_id } }) {
    return new DeleteProductFeature(request, response, product_id).handle();
  }

  async deleteProductCategory({ request, response, params: { product_category_id } }) {
    return new DeleteProductCategoryFeature(request, response, product_category_id).handle();
  }

  async deleteProductSubCategory({ request, response, params: { product_sub_category_id } }) {
    return new DeleteProductSubCategoryFeature(request, response, product_sub_category_id).handle();
  }
}

module.exports = ProductController;
