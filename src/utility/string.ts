/* eslint-disable @typescript-eslint/no-magic-numbers */

export const trimPipes = (x: string): string => x.replace(/^\||\|$/g, '')
export const splitBy = (splitter: string | RegExp) => (x: string): string[] => x.split(splitter)
export const splitByPipe = splitBy('|')
export const splitBySlash = splitBy('/')
export const splitByDot = splitBy('.')
export const capitalize = (x = ''): string => x[0].toUpperCase().concat(x.substring(1))
