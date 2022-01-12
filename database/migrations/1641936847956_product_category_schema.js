'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductCategorySchema extends Schema {
  up() {
    this.create('product_categories', (table) => {
      table.increments();
      table.string('name');
      table.boolean('status');
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop('product_categories');
  }
}

module.exports = ProductCategorySchema;
