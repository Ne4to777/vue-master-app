export const I = (x: any): any => x // identity
export const K = (x: any) => () => x // constant
export const A = (f: Function) => (x: any) => f(x) // apply
export const T = (x: any) => (f: Function) => f(x) // thrush
export const W = (f: Function) => (x: any) => f(x)(x) // duplication
export const C = (f: Function) => (y: any) => (x: any) => f(x)(y) // flip
export const B = (f: Function) => (g: Function) => (x: any) => f(g(x)) // compose
export const S = (f: Function) => (g: Function) => (x: any) => f(x)(g(x)) // substitution
export const P = (f: Function) => (g: Function) => (x: any) => (y: any) => f(g(x))(g(y)) // psi
export const U = (f: Function): any => f(f) // UofU
export const Y = (f: Function): Function => U((g: Function): Function => f((x: any): any => U(g)(x))) // fix-point

export const pipe = (fs: Function[]): Function => fs.reduce((acc, f): Function => (x: any): any => f(acc(x)), I)
export const parallel = (streams: Function[]) =>
	(joiner: Function) => (x: any) => streams.reduce((acc, stream) => acc(stream(x)), joiner)
