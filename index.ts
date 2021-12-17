// having fun with just testing around.

const Choo: Array<string> = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
]; //19
const Jung: Array<string> = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
]; //21
const Jong: Array<string> = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
]; //28
const koUnicodeStartsAt = 0xac00; //"가"
const koUnicodeEndsAt = 0xd7af; //"가"

let test = "안녕, 세상";

const isHangul = (letter: string): boolean => {
  const letterIndex: number = letter.charCodeAt(0);
  return letterIndex >= koUnicodeStartsAt && letterIndex <= koUnicodeEndsAt;
};

const getChoo = (letter: string): string => {
  let chooIndex: number = Math.floor(
    Math.floor((letter.charCodeAt(0) - koUnicodeStartsAt) / 28) / 21
  );
  return Choo[chooIndex];
};

const getJung = (letter: string): string => {
  let jungIndex: number =
    Math.floor((letter.charCodeAt(0) - koUnicodeStartsAt) / 28) % 21;
  return Jung[jungIndex];
};

const getJong = (letter: string): string => {
  let jongIndex: number = (letter.charCodeAt(0) - koUnicodeStartsAt) % 28;
  return Jong[jongIndex];
};

console.log(`${test} is composed by `);
test.split("").map((letter) => {
  if (isHangul(letter)) {
    console.log(
      `${letter}: '${getChoo(letter)}','${getJung(letter)}','${getJong(
        letter
      )}'`
    );
  } else {
    console.log(`${letter}`);
  }
});
