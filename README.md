<div align="center">
  <h1>josa_deno</h1>

  <p>
    <a href="https://github.com/mrchypark/josa_deno/blob/master/LICENSE.md">
      <img src="https://img.shields.io/github/license/mrchypark/josa_deno.svg" alt="license">
    </a>
  </p>
</div>

[josa](https://github.com/kimdhoe/josa) npm 패키지의 ts(for deno) 포팅 입니다. josa 패키지의 설명을 빌립니다.

> 프로그램에서 한글을 사용할 때 마주치는 문제 중 하나는 명사가 동적으로 생성되는 경우 조사도 이에 맞춰 동적으로 결정되어야 한다는 점입니다. Josa는 이 문제를 해결하기 위한 라이브러리로, 입력받은 명사의 형태에 적법한 조사를 찾아줍니다.

## 사용법

```typescript
import {josa} from "https://denopkg.com/mrchypark/josa_deno/mod.ts";
```

아래는 대표 사용법으로, 전체 설명서는 [josa](https://github.com/kimdhoe/josa)의 readme를 참고해주세요. 이 자리를 빌어 좋은 패키지 공유해주신 [kimdhoe](https://github.com/kimdhoe)님 감사합니다.

```typescript
josa('친구#{이} 선생님#{와} 함께 학교#{으로} 간다.')
// => '친구가 선생님과 함께 학교로 간다.'

const book = getBookFromSomewhere()

josa(`${book.title}#{는} ${book.author}#{이} 쓴 책이고, ISBN은 ${book.isbn}#{예요}.`)
// => '자연의 이야기들은 쥘 르나르가 쓴 책이고, ISBN은 xxxxxxxxxxxx3이에요.'

josa('숫자#{이} 3#{가} 되었다.')
// => '숫자가 3이 되었다.'

josa('값#{가} 7#{으로} 바뀐다.')
// => '값이 7로 바뀐다.'
```
