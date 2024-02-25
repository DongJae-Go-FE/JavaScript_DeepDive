//이벤트
//만약 에플리케이션이 특정 타입의 이벤트에 대해 반응하여 어떤 일을 하고 싶다면 해당하는 타입의 이벤트가 발생했을 때 호출된 함수를 브라우저에게 알려 호출을 위임하다. 이때 이벤크가 발생했을 때 호출될 함수를 이벤트 핸들러라 하고 이벤트가 발생했을 때 브라우저에게 이벤트
//핸들어의 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다.

//이와 같이 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐프로그래밍이라 한다.

//이벤트 타입

//마우스 이벤트
//click - 마우스 버튼을 클릭했을 때
//dbclick - 마우스 버튼을 두번 클릭했을 때
//mousedown - 마우스 버튼을 눌렀을 때
//mouseup - 누르고 있던 마우스 버튼을 땠을 때
//mousemove - 마우스 커서를 움직였을 때
//mouseenter - 마우스 커서를 HTML 요소 안으로 이동 했을 때! 버블링 되지 않는다.
//mouseover - 마우스 커서를 HTML 요소 안으로 이동 했을 때! 버블링된다,
//mouseleave - 마우스 커서를 HTML 요소 밖으로 이동했을 때! 버블링되지 않는다.
//mouseout - 마우스 커서를 HTML 요소 밖으롷 이동 했을 때 버블링된다.

//키보드 이벤트
//keydown 모든키를 눌렀을 때 발생 숫자 특수문자 엔터 키를 눌렀을 때 연속적으로 발생 그외는 한번만 발생
//keyup - 누르고 있던 키를 놓았을 한번만 발생한다.

//포커스 이벤트
//focus - HTML 요소가 포커스를 받았을 때! 버블링 되지 않는다.
//blur - HTML 요소가 포커스를 잃었을 때 ! 버블링 되지 않는다.
//focusin - HTML 요소가 포커스를 받았을 때 ! 버블링 된다
//focusout - HTML 요소가 포커스를 잃었을 때 ! 버블링 된다.

//폼 이벹트
//submit - form 요소 내의 input, select에서 엔터키를 눌렀을 때(textarea 제외), form 안에소 submit 버튼 눌었을 때, 무조건 form 안에서

//값 변경 이벤트
// input - input ,select, textarea 요소 안에 값이 입력되었을때
// chang - input ,select, textarea 요소 안에 값이 변경했을 때

//DOM 뮤테이션 이벤트
//DOMContentLoaded - HTML 문서가 파싱하여 DOM 생성이 완료 했을 때

//뷰 이벤트
//resize - 브라우저 화면이 리사이즈 될 대
//scroll - 브라우저 화면이 스크롤 될 때

//리소스 이벤트
//load - DOMContentLoaded 끝나고 모든 리소스(이미지, 폰트) 로딩이 완료 했을 때,
//unload - 리소스가 언로드 될 때
//abort - 리소스 로딩이 중단되었을 때
//error - 리소스 로딩이 실패했을 때

//이벤트 핸들러 등록법

//<button id="button" onClick={함수명}>버튼</button>

const btn = document.getElementById("button");
btn.onclick = function () {
  console.log("클릭하면");
};
//이방식

//이벤트 핸들러 방식
//EventTarger.addEventListner("타입", 핸들러, 캡처 사용여부)
btn.addEventListener(
  "click",
  () => {
    console.log("클릭하면");
  },
  false
);

//이벤트 핸들러 제거
btn.removeEventListener("click", () => {
  console.log("제거");
});
// 전달한 인수가 동일해야한다.!!!!
