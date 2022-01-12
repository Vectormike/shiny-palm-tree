'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('username').notNullable();
      table.string('email', 254).notNullable();
      table.string('password', 60).notNullable();
      table.string('remember_me_token').nullable();
      table.string('type').notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('gender').notNullable();
      table.string('contact_number').notNullable();
      table.string('address').notNullable();
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
