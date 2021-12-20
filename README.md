# kojp

## Converts Hangul(Korean alphabet) to Hiragana

```js
const kojp = require("kojp");

console.log(kojp.convert("안녕, 세상!")); // あんにょん, せさん!
```

### Combined Hangul Character will be converted.

```js
console.log(kojp.convert("조합 된 글자는 변환됩니다.")); 
// じょはぶ でん ぐるじゃぬん びょんふぁんでぶにだ.
```

### Single Vowel Character will be converted with prefix "ㅇ".
```js
console.log(kojp.convert("ㅏㅏㅏ오케이")); 
// あああおけい
```

### Except for the above, will be printed `as-is`
```js
console.log(kojp.convert("ㅋㅋㅋ eng 日本語")); 
// ㅋㅋㅋ eng 日本語
```
