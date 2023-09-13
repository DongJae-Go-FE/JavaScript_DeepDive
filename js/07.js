var x = 10;

//명시적 타입 변환 => 개발자가 의도적으로 타입을 변환하는 것

var str = x.toString();
//숫자를 문자열로 타입 캐스팅(명시적 타입 변환)을 한다.

console.log(typeof str, str);
//string 10

//그렇다고 x의 값이 변경된 것은 아님
console.log(typeof x, x);






var y = 10;

//암묵적 타입 변환 => 자바스크립트 엔진이 암묵적으로 타입을 변경하는 것
var str2 = y + "";
console.log(typeof str2, str2);
//string, 10
console.log(typeof y, y);
//그렇다고 y의 값이 변한 건 아니다.



// 암묵적 타입 변환 Truthy 값과 Falsy

function TypeFun(x){
    return console.log("암묵적 타입 변환 Falsey:::",!!x);
}

TypeFun(false);
TypeFun(undefined);
TypeFun(null);
TypeFun(0);
TypeFun(NaN);
TypeFun('');


//단축 평가
true || anything // true
// 둘중에 하나만 true인 값을 리턴을 해줘서 앞에서 바로 true가 나와 바로 true 리턴을 한다.

false || anything //anything
// 앞에는 false고 뒤에 있는 anything은 true니 anything을 리턴한다.

true && anything // anything
// 앞에 값은 true지만 뒤에 있는 anything 불리언 타입도 체크를 해보고 true이면 뒤에 것을 리턴

false && anything // false
// 둘다 참이여야 true 리턴을 하지만 false 값을 리턴을 한다.