import {
	I, K, A, T, W, C, B, S, P, U, Y, pipe, parallel
} from '@/utility/combinators'

describe('combinators.js', () => {
	it('I', () => {
		expect(I()).toEqual(undefined)
		expect(I(null)).toEqual(null)
		expect(I(0)).toEqual(0)
		expect(I('')).toEqual('')
		expect(I([])).toEqual([])
		expect(I({})).toEqual({})
	})
	it('K', () => {
		expect(K()()).toEqual(undefined)
		expect(K(null)()).toEqual(null)
		expect(K(0)()).toEqual(0)
		expect(K('')()).toEqual('')
		expect(K([])()).toEqual([])
		expect(K({})()).toEqual({})
	})
	it('A', () => {
		expect(A(I)()).toEqual(undefined)
		expect(A(I)(null)).toEqual(null)
		expect(A(I)(0)).toEqual(0)
		expect(A(I)('')).toEqual('')
		expect(A(I)([])).toEqual([])
		expect(A(I)({})).toEqual({})
	})
	it('T', () => {
		expect(T()(I)).toEqual(undefined)
		expect(T(null)(I)).toEqual(null)
		expect(T(0)(I)).toEqual(0)
		expect(T('')(I)).toEqual('')
		expect(T([])(I)).toEqual([])
		expect(T({})(I)).toEqual({})
	})
	it('W', () => {
		expect(W(() => I)()).toEqual(undefined)
		expect(W(() => I)(null)).toEqual(null)
	})
	it('pipe', () => {
		expect(pipe([I])()).toEqual(undefined)
		expect(pipe([I])(null)).toEqual(null)
	})
	it('parallel', () => {
		expect(parallel([I])(I)()).toEqual(undefined)
		expect(parallel([I])(I)(null)).toEqual(null)
		expect(parallel([x => x + 1, x => x * 2])(x => y => x + y)(2)).toEqual(7)
	})
})
