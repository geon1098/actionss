// 두 숫자를 더해서 반환하는 함수
function add(a, b) {
  return a + b;
}

// 첫 번째 숫자에서 두 번째 숫자를 빼서 반환하는 함수
function subtract(a, b) {
  return a - b;
}

// 두 숫자를 곱해서 반환하는 함수
function multiply(a, b) {
  return a * b;
}

// 다른 파일에서 사용할 수 있도록 함수들을 내보냄 (CommonJS 방식)
module.exports = {
  add,
  subtract,
  multiply,
};
