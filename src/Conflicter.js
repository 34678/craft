var diff = require('node-diff3')
/**
 * Conflicter defines a set of functions for the scaffolding process to compare text conflict or computed goal text for user
*/
class Conflicter {
  /**
   *
   * @param {*} textBefore local text
   * @param {*} textBase initial text
   * @param {*} textAfter new generated text
   */
  constructor (textBefore, textBase, textAfter) {
    this.textBefore = textBefore
    this.textBase = textBase
    this.textAfter = textAfter
  }
  /**
   * if new generated text is conflict with lcoal text
   * @memberof Conflicter
   * @return boolean
   */
  hasConflict () {
    let res = diff.mergeDigIn(this.textBefore, this.textBase, this.textAfter)
    if (res.conflict) {
      this.confictRes = res.result
      return true
    } else {
      return false
    }
  }
  /**
   * @param {string} mode the conflict opt mode
   * @memberof Conflicter
   * @return String
   */
  mergeText (mode) {
    let res = ''
    switch (mode) {
      case 'Overwrite':
        res = this.textAfter
        break
      case 'Oldtext':
        res = this.textBefore
        break
      case 'userEdit':
        res = this.pureConflict().join('')
        break
      default:
        // won't go here
        break
    }
    return res
  }
  /**
   * only return conflict text
   * @memberof Conflicter
   */
  pureConflict () {
    let tmparr = this.confictRes
    if (!tmparr) return []
    let res = []
    for (let i = 0; i < tmparr.length; i++) {
      if (tmparr[i] === '\n<<<<<<<<<\n') {
        res.push(tmparr[i])
        i++
        while (tmparr[i] !== '\n>>>>>>>>>\n') {
          res.push(tmparr[i])
          i++
        }
        res.push(tmparr[i])
      }
    }
    return res
  }
}
module.exports = Conflicter
