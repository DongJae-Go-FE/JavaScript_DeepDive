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

//6. splice()
const arr5 = [1, 2, 3, 4];

const spliceResult = arr5.splice(1, 2, 20, 30);
console.log(spliceResult); // 2,3
// arr5의 1번 인덱스부터 2개 길이를 제거 - shift 후 그 자리에 20, 30을 삽입 즉 unShift 후 제거한 요소 반환

console.log(arr5); // [1,20,30,4]
// splice() 원본 배열을 직접 수정한다.

//splice() 함수 추가 설명
// 첫번째 인수는 시작할 인덱스 , 두번째 인수는 시작할 인덱스부터 얼앨 숫자 카운트
// 세번쨰부터는 배열에 추가할 값
// arr5.splice(1,0,100) 만약 두번째 인수가 0일 경우 첫번째 인수에 입력한 인덱스에 추가할 값을 추가합니다.
// arr5.splice(1,2) - 간단하게 생각을 하면 1번째 인덱스부터 시작을 하여 2번째 인덱스까지 제거를 한다.
// arr5.splice(1) - 하나만 입력을 할 경우 입력한 인덱스부터 전부제거 한다.

// 7. slice()
const arr6 = [1, 2, 3];

let sliceResult1 = arr6.slice(0, 1); // arr6[0]부터 arr[1] 이전까지 복사하여 반환을 합니다 // [1]
let sliceResult2 = arr6.slice(1, 2); // arr6[1]부터 arr[2] 이전까지 복사하여 반환을 합니다 // [2]

console.log(arr6); // [1,2,3]
//원본 배열을 변경하지 않습니다.
//배열의 첫번째 인수는 start, 두번째 인수는 end
//두번쨰 인수를 생략을 하면 전달 받은 첫번째 인수부터 끝까지 모든 요소를 복사한다.
//인수를 전부 생략을 하면 원본 배열의 복사본을 생성합니다.
//이 때 생성된 배열은 얇은 복사이다 중첩된 객체는 복사할 수 없다.

// 8. join()
// 설명 join 메서드는 배열안 모든 요소를 string으로 변환 후 인수로 전달 받은 문자열 즉 구분자로 연결한 문자열을 반환한다. 구분자는 생략이 가능하며 기본 구분자는 ","이다
const arr7 = [1, 2, 3, 4];

const joinResult = arr7.join(); // '1,2,3,4'
const joinResult2 = arr7.join(" "); // '1234' 사이에 빈문자열로 리턴을 한 후 문자열로 연갈한 문자열을 반환한다.
const joinResult24 = arr7.join(":"); // '1:2:3:4'
console.log(arr7); // [1,2,3,4]
//원본 배열의 변경이 없습니다.

// 9. reverse()
const arr8 = [1, 2, 3, 4];
arr8.reverse(); // [4,3,2,1]

console.log(arr8); // 4,3,2,1
//원본 배열을 직접 변경합니다.

// 10. fill()

const arr9 = [1, 2, 3, 4];
arr9.fill(0); // [0,0,0,0]
console.log(arr9); // 원본 배열을 직접 변경합니다.

// arr9.fill(0,1) // 배열의 첫번째 인덱스부터 끝까지 0으로 채운다 [1,0,0,0]
// arr9.fill(0,1,3) // 배열의 첫번째 인덱스부터 3이전까지 0으로 채운다 [1,0,0,4]

// 11. includes()
const arr10 = [1, 2, 3, 4];

arr10.includes(2)// true 배열에 2가 포함되어 있는지 확인한다.
arr10.includes(100)// false 당연히 없습니다깐
arr10.includes(1,1) // 첫번쨰 인수는 배열에 있는지 확인할 값 , 두번쨰 인수는 검사를 시작할 인덱스
arr10.includes(3,-1) // 이렇게 하면 배열의 길이 즉 length -1 의 인덱스 부터 검사를 시작한다.


// 12. flat()

const arr11 = [1,[2,3,4]];
const arr11Reslut = arr11.flat() // [1,2,3,4]

const arrExample1 = [1, 2, [3, 4, [5, 6]]];
arrExample1.flat();
// [1, 2, 3, 4, [5, 6]]

const arrExample2 = [1, 2, [3, 4, [5, 6]]];
arrExample2.flat(2);
// [1, 2, 3, 4, 5, 6]

const arrExample3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arrExample3.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//원본 배열은 수정하지 안ㄹ고 복사본을 생겅한다.

