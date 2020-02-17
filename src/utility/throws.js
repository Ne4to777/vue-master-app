import { typeOf } from '@/utility/type'

export const throwError = msg => x => { throw new Error(`${x} ${msg}`) }
export const throwTypeError = type => x => { throw new TypeError(`"${x}" has type ${typeOf(x)}, expected "${type}"`) }

export const throwNumberError = throwTypeError('Number')
export const throwStringError = throwTypeError('String')
export const throwBooleanError = throwTypeError('Boolean')
export const throwArrayError = throwTypeError('Array')
export const throwObjectError = throwTypeError('Object')
