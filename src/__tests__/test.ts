import { kojp } from "../index";

const KoJp = new kojp();

test("Test isHangul(input) when input is valid korean letter", () => {
  expect(KoJp.isHangul("가")).toBe(true);
});

test("Test isHangul(input) when input is not a korean letter", () => {
  expect(KoJp.isHangul("a")).toBe(false);
});

test("Test getChoo(input)", () => {
  expect(KoJp.getChoo("값")).toBe("ㄱ");
});

test("Test getJung(input)", () => {
  expect(KoJp.getJung("값")).toBe("ㅏ");
});

test("Test getJong(input)", () => {
  expect(KoJp.getJong("값")).toBe("ㅄ");
});

test("convert", () => {
  expect(KoJp.convert("뭐해, 바보야")).toBe("むぉへ, ばぼや");
});

test("convert with batchim", () => {
  expect(KoJp.convert("앗, 이것은 밭침이다.")).toBe(
    "あっ, いごっうん ばっちむいだ."
  );
});
