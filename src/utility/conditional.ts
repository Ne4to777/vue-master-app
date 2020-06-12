export const ifThen = (predicate: (x: any) => boolean) =>
	(onTrue: Function, onFalse?: Function) =>
		(x: any) => predicate(x) ? onTrue(x) : onFalse ? onFalse(x) : undefined

export const switchCase = <S extends { [key: string]: Function }>(f: Function) =>
	(cases: S, defaultF?: Function) =>
		(x: any) => {
			const caseF = cases[f(x)]
			return caseF ? caseF(x) : defaultF ? defaultF(x) : undefined
		}
