import { typeOf } from '@/utility/type'

export const throwError = (msg: string) => (x: string): never => {
	throw new Error(`${x} ${msg}`)
}
export const throwTypeError = (type: any) => (x: string): never => {
	throw new TypeError(`"${x}" has type ${typeOf(x)}, expected "${type}"`)
}

export const throwNumberError = throwTypeError('Number')
export const throwStringError = throwTypeError('String')
export const throwBooleanError = throwTypeError('Boolean')
export const throwArrayError = throwTypeError('Array')
export const throwObjectError = throwTypeError('Object')
