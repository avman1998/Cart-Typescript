import sum from "../sum";

test("Sum function test", () => {
  const result = sum(10, 4);
  expect(result).toBe(14);
});
