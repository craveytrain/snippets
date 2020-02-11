import {
  obj
} from './obj'
import {
  flatten
} from './flatten'

const flattenedArray = flatten(obj)
console.log('result', flattenedArray)
console.log('count', flattenedArray.length)
