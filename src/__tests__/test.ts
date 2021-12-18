import { Kojp } from "../index";

const kojp = new Kojp();

test("Test isHangul(input) when input is valid korean letter", () => {
  expect(kojp.isHangul("가")).toBe(true);
});

test("Test isHangul(input) when input is not a korean letter", () => {
  expect(kojp.isHangul("a")).toBe(false);
});
