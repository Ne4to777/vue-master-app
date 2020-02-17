
export const I = x => x // identity
export const K = x => () => x // constant
export const A = f => x => f(x) // apply
export const T = x => f => f(x) // thrush
export const W = f => x => f(x)(x) // duplication
export const C = f => y => x => f(x)(y) // flip
export const B = f => g => x => f(g(x)) // compose
export const S = f => g => x => f(x)(g(x)) // substitution
export const P = f => g => x => y => f(g(x))(g(y)) // psi
export const U = f => f(f) // UofU
export const Y = f => U(g => f(x => U(g)(x))) // fix-point

export const pipe = fs => fs.reduce((acc, f) => x => f(acc(x)), I)
export const parallel = streams => joiner => x => streams.reduce((acc, stream) => acc(stream(x)), joiner)
