declare const SP: any
export const newClientContext = (url: string): object => new SP.ClientContext(`/${url}`)
