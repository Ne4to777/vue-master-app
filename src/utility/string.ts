
export const trimPipes = (x: string): string => x.replace(/^\||\|$/g, '')
export const splitBy = (splitter: string | RegExp) => (x: string): string[] => x.split(splitter)
export const splitByPipe = splitBy('|')
export const splitBySlash = splitBy('/')
