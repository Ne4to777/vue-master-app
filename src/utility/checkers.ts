import {
	throwNumberError,
	throwStringError,
	throwArrayError,
	throwObjectError,
	throwBooleanError
} from '@/utility/throws'

import {
	W,
	pipe
} from '@/utility/combinators'

import {
	equal,
	unequal
} from '@/utility/equality'

import {
	TRUE,
	FALSE,
	negate,
	conjunct,
	disjunct
} from '@/utility/logical'

import {
	ifThen
} from '@/utility/conditional'

import {
	prop
} from '@/utility/object'
import {
	typeEqual,
	switchType
} from '@/utility/type'

export const isNumber = typeEqual('number')
export const isNotNumber = negate(isNumber)
export const isString = typeEqual('string')
export const isNotString = negate(isString)
export const isBoolean = typeEqual('boolean')
export const isNotBoolean = negate(isBoolean)
export const isRegExp = typeEqual('regexp')
export const isNotRegExp = negate(isRegExp)
export const isFunction = typeEqual('function')
export const isNotFunction = negate(isFunction)
export const isSymbol = typeEqual('symbol')
export const isNotSymbol = negate(isSymbol)
export const isArray = typeEqual('array')
export const isNotArray = negate(isArray)
export const isObject = typeEqual('object')
export const isNotObject = negate(isObject)
export const isBlob = typeEqual('blob')
export const isNotBlob = negate(isBlob)
export const isFile = typeEqual('file')
export const isNotFile = negate(isFile)
export const isError = typeEqual('error')
export const isNotError = negate(isError)

export const isNull = equal(null)
export const isNotNull = negate(isNull)
export const isUndefined = equal(undefined)
export const isDefined = negate(isUndefined)
export const isExists = conjunct(isDefined)(isNotNull)
export const isNotExists = negate(isExists)
export const isNaN = conjunct(isNumber)(W(unequal))
export const isNotNaN = negate(isNaN)

export const isNumberEmpty = ifThen(isNumber)(disjunct(equal(0))(isNaN), throwNumberError)
export const isNumberFilled = negate(isNumberEmpty)
export const isStringEmpty = ifThen(isString)(equal(''), throwStringError)
export const isStringFilled = negate(isStringEmpty)
export const isBooleanEmpty = ifThen(isBoolean)(equal(false), throwBooleanError)
export const isBooleanFilled = negate(isBooleanEmpty)
export const isArrayEmpty = ifThen(isArray)(pipe([prop('length'), equal(0)]), throwArrayError)
export const isArrayFilled = negate(isArrayEmpty)
export const isObjectEmpty = ifThen(isObject)(pipe([Object.keys, prop('length'), equal(0)]), throwObjectError)
export const isObjectFilled = negate(isObjectEmpty)
export const isFilled = switchType({
	undefined: FALSE,
	null: FALSE,
	number: isNumberFilled,
	string: isStringFilled,
	boolean: isBooleanFilled,
	array: isArrayFilled,
	object: isObjectFilled,
}, TRUE)
export const isEmpty = negate(isFilled)
