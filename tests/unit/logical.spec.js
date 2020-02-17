import {
	TRUE, FALSE, not, negate, conjunct, disjunct
} from '@/utility/logical'

describe('logical.js', () => {
	it('TRUE', () => {
		expect(TRUE()).toEqual(true)
	})
	it('FALSE', () => {
		expect(FALSE()).toEqual(false)
	})
	it('not', () => {
		expect(not()).toEqual(true)
		expect(not(null)).toEqual(true)
		expect(not(true)).toEqual(false)
		expect(not(false)).toEqual(true)
	})
	it('negate', () => {
		expect(negate(TRUE)()).toEqual(false)
		expect(negate(FALSE)()).toEqual(true)
	})
	it('conjunct', () => {
		expect(conjunct(TRUE)(TRUE)()).toEqual(true)
		expect(conjunct(TRUE)(FALSE)()).toEqual(false)
		expect(conjunct(FALSE)(TRUE)()).toEqual(false)
		expect(conjunct(FALSE)(FALSE)()).toEqual(false)
	})
	it('disjunct', () => {
		expect(disjunct(TRUE)(TRUE)()).toEqual(true)
		expect(disjunct(TRUE)(FALSE)()).toEqual(true)
		expect(disjunct(FALSE)(TRUE)()).toEqual(true)
		expect(disjunct(FALSE)(FALSE)()).toEqual(false)
	})
})
