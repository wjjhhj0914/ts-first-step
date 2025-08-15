// --------------------------------------------------------------------------
// ✅ 객체의 선택적 필드(Optional Fields)
// --------------------------------------------------------------------------

// 문제
// 다음 필드를 가진 User 인터페이스를 정의하세요.
// - id (숫자)
// - email (문자열: 옵션)

interface User {
  id: number;
  email?: string;
}

const myUser: User = {
  id: 1234,
  email: 'wjjhhj0914@gmail.com',
};

console.log(myUser.id);
console.log(myUser.email);
