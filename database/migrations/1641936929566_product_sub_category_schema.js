'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSubCategorySchema extends Schema {
  up() {
    this.create('product_sub_categories', (table) => {
      table.increments();
      table.string('name');
      table.integer('product_category_id');
      table.boolean('status');
      table.timestamps();
    });
  }

  down() {
    this.drop('product_sub_categories');
  }
}

module.exports = ProductSubCategorySchema;
