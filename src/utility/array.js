import { isDefined } from '@/utility/checkers'

export const filter = f => xs => xs.filter(f)
export const joinBy = joiner => (...args) => args.filter(isDefined).join(joiner) || undefined
export const joinBySpace = joinBy(' ')
export const joinBySlash = joinBy('/')
export const mapBy = by => items => items.reduce((acc, item) => {
	acc[item[by]] = item
	return acc
}, {})
export const nth = n => xs => xs[n]
export const slice = f => xs => xs.slice(f)
export const concat = ys => xs => xs.concat(ys)
export const last = xs => xs[xs.length - 1]
