'use strict';

const BaseExceptionHandler = use('BaseExceptionHandler');
const Logger = use('Logger');
const BadRequestException = use('App/Exceptions/BadRequestException');
const ForbiddenException = use('App/Exceptions/ForbiddenException');
const NotFoundException = use('App/Exceptions/NotFoundException');
const AuthException = use('App/Exceptions/AuthException');
const UnauthorisedException = use('App/Exceptions/UnauthorisedException');
const ExpiredTokenException = use('App/Exceptions/ExpiredTokenException');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    if (error.name == 'BadRequestException') {
      return new BadRequestException().handle(error.message, response);
    }

    if (error.name == 'ForbiddenException') {
      return new ForbiddenException().handle(error, response);
    }

    if (error.name == 'NotFoundException') {
      return new NotFoundException().handle(error, response, error.message);
    }

    if (error.name == 'UnauthorisedException') {
      return new UnauthorisedException().handle(error, response, error.message);
    }

    if (error.name == 'ExpiredJwtToken') {
      return new ExpiredTokenException().handle(error, response);
    }

    if (error.name === 'InvalidJwtToken') {
      return new AuthException().handle(error, response);
    }

    return response.status(500).send({
      status_code: 500,
      status: 'System Error',
      message: 'System encountered an error',
    });
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {
    Logger.error(
      `url: ${request.url()}
       ip: ${request.ip()}
       timestamp: ${new Date()}
       error: ${error.stack}`
    );
  }
}

module.exports = ExceptionHandler;
