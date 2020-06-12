export const TRUE = (): boolean => true
export const FALSE = (): boolean => false
export const not = (x: any): boolean => !x
export const negate = (f: Function) => (x: any): boolean => not(f(x))
export const conjunct = (f: Function) => (g: Function) => (x: any): boolean => f(x) && g(x)
export const disjunct = (f: Function) => (g: Function) => (x: any): boolean => f(x) || g(x)
