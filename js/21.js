new Array(); // []

new Array(1, 2, 3); // [1,2,3]
// 전달된 인수가 2개 이상이면 인수를 요소로 가지는 배열을 만든다.

new Array({}); //[{}]
// 전달된 인수가 숫자가 아니면 요소가 하나라더라도 배열을 만든다.

Array.of(1); //[1]
// 전달된 인수가 하나고 숫자더라면 배열을 만든다.

//배열 메서드
//배열에는 원본(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경한ㄴ, 메서드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 변환하는 메서드가 있다.

//1. push()

const arr = [1, 2];
let pushResult = arr.push(3, 4);
console(pushResult); // 4
//인수로 전달 받은 모든 값을 원본 배열 arr의 마지막 요소로 추가를 하고 변경된 length 값을 리턴한다.

console.log("push", arr); //[1,2,3,4]
//push 매서드는 원본 배열울 직접 변경한다.

//2. pop()
const arr2 = [1, 2];
let popResult = arr2.pop();
console.log(popResult); // 2
//원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.

console.log("pop", arr2); // [1]
//pop 메서드는 원본 배열을 직접 변경한다.

//3. unshift()
const arr3 = [1, 2];
let unshiftResult = arr3.unshift(3, 4);
console.log(unshiftResult); //4
//인수로 전달 받은 값을 전부 배열의 선두에 삽입을 하고 length 값을 반환한다.

console.log("unshift", arr3); //[3,4,1,2]
//unshift 매서드는 원본 배열을 직접 변경한다.

//4. shift();
const arr4 = [1, 2];
let shiftResult = arr4.shift();
console.log(shiftResult); //1
//원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.

console.log("shift", shiftResult);
//shift 메서드는 원본 배열을 직접 변경한다.

//5. concat()
const conArr1 = [1, 2];
const conArr2 = [3, 4];

let resultConcat = conArr1.concat(conArr2);
console.log(resultConcat); //[1,2,3,4]
//conArr2를 conArr1 마지막 요소로 추가한 새로운 배열을 반환한다.

let resultConcat2 = conArr1.concat(3);
console.log(resultConcat2); // [1,2,3]
//숫자를 conArr1 마지막 요소 삽입한 새로운 배열을 반환한다.

let resultConcat3 = conArr1.concat(conArr2, 5);
console.log(resultConcat3); // [1,2,3,4,5]
//conArr2와 5를 conArr1 마지막에 삽입을 하고 새로운 배열을 반환을 한다.

console.log(conArr1); // [1,2]
//concat()은 원본 배열울 직접 수정하지 않는다.
