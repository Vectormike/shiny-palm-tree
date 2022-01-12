'use strict';
const CreateProductFeature = use('App/Features/Product/CreateProductFeature');
const CreateProductCategoryFeature = use('App/Features/ProductCategory/CreateProductCategoryFeature');
const ReadProductFeature = use('App/Features/Product/ReadProductFeature');
const ReadProductCategoryFeature = use('App/Features/ProductCategory/ReadProductCategoryFeature');
const UpdateProductFeature = use('App/Features/Product/UpdateProductFeature');
const UpdateProductCategoryFeature = use('App/Features/ProductCategory/UpdateProductCategoryFeature');
const DeleteProductFeature = use('App/Features/Product/DeleteProductFeature');
const DeleteProductCategoryFeature = use('App/Features/ProductCategory/DeleteProductCategoryFeature');

class ProductController {
  async createProduct({ request, response, auth }) {
    return new CreateProductFeature(request, response, auth).handle();
  }

  async createProductCategory({ request, response, auth }) {
    return new CreateProductCategoryFeature(request, response, auth).handle();
  }

  async readProduct({ request, response, params }) {
    return new ReadProductFeature(request, response, params).handle();
  }

  async readProductCategory({ request, response, params: { product_category_id } }) {
    return new ReadProductCategoryFeature(request, response, product_category_id).handle();
  }

  async updateProduct({ request, response, params }) {
    return new UpdateProductFeature(request, response, params).handle();
  }

  async updateProductCategory({ request, response, params: { product_category_id } }) {
    return new UpdateProductCategoryFeature(request, response, product_category_id).handle();
  }

  async deleteProduct({ request, response, params }) {
    return new DeleteProductFeature(request, response, params).handle();
  }

  async deleteProductCategory({ request, response, params }) {
    return new DeleteProductCategoryFeature(request, response, params).handle();
  }
}

module.exports = ProductController;
