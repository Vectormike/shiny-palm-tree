'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ExpiredTokenException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, response) {
    return response.status(401).json({
      status: 'failed',
      status_code: 401,
      message: 'Token expired'
    })
  }
}

module.exports = ExpiredTokenException
