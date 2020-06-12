export const prop = <T extends object & [], U extends keyof T>(x: U) => (o: T) => o[x]
export const hasOwnProp = (x: string) => (o: object) => Object.prototype.hasOwnProperty.call(o, x)
