import { isDefined } from '@/utility/checkers'

export const filter = (f: (value: any, index: number, array: any[]) => any) => (xs: any[]) => xs.filter(f)
export const joinBy = (joiner: string) => (xs: any[]) => xs.filter(isDefined).join(joiner) || undefined
export const joinBySpace = joinBy(' ')
export const joinBySlash = joinBy('/')
export const mapBy = <T extends object, U extends keyof T>(by: U) =>
	(items: T[]) => items.reduce((acc: any, item: T) => {
		acc[item[by]] = item
		return acc
	}, {})
export const nth = (n: number) => (xs: any[]) => xs[n]
export const slice = (...args: number[]) => (xs: []) => xs.slice(...args)
export const concat = (ys: any[]) => (xs: any[]) => xs.concat(ys)

const ONE = 1
export const last = (xs: any[]): any[] => xs[xs.length - ONE]
