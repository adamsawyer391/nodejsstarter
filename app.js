const _lodash = require('lodash')

const items = [1, [2, [3, [4]]]]
const flat = _lodash.flattenDeep(items)
console.log(flat)