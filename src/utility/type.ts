import { equal } from '@/utility/equality'
import { switchCase } from '@/utility/conditional'

const sliceBegin = 8
const sliceEnd = -1

export const typeOf = (x: any): string => Object.prototype.toString.call(x).slice(sliceBegin, sliceEnd).toLowerCase()
export const typeEqual = (type: string) => (x: any): boolean => equal(type)(typeOf(x))
export const switchType = switchCase(typeOf)
