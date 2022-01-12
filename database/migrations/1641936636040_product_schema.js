'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments();
      table.integer('user_id');
      table.integer('product_category_id');
      table.integer('product_sub_category_id');
      table.string('title');
      table.string('description');
      table.integer('price');
      table.boolean('is_deleted').defaultTo(0);
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
