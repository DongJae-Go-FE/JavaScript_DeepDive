new Array() // []

new Array(1,2,3) // [1,2,3]
// 전달된 인수가 2개 이상이면 인수를 요소로 가지는 배열을 만든다.

new Array({}) //[{}]
// 전달된 인수가 숫자가 아니면 요소가 하나라더라도 배열을 만든다.

Array.of(1) //[1]
// 전달된 인수가 하나고 숫자더라면 배열을 만든다.


//배열 메서드
//배열에는 원본(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경한ㄴ, 메서드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 변환하는 메서드가 있다.
