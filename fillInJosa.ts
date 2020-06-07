import { get } from './josaPicker.ts'

// fillInJosa : string -> string
// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
function fillInJosa(str: string): string{
  return str.replace(
    /* +++(___ ____ ____)#{---------} */
    /(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g,
    (_, noun, josa) => noun + get(josa.trim())(noun)
  )
}

export default fillInJosa