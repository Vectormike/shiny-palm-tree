'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  productCategory() {
    return this.hasOne('App/Models/ProductCategory', 'product_category_id', 'id');
  }
  productSubCategory() {
    return this.hasOne('App/Models/ProductSubCategory', 'product_sub_category_id', 'id');
  }
}

module.exports = Product;
