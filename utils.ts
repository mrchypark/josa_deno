import { get } from './josaPicker.ts'

// A Josaify is a function: string -> string
//   - Produces a given word with a josa appended.

// makeJosaify : Josa -> Josaify
// Given a josa, produces a josaify.
const makeJosaify = (josa: string) => (word: string) =>
  word + get(josa)(word)

// getJosaPicker : Josa -> JosaPicker
const getJosaPicker = get

export {
  getJosaPicker,
  makeJosaify
}