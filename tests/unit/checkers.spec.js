import {
	isNumber,
	isNotNumber,
	isString,
	isNotString,
	isBoolean,
	isNotBoolean,
	isRegExp,
	isNotRegExp,
	isFunction,
	isNotFunction,
	isSymbol,
	isNotSymbol,
	isArray,
	isNotArray,
	isObject,
	isNotObject,
	isBlob,
	isNotBlob,
	isFile,
	isNotFile,
	isNull,
	isNotNull,
	isDefined,
	isUndefined,
	isExists,
	isNotExists,
	isNaN,
	isNotNaN,
	isError,
	isNotError,
	isNumberFilled,
	isNumberEmpty,
	isStringFilled,
	isStringEmpty,
	isBooleanFilled,
	isBooleanEmpty,
	isArrayFilled,
	isArrayEmpty,
	isObjectFilled,
	isObjectEmpty,
	isFilled,
	isEmpty
} from '@/utility/checkers'


describe('checkers.js', () => {
	it('isNumber', () => {
		expect(isNumber()).toEqual(false)
		expect(isNumber(null)).toEqual(false)
		expect(isNumber(1)).toEqual(true)
		expect(isNumber(NaN)).toEqual(true)
	})
	it('isNotNumber', () => {
		expect(isNotNumber()).toEqual(true)
		expect(isNotNumber(null)).toEqual(true)
		expect(isNotNumber(1)).toEqual(false)
		expect(isNotNumber(NaN)).toEqual(false)
	})
	it('isString', () => {
		expect(isString()).toEqual(false)
		expect(isString(null)).toEqual(false)
		expect(isString('1')).toEqual(true)
		expect(isString('')).toEqual(true)
	})
	it('isNotString', () => {
		expect(isNotString()).toEqual(true)
		expect(isNotString(null)).toEqual(true)
		expect(isNotString('1')).toEqual(false)
		expect(isNotString('')).toEqual(false)
	})
	it('isBoolean', () => {
		expect(isBoolean()).toEqual(false)
		expect(isBoolean(null)).toEqual(false)
		expect(isBoolean(true)).toEqual(true)
		expect(isBoolean(false)).toEqual(true)
	})
	it('isNotBoolean', () => {
		expect(isNotBoolean()).toEqual(true)
		expect(isNotBoolean(null)).toEqual(true)
		expect(isNotBoolean(true)).toEqual(false)
		expect(isNotBoolean(false)).toEqual(false)
	})
	it('isRegExp', () => {
		expect(isRegExp()).toEqual(false)
		expect(isRegExp(null)).toEqual(false)
		expect(isRegExp(/1/)).toEqual(true)
	})
	it('isNotRegExp', () => {
		expect(isNotRegExp()).toEqual(true)
		expect(isNotRegExp(null)).toEqual(true)
		expect(isNotRegExp(/1/)).toEqual(false)
	})
	it('isFunction', () => {
		expect(isFunction()).toEqual(false)
		expect(isFunction(null)).toEqual(false)
		expect(isFunction(x => x)).toEqual(true)
	})
	it('isNotFunction', () => {
		expect(isNotFunction()).toEqual(true)
		expect(isNotFunction(null)).toEqual(true)
		expect(isNotFunction(x => x)).toEqual(false)
	})
	it('isSymbol', () => {
		expect(isSymbol()).toEqual(false)
		expect(isSymbol(null)).toEqual(false)
		expect(isSymbol(Symbol('test'))).toEqual(true)
	})
	it('isNotSymbol', () => {
		expect(isNotSymbol()).toEqual(true)
		expect(isNotSymbol(null)).toEqual(true)
		expect(isNotSymbol(Symbol('test'))).toEqual(false)
	})
	it('isArray', () => {
		expect(isArray()).toEqual(false)
		expect(isArray(null)).toEqual(false)
		expect(isArray([])).toEqual(true)
	})
	it('isNotArray', () => {
		expect(isNotArray()).toEqual(true)
		expect(isNotArray(null)).toEqual(true)
		expect(isNotArray([])).toEqual(false)
	})
	it('isObject', () => {
		expect(isObject()).toEqual(false)
		expect(isObject(null)).toEqual(false)
		expect(isObject({})).toEqual(true)
	})
	it('isNotObject', () => {
		expect(isNotObject()).toEqual(true)
		expect(isNotObject(null)).toEqual(true)
		expect(isNotObject({})).toEqual(false)
	})
	it('isBlob', () => {
		expect(isBlob()).toEqual(false)
		expect(isBlob(null)).toEqual(false)
		expect(isBlob(new Blob())).toEqual(true)
	})
	it('isNotBlob', () => {
		expect(isNotBlob()).toEqual(true)
		expect(isNotBlob(null)).toEqual(true)
		expect(isNotBlob(new Blob())).toEqual(false)
	})
	it('isFile', () => {
		expect(isFile()).toEqual(false)
		expect(isFile(null)).toEqual(false)
		expect(isFile(new File([new Blob()], 'text/html'))).toEqual(true)
	})
	it('isNotFile', () => {
		expect(isNotFile()).toEqual(true)
		expect(isNotFile(null)).toEqual(true)
		expect(isNotFile(new File([new Blob()], 'text/html'))).toEqual(false)
	})
	it('isNull', () => {
		expect(isNull()).toEqual(false)
		expect(isNull(1)).toEqual(false)
		expect(isNull(null)).toEqual(true)
	})
	it('isNotNull', () => {
		expect(isNotNull()).toEqual(true)
		expect(isNotNull(1)).toEqual(true)
		expect(isNotNull(null)).toEqual(false)
	})
	it('isDefined', () => {
		expect(isDefined(1)).toEqual(true)
		expect(isDefined(null)).toEqual(true)
		expect(isDefined()).toEqual(false)
	})
	it('isUndefined', () => {
		expect(isUndefined(1)).toEqual(false)
		expect(isUndefined(null)).toEqual(false)
		expect(isUndefined()).toEqual(true)
	})
	it('isExists', () => {
		expect(isExists()).toEqual(false)
		expect(isExists(null)).toEqual(false)
		expect(isExists(1)).toEqual(true)
	})
	it('isNotExists', () => {
		expect(isNotExists()).toEqual(true)
		expect(isNotExists(null)).toEqual(true)
		expect(isNotExists(1)).toEqual(false)
	})
	it('isNaN', () => {
		expect(isNaN()).toEqual(false)
		expect(isNaN(null)).toEqual(false)
		expect(isNaN(1)).toEqual(false)
		expect(isNaN(NaN)).toEqual(true)
	})
	it('isNotNaN', () => {
		expect(isNotNaN()).toEqual(true)
		expect(isNotNaN(null)).toEqual(true)
		expect(isNotNaN(1)).toEqual(true)
		expect(isNotNaN(NaN)).toEqual(false)
	})
	it('isError', () => {
		expect(isError()).toEqual(false)
		expect(isError(null)).toEqual(false)
		expect(isError(1)).toEqual(false)
		expect(isError(new Error('test'))).toEqual(true)
	})
	it('isNotError', () => {
		expect(isNotError()).toEqual(true)
		expect(isNotError(null)).toEqual(true)
		expect(isNotError(1)).toEqual(true)
		expect(isNotError(new Error('test'))).toEqual(false)
	})
	it('isNumberFilled', () => {
		expect(() => isNumberFilled()).toThrow()
		expect(() => isNumberFilled(null)).toThrow()
		expect(isNumberFilled(NaN)).toEqual(false)
		expect(isNumberFilled(1)).toEqual(true)
	})
	it('isNumberEmpty', () => {
		expect(() => isNumberEmpty()).toThrow()
		expect(() => isNumberEmpty(null)).toThrow()
		expect(isNumberEmpty(NaN)).toEqual(true)
		expect(isNumberEmpty(1)).toEqual(false)
	})
	it('isStringFilled', () => {
		expect(() => isStringFilled()).toThrow()
		expect(() => isStringFilled(null)).toThrow()
		expect(isStringFilled('test')).toEqual(true)
		expect(isStringFilled('')).toEqual(false)
	})
	it('isStringEmpty', () => {
		expect(() => isStringEmpty()).toThrow()
		expect(() => isStringEmpty(null)).toThrow()
		expect(isStringEmpty('test')).toEqual(false)
		expect(isStringEmpty('')).toEqual(true)
	})
	it('isBooleanFilled', () => {
		expect(() => isBooleanFilled()).toThrow()
		expect(() => isBooleanFilled(null)).toThrow()
		expect(isBooleanFilled(true)).toEqual(true)
		expect(isBooleanFilled(false)).toEqual(false)
	})
	it('isBooleanEmpty', () => {
		expect(() => isBooleanEmpty()).toThrow()
		expect(() => isBooleanEmpty(null)).toThrow()
		expect(isBooleanEmpty(true)).toEqual(false)
		expect(isBooleanEmpty(false)).toEqual(true)
	})
	it('isArrayFilled', () => {
		expect(() => isArrayFilled()).toThrow()
		expect(() => isArrayFilled(null)).toThrow()
		expect(isArrayFilled([1])).toEqual(true)
		expect(isArrayFilled([])).toEqual(false)
	})
	it('isArrayEmpty', () => {
		expect(() => isArrayEmpty()).toThrow()
		expect(() => isArrayEmpty(null)).toThrow()
		expect(isArrayEmpty([1])).toEqual(false)
		expect(isArrayEmpty([])).toEqual(true)
	})
	it('isObjectFilled', () => {
		expect(() => isObjectFilled()).toThrow()
		expect(() => isObjectFilled(null)).toThrow()
		expect(isObjectFilled({ x: 1 })).toEqual(true)
		expect(isObjectFilled({})).toEqual(false)
	})
	it('isObjectEmpty', () => {
		expect(() => isObjectEmpty()).toThrow()
		expect(() => isObjectEmpty(null)).toThrow()
		expect(isObjectEmpty({ x: 1 })).toEqual(false)
		expect(isObjectEmpty({})).toEqual(true)
	})
	it('isFilled', () => {
		expect(isFilled()).toEqual(false)
		expect(isFilled(null)).toEqual(false)
		expect(isFilled(true)).toEqual(true)
		expect(isFilled(false)).toEqual(false)
		expect(isFilled(1)).toEqual(true)
		expect(isFilled(0)).toEqual(false)
		expect(isFilled('test')).toEqual(true)
		expect(isFilled('')).toEqual(false)
		expect(isFilled([1])).toEqual(true)
		expect(isFilled([])).toEqual(false)
		expect(isFilled({ x: 1 })).toEqual(true)
		expect(isFilled({})).toEqual(false)
	})
	it('isEmpty', () => {
		expect(isEmpty()).toEqual(true)
		expect(isEmpty(null)).toEqual(true)
		expect(isEmpty(true)).toEqual(false)
		expect(isEmpty(false)).toEqual(true)
		expect(isEmpty(1)).toEqual(false)
		expect(isEmpty(0)).toEqual(true)
		expect(isEmpty('test')).toEqual(false)
		expect(isEmpty('')).toEqual(true)
		expect(isEmpty([1])).toEqual(false)
		expect(isEmpty([])).toEqual(true)
		expect(isEmpty({ x: 1 })).toEqual(false)
		expect(isEmpty({})).toEqual(true)
	})
})
