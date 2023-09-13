//원시타입
//number. string, boolean, undefined, null, symbol

//객체타입
//object, function, array, symbol

//숫자타입
var integer = 10; //정수
var double = 10.12; // 실수
var negetive = -20; // 음의 정수

// 65

var binary = 0b01000001; //2진수
var octal = 0o101; // 8진수
var hex = 0x41; //16진수

console.log(binary === octal); // true
console.log(octal === hex); // true

//자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수 처리한다고 했다
console.log(1 === 1.0);



//문자열 타입

var string;

string = '작은따옴표';
string = "큰따옴표";
string = `백틱`


var str = `
개행도
됩니다.
${string}
`
//여기서 백틱은 개행과 ${} 변수 삽입도 가능
//<div></div>html 코드도 삽입 가능


//논리 타입
true
false 
//밖에 없다

// undefined 타입

var asd
// var로 선언하면 undefined로 초기화가 되어 있다.
//편하게 생각을 하자면 변수를 비워둘 수 없으니 값을 할당하여 변수의 실체를 명확히 하는 것을 말한다.


null 
// 변수 초기화
//ull은 변수에 값이 없다는 것을 의도적으로 명시할 때 사용하고 변수가 이전에 참조하던 값을 더이상 참조하지 않겠다는 의미


Object
// 자바스크립트를 이루고 있는 모든 타입