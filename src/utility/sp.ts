interface ISP {
	ClientContext: new (url: string) => object
}
declare const SP: ISP
export const newClientContext = (url: string): object => new SP.ClientContext(`/${url}`)
