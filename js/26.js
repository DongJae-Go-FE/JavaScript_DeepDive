//타이머

//호출 스케쥴링
//함수를 명시적으로 호출하면 즉시 실행하지만 만약 함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예얄하려면 타이머 함수를 사용한다. 이를 호출 스케쥴링이다.

//구조
const timeoutId = setTimeout(func, 1000, param1, param2);

//func - 타이머가 만료된 뒤 호출될 콜백함수
//1000 - 시간
// 호출 스케쥴링 뒤 함수에 전달해야 할 인수가 존재하는 경우 세번째 인수로 이후로 전달한다.

//setTimeout - 몇초 뒤
//clearTimeout - 타이머 취소

const time = setTimeout(() => {
  console.log("시간");
}, 1000);

clearTimeout(time);

//setInterval - 초마다 반복
//clearInterval - 타이머 취소
const interval = setInterval(() => {
  console.log("반복");
}, 2000);
clearInterval(interval);
