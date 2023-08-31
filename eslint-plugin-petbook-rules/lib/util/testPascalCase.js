const minimatch = require("minimatch");

/**
 * 유니코드를 이용하여 char가 숫자인지 확인
 */
function testDigit(char) {
  const charCode = char.charCodeAt(0);

  return charCode >= 48 && charCode <= 57;
}

/**
 * 주어진 문자 char가 대문자인지 확인
 */
function testUpperCase(char) {
  const upperCase = char.toUpperCase();
  return char === upperCase && upperCase !== char.toLowerCase();
}

/**
 * 주어진 문자 char가 소문자인지 확인
 */
function testLowerCase(char) {
  const lowerCase = char.toLowerCase();
  return char === lowerCase && lowerCase !== char.toUpperCase();
}

/**
 * 주어진 문자 char가 파스칼 케이스인지 확인
 */
function testPascalCase(name) {
  // 맨 첫번째 글자가 대문자가 아니면 파스칼 케이스가 아님
  if (!testUpperCase(name.charAt(0))) {
    return false;
  }

  // 숫자와 문자 이외의 문자가 있는 지 검사, 조건을 어긴 문자가 있을 경우 true, 없으면 false 반환
  const anyNonAlphaNumeric = Array.prototype.some.call(
    name.slice(1),
    (char) => char.toLowerCase() === char.toUpperCase() && !testDigit(char)
  );

  if (anyNonAlphaNumeric) {
    return false;
  }

  // 각 문자가 소문자 또는 숫자를 만족하는 지 판단, 조건을 어긴 문자가 있을 경우 true, 없으면 false 반환
  return Array.prototype.some.call(
    name.slice(1),
    (char) => testLowerCase(char) || testDigit(char)
  );
}

/**
 * 전체가 대문자인지 검사
 */
function testAllCaps(name) {
  const firstChar = name.charAt(0);

  // 첫번째 문자가 대문자가 아니거나 숫자면 false
  if (!(testUpperCase(firstChar) || testDigit(firstChar))) {
    return false;
  }

  // 순회하면서 다시 검사
  for (let i = 1; i < name.length - 1; i += 1) {
    const char = name.charAt(i);
    if (!(testUpperCase(char) || testDigit(char))) {
      return false;
    }
  }

  // 마지막 문자열 검사
  const lastChar = name.charAt(name.length - 1);
  if (!(testUpperCase(lastChar) || testDigit(lastChar))) {
    return false;
  }
  return true;
}

/**
 * 배열 ignore에 포함된 항목과 문자열 name을 비교하여 일치하는 지 검사
 */
function ignoreCheck(ignore, name) {
  return ignore.some(
    (entry) => name === entry || minimatch(name, entry, { noglobstar: true })
  );
}

exports.testPascalCase = testPascalCase;
exports.testAllCaps = testAllCaps;
exports.ignoreCheck = ignoreCheck;
