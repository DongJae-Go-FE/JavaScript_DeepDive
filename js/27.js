// 비동기 프로그래밍
//자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖는다. 이를 싱글 스레드라 하고
//시간이 걸리는 작업을 처리할 경우 블로킹 작업중단이 발생한다.

//현재 실행중인 태스크 종료할 때 까지 다음에 실행될 태스크가 대기하는 방식응 동기처리라고 한다.
// 동기 처리는 테스크륾 순서대로 하나씩 처리하므로 실행 순서가 보장된다는 장점이 있지만, 앞선 태스크들이 종료할 때 까지 블로킹 되는 단점이 있다.


// 현재 실행중인 태스크를 종료하지 않은 상태라 해도 다음 태스크를 바로 실행하는 방식을 비동기처리라고 한다.
// 비동기 처리 방식은 실행중인 태스크 종료가 안된 상태라도 다음 태스크를 바로 실행하고 블로킹이 발생하지 않지만 태스크 순서가 보장되지 않는 단점이 있다.
// 타이머 함수인 setTimeout, senInterval, HTTP 요청, 이벤트 핸들러는 비동기 처리 방식으로 동작한다.




// 자바스크립트는 싱글스레드지만 동시성을 지원하는 갓을 이벤트 루프이다.


// 콜스택 - 쉽게 생각하면 함수가 선언되고 호츨하는 곳 최상위에 실행되고 있는 태스크가 끝날 때까지 다른 어떤 태스크도 실행하지 않는다.
// 힙 - 객체가 저장되는 메모리 공간, 콜스택에서 참조하는 객체는 여기서 온다.
// 태스크큐 - setTimeout , setInterval , 이벤트 핸들러 같은 비동기 함수들이 일시적으로 보관되는 영역이다.
// 이벤트루프 = 콜스택이 비어 있고 태스크큐에 대기중인 함수가 있다면 이벤트 루프는 순차적으로 태스크큐에 보관중임 함수를 콜스택으로 이동시킨다.

//비동기 함수인 setTimeout의 콜백 함수는 태스크 큐에 퓨시되어 대기하다가 콜스택이 비게 되면 다시말해 전역 코드 및 명시적으로 호출된 함수가 종료하면 비로소 콜 스택에 푸시되어 실행된다.
//자바스크립트는 싱글 스레드 방식으로 동작한다. 이때 싱글 스레드 방식으로 동작하는 것은 브라우저가 아니라 브라우저에 내장된 자바스크립트 엔진이라는 것에 주의하기 바란다. 만약 모든 자바스크립트 코드가 
//자바스크립트 엔진에서 싱글 스레드로 방식으로 동작한다면 자바스크립트는 비동기로 동작할 수 없다. 즉 자바스크립트 엔진은 싱글 스레드로 동작하지만 브라우저는 멀티스레드로 동작한다.