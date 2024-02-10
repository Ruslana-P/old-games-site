import { generateRandomNumbers } from "./generateRandomNumbers";

test("function returns array with 6 unic numbers", () => {
  const result = generateRandomNumbers();
  expect(result).toHaveLength(6);

  const unicValues = [...new Set(result)];
  expect(unicValues).toHaveLength(6);
});

test("function returns array with numbers in range 0 to 17", () => {
  const result = generateRandomNumbers();
  result.forEach((num) => {
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(18);
  });
});
