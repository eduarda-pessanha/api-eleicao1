const fs = require('fs')

const FILENAME = 'groupModel.json'
let items = null

const groupModel = {
  get() {
    if (items === null) {
      try {
        const stringfied = fs.readFileSync(FILENAME, 'utf8')
        items = JSON.parse(stringfied)
      } catch {
        items = []
      }
    }
    return items
  },
  set(newItems) {
    const stringfied = JSON.stringify(newItems, null, 2)
    fs.writeFileSync(FILENAME, stringfied, 'utf8')
    items = newItems
  }
}

module.exports = groupModel