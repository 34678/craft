
/**
 * PluginAPI defines a set of actions for the scaffolding process
 * Any methods defined in PluginAPI's prototype is exposed to a user-defined plugin function
 * plugin writers will use these given APIs to customize their scaffolding functionality
 */
class PluginAPI {
  /**
   *
   * @param {*} id
   * @param {*} generator
   * @param {*} options
   */
  constructor (id, generator, options) {
    this.id = id
    this.generator = generator
    this.options = options
  }

  /**
   * extends project's pacakge.json, if package.json is not found, an error will be thrown
   * @param {object} data object that will be merged into existing package.json
   * @return
   */
  extendsPkg (data) {
  }

  /**
   *
   * @param {string} src
   * @param {string} target
   * @param {object} renderOptions
   */
  copyTpl (src, target, renderOptions) {
  }

  applyPlugin () {
  }

  applyPluginAfter () {
  }
}

module.exports = PluginAPI
