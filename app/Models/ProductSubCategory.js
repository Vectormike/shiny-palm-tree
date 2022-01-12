'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ProductSubCategory extends Model {
  productCategory() {
    return this.hasOne('App/Models/ProductCategory', 'product_category_id', 'id');
  }
}

module.exports = ProductSubCategory;
