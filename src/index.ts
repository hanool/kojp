import { krjp } from "./krjp";
import { batchim } from "./batchim";

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

export class Kojp {
  constructor() {}

  isHangul = (letter: string): boolean => {
    const letterIndex: number = letter.charCodeAt(0);
    return letterIndex >= koUnicodeStartsAt && letterIndex <= koUnicodeEndsAt;
  };

  getChoo = (letter: string): string => {
    let chooIndex: number = Math.floor(
      Math.floor(this.getKrIndex(letter) / Jong.length) / Jung.length
    );
    return Choo[chooIndex];
  };

  getJung = (letter: string): string => {
    let jungIndex: number =
      Math.floor(this.getKrIndex(letter) / Jong.length) % Jung.length;
    return Jung[jungIndex];
  };

  getJong = (letter: string): string => {
    let jongIndex: number = this.getKrIndex(letter) % Jong.length;
    return Jong[jongIndex];
  };

  getKrIndex = (letter: string): number => {
    return letter.charCodeAt(0) - koUnicodeStartsAt;
  };

  convert = (src: string): string => {
    let res: string = "";

    for (let i = 0; i < src.length; i++) {
      let char = src[i];
      if (!this.isHangul(char)) {
        res += char;
      } else {
        let cho: string = this.getChoo(char);
        let jung: string = this.getJung(char);

        res += krjp[cho][jung];

        let jong = this.getJong(char);
        if (jong !== "") {
          res += batchim[jong];
        }
      }
    }

    return res;
  };
}
