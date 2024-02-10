import { countInversions } from "./countInversionsFunction";

test("correctly count inversions in an array", () => {
  expect(
    countInversions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  ).toBe(0);
  expect(
    countInversions([1, 2, 3, 4, 5, 7, 6, 9, 8, 10, 12, 11, 13, 14, 15])
  ).toBe(2);
  expect(
    countInversions([1, 4, 3, 2, 5, 7, 6, 9, 8, 12, 10, 11, 15, 14, 13])
  ).toBe(9);
});
