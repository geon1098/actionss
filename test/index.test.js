// src/index.js 에서 테스트할 함수들을 불러옴
const { add, subtract, multiply } = require("../src/index");

// 사칙연산 함수들을 그룹화해서 테스트
describe("사칙연산 함수 테스트", () => {
  // add 함수가 올바르게 동작하는지 확인
  test("add(2, 3)은 5를 반환해야 한다", () => {
    expect(add(2, 3)).toBe(5);
  });

  // subtract 함수가 올바르게 동작하는지 확인
  test("subtract(10, 4)는 6을 반환해야 한다", () => {
    expect(subtract(10, 4)).toBe(5);
  });

  // multiply 함수가 올바르게 동작하는지 확인
  test("multiply(3, 4)는 12를 반환해야 한다", () => {
    expect(multiply(3, 4)).toBe(11);
  });

  // ⚠️ 아래 주석을 해제하면 CI(GitHub Actions)가 실패합니다.
  // GitHub Actions 실패 상황을 실습할 때 사용하세요.
  //
  // test("일부러 실패하는 테스트", () => {
  //   expect(add(1, 2)).toBe(100); // 실제로는 3이므로 실패
  // });
});
