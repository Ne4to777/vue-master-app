export const ifThen = predicate => (onTrue, onFalse) => x => predicate(x) ? onTrue(x) : onFalse ? onFalse(x) : undefined
export const switchCase = f => (cases, defaultF) => x => {
	const caseF = cases[f(x)]
	return caseF ? caseF(x) : defaultF ? defaultF(x) : undefined
}
