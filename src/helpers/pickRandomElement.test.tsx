import { pickRandomElement } from "./pickRandomElement";

test("should work correctly", () => {
  const test_arr = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "X" },
    { id: 4, value: "0" },
    { id: 5, value: "" },
  ];

  const res1 = pickRandomElement(test_arr);
  const res2 = pickRandomElement([]);

  expect(test_arr).toContain(res1);
  expect(res2).toBeUndefined();
});
