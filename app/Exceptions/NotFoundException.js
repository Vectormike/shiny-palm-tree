'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle (error, response , resource) {
    response
      .status(404)
      .json({
        status: 'Not Found', 
        status_code: 404,
        message: `${resource} not found`
      })
  }
}

module.exports = NotFoundException
