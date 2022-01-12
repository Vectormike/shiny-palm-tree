'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class BadRequestException extends LogicalException {
  constructor( message ) {
    super()
    this.message = message
  }
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle (error,  response ) {
    response
      .status(400)
      .json({
        status_code: 400,
        status: 'Bad request', 
        message: error
      })
  }
}

module.exports = BadRequestException
