'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class UnauthorisedException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, response, message = null) {
    response.status(401).json({
      status: 'Unauthorized',
      status_code: 401,
      message: message || 'You are not authorized to access this route',
    })
  }
}

module.exports = UnauthorisedException
