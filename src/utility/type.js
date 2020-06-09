import { equal } from '@/utility/equality'
import { switchCase } from '@/utility/conditional'

export const typeOf = x => Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
export const typeEqual = type => x => equal(type)(typeOf(x))
export const switchType = switchCase(typeOf)
