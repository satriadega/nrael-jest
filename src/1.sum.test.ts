import sum from "./1sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// this will fail
test("SHOULD BE FAILED, adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(5);
});

export {};
