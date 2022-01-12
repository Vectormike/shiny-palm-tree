'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AuthException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle(error, response, resource) {
    response.status(401).json({
      status: 'error',
      status_code: 401,
      message: 'jwt required to access this endpoint',
    })
  }
}

module.exports = AuthException
