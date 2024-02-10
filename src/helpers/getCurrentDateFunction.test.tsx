import { getCurrentDate } from "./getCurrentDateFunction";

test("should returns data in correct format", () => {
  const mockDate = new Date("2022-01-01T00:00:00.000Z");
  jest.spyOn(global, "Date").mockImplementation(() => mockDate);

  const result = getCurrentDate();
  expect(result).toEqual("Jan. 1, 2022, 1:00");
  expect(typeof result).toBe("string");
});
