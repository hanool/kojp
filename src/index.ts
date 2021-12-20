import { koCombined, batchim } from "./krjpMap";

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
const koUcdStartsAt = 0xac00; //"가"
const koUcdEndsAt = 0xd7af; //"힣"
const koUcdConsonantStartsAt = 0x3131; //"ㄱ"
const koUcdVowelStartsAt = 0x314f; //"ㅏ"
const vowelPrefix = "ㅇ";

class kojp {
  isHangul = (letter: string): boolean => {
    return (
      // combined korean
      this.isCombined(letter) ||
      // single consonant korean
      this.isConsonant(letter) ||
      // single vowel korean
      this.isVowel(letter)
    );
  };

  isCombined = (letter: string): boolean => {
    const letterIndex: number = letter.charCodeAt(0);
    return letterIndex >= koUcdStartsAt && letterIndex <= koUcdEndsAt;
  };

  isConsonant = (letter: string): boolean => {
    const letterIndex: number = letter.charCodeAt(0);
    return (
      letterIndex >= koUcdConsonantStartsAt && letterIndex < koUcdVowelStartsAt
    );
  };

  isVowel = (letter: string): boolean => {
    const letterIndex: number = letter.charCodeAt(0);
    return (
      letterIndex >= koUcdVowelStartsAt &&
      letterIndex < koUcdVowelStartsAt + Jung.length
    );
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
    return letter.charCodeAt(0) - koUcdStartsAt;
  };

  getVowelIndex = (letter: string): number => {
    return letter.charCodeAt(0) - koUcdVowelStartsAt;
  };

  convert = (src: string): string => {
    let res: string = "";

    for (let i = 0; i < src.length; i++) {
      let char = src[i];

      if (this.isCombined(char)) {
        let cho: string = this.getChoo(char);
        let jung: string = this.getJung(char);

        res += koCombined[cho][jung];

        let jong = this.getJong(char);
        if (jong !== "") {
          res += batchim[jong];
        }
      } else if (this.isVowel(char)) {
        res += koCombined[vowelPrefix][char];
      } else {
        res += char;
      }
    }

    return res;
  };
}

export default new kojp();
