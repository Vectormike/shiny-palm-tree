'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ForbiddenException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle (error, response ) {
    response
      .status(403)
      .json({
        status_code: 403,
        status: 'Forbidden', 
        message: 'You are not authorized to access this route'
      })
  }
}

module.exports = ForbiddenException
