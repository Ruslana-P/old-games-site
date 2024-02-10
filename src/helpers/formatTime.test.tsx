import { formatTime } from "./formatTime";

test("should format time(in secunds) to string correctly", () => {
  const res1 = formatTime(60);
  expect(res1).toBe("01:00");

  const res2 = formatTime(62);
  expect(res2).toBe("01:02");

  const res3 = formatTime(6);
  expect(res3).toBe("00:06");

  const res4 = formatTime(150);
  expect(res4).toBe("02:30");
});
