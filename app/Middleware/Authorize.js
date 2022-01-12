'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ForbiddenException = use('App/Exceptions/ForbiddenException')

class Authorize {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth }, next, props) {
    const authorizedRoles = props

    const userRoles = []
    let authUserRoles = await auth.user.role().fetch()
    authUserRoles = authUserRoles.toJSON()
    authUserRoles.forEach((role) => userRoles.push(role.settings_role_label))

    const authorized = userRoles.some((role) => authorizedRoles.includes(role))
    if (!authorized) {
      throw new ForbiddenException('You are not authorized to perform this operation')
    }

    auth.user.roles = userRoles
    await next()
  }

  async wsHandle({ request, auth }, next, props) {
    // call next to advance the request
    const authorizedRoles = props

    const userRoles = []
    let authUserRoles = await auth.user.role().fetch()
    authUserRoles = authUserRoles.toJSON()
    authUserRoles.forEach((role) => userRoles.push(role.settings_role_label))

    const authorized = userRoles.some((role) => authorizedRoles.includes(role))
    if (!authorized) {
      throw new ForbiddenException('You are not authorized to perform this operation')
    }

    auth.user.roles = userRoles
    await next()
  }
}

module.exports = Authorize
