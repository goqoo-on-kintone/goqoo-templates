// @ts-check

/**
 * @typedef {'development' | 'staging' | 'production'} Env
 *
 * @typedef {{
 *  'app': number
 * }} AppId
 *
 * @typedef {{
 *  'app'?: string
 * }} ApiToken
 */

/**
 * @type {import('goqoo').Config<Env, AppId, ApiToken>}
 */
const config = {
  bundlerType: 'vue',
  environments: [],
}
module.exports = config
