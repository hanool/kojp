import { Kojp } from "../index";

const kojp = new Kojp();

test("Test isHangul(input) when input is valid korean letter", () => {
  expect(kojp.isHangul("가")).toBe(true);
});

test("Test isHangul(input) when input is not a korean letter", () => {
  expect(kojp.isHangul("a")).toBe(false);
});

test("Test getChoo(input)", () => {
  expect(kojp.getChoo("값")).toBe("ㄱ");
});

test("Test getJung(input)", () => {
  expect(kojp.getJung("값")).toBe("ㅏ");
});

test("Test getJong(input)", () => {
  expect(kojp.getJong("값")).toBe("ㅄ");
});

test("convert", () => {
  expect(kojp.convert("뭐해, 바보야")).toBe("むぉへ, ばぼや");
});

test("convert with batchim", () => {
  expect(kojp.convert("앗, 이것은 밭침이다.")).toBe(
    "あっ, いごっうん ばっちむいだ."
  );
});
