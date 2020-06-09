export const TRUE = () => true
export const FALSE = () => false
export const not = x => !x
export const negate = f => x => not(f(x))
export const conjunct = f => g => x => f(x) && g(x)
export const disjunct = f => g => x => f(x) || g(x)
