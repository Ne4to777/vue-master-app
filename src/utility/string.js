
export const trimPipes = x => x.replace(/^\||\|$/g, '')
export const splitBy = splitter => x => x.split(splitter)
export const splitByPipe = splitBy('|')
export const splitBySlash = splitBy('/')
