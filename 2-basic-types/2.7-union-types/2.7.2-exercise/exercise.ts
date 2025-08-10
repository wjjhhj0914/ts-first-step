// --------------------------------------------------------------------------
// ✅ 유니언 타입
// --------------------------------------------------------------------------

// 1. `input`이라는 매개변수를 받고, 이 매개변수가 문자열(string) 또는 
//    숫자(number)일 수 있는 함수 `formatInput`을 만드세요.
//
//    - 만약 입력값이 문자열이면, 대문자로 변환하여 반환하세요.
//    - 만약 입력값이 숫자이면, 달러 기호($)를 앞에 붙여 문자열로 반환하세요.

function formatInput(input: string | number) {
  switch (typeof input) {
    case 'string':
      return input.toUpperCase();
    case 'number':
      return `$${input}`;
    default:
      const _exhaustiveCheck: never = input;
      return _exhaustiveCheck;
  }
} 

// 2. 문자열 또는 숫자일 수 있는 타입 별칭 `Id`를 만드세요.
type Id = string | number;

// 3. `Id` 타입의 매개변수 `id`를 받아 콘솔에 출력하는 함수 `printId`를 만드세요.
function printId(id: Id): void {
  console.log(id);
}

// 4. 타입이 `Id`인 변수 `userId`를 만들고 숫자 값을 할당하세요. 그런 다음 `printId`를 `userId`로 호출하세요.
let userId: Id;
userId = 22;

printId(userId);

// 5. `userId`의 값을 문자열로 바꾸고, 다시 `printId`를 호출하세요.
userId = '22';

printId(userId);


// 6. 문자열 또는 어떤 값이든 담을 수 있는 배열을 매개변수로 받아, 해당 문자열 또는 배열의 길이를 반환하는 함수 `getLength`를 만드세요.

// `getLength` 함수를 문자열과 배열 모두로 테스트해보세요.
// console.log(getLength('안녕! 타입스크립트')) // 문자열의 길이가 출력되어야 합니다.
// console.log(getLength([1, 2, 3, 4, 5])) // 배열의 길이가 출력되어야 합니다.

function getLength(input: string | any[]): number {
  return input.length;
}

console.log(getLength('안녕! 타입스크립트')); // 13
console.log(getLength([1, 2, 3, 4, 5])); // 5