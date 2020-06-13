import { Y } from '@/utility/combinators'

export const prop = <T extends object & [], U extends keyof T>(x: U) => (o: T) => o[x]
export const hasOwnProp = (x: string) => (o: object) => Object.prototype.hasOwnProperty.call(o, x)
export const climbToProp = (f: Function): any =>
	Y((fr: Function): Function =>
		([h, ...t]: string[]): Function =>
			(o: object): any =>
				t.length ? fr(t)(f(h, t)(o)) : f(h)(o))
export const getByProps = climbToProp((h: string) => (o: any) => o[h])
export const setByProps = (value: any): any =>
	climbToProp((h: string, t?: string[]) => (o: any) => {
		const result = o[h]
		// eslint-disable-next-line no-param-reassign
		if (!t) o[h] = value
		return result
	})
