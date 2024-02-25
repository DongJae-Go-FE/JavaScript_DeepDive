document.getElementById("id"); // 아이디 선택자 하나만 가능
document.getElementsByClassName("class")[0]; // 하나만 선택 가능 여러개 값을 반환하려면 배열이나 객체에 담아서 리턴
document.getElementsByTagName("div")[0]; //하나만 선택 가능  여러개 값을 반환하려면 배열이나 객체 담아서 리턴
document.querySelectorAll(".node"); // #id , .class, 테그 이런식 선택한 거 모두를 노드리스트로 리턴

const nodeSelect = document.getElementById("me");

nodeSelect.parentNode; // me라는 id의 부모 요소들 선택 - 요소노드, 택스트노드 포함
nodeSelect.parentElement; // me라는 id의 부모 요소들 선택 - 요소 노드만 포함
nodeSelect.childNodes; // me라는 id의 자식 요소들 선택 - 요소 노드, 텍스트 노드 포함
nodeSelect.children; // me라는 id의 자식 요소들 선택 - 요소 노드만 포함
nodeSelect.firstChild; // me라는 id의 첫번째 자식 요소 - 요소 노드, 텍스트 노드 포함
nodeSelect.firstElementChild; //me라는 id의 첫번째 자식 요소 선택 - 요소 노드만 포함
nodeSelect.lastChild; // me라는 id의 마지막 자식 요소 선택 - 요소 노드, 텍스트 노드 포함
nodeSelect.lastElementChild; // me라는 id의 마지막 자식 요소 선택 - 요소 노드만 포함
nodeSelect.previousSibling; // me라는 id의 형제 요소의 중 이전에 있는 것을 반환 - 요소 노드, 텍스트 노드
nodeSelect.previousElementSibling; // me라는 id의 형제 요소 중 id 이전에 있는 것을 반환 - 요소 노드
nodeSelect.nextSibling; //me라는 id의 형제 요소 중 id 다음에 있는 것을 반환 - 요소 노드, 텍스트 노드
nodeSelect.nextElementSibling; // me라는 id 형제 요소 중에 id 다음에 있는 것을 반환 - 요소 노드

// innerHTML
const text = document.getElementById("text");

text.innerHTML = "텍스트 바꾸기";
// 요소의 텍스트를 바꾸는 DOM조작 api
// 하지만 안쓰는 것이 좋다.
// 크로스 사이트 스크립트 공격에 취약 innerHTML 안에 자바스크립트 코드를 삽입하여 파싱 중에 실행을 하게 해 파싱을 멈추게 하는등 보안에 취약하다
// eval이랑 비슷하게 생각하면 편하다 사용자가 악의적으로 자바스크립트 코드를 추가하면 그 코드가 그대로 실행이 된다.

text.innerHTML = `<script>alert(document.cookie)</script>`;
//이런식으로 파싱을 멈추게 하는 것도 가능

//그래서 추가적으로 알아두면 좋은 것이 새니티제이션
//DOMPurify라는 라이브러리를 설치해 이런식으로 방지하는 것이 좋다
//아래 코드를 직접 구현하는 것도 좋지만 그냥 라이브러리 설치해서 써라
//DOMPurify.sanitize('<img src="x" onerror-"alert(document.cookie)">')

//insertADjacentHTML 매서드
//기존 요소를 제거하지 않고 위치를 지정해서 새로 HTML 요소를 추가한다

const foo = document.getElementById("foo");

foo.insertAdjacentHTML("beforeend", `<p>삽입</p>`); // 요소 밖 이전 왼쪽 마진이라 생각
foo.insertAdjacentHTML("beforebegin", `<p>삽입</p>`); // 요소 안 이전 왼쪽 패딩이라 생각
foo.insertAdjacentHTML("afterend", `<p>삽입</p>`); // 요소 밖 오른쪽 마진이라 생각
foo.insertAdjacentHTML("afterbegin", `<p>삽입</p>`); // 요소 안 오른쪽 패딩이라 생각

// createElement
//새로운 노드요소를 생성
const li = document.createElement("li");

//새로 생성한 요소를 삽입

const ul = document.createElement("ul");
ul.appendChild(li); // ul이라는 노드에 마지막 자식 요소로 삽입 appendChild

//지정한 위치에 노드 삽입
// insertBefore(newNode,childNode)
ul.insertBefore(li, ul.lastElementChild);

//노드 복사

const cloneNodeConst = li.cloneNode();

//attributes 프로퍼티
//HTML 문서의 구송 요소는 여러개의 어트리뷰트를 가지르 수 있다 input value 같은 거
//HTML 어트리뷰트의 역활은 HTML의 초기 상태를 지정하는 것이다, 죽 HTML 어튜리 뷰트 값은 HTML 요소의 초기상태를 의미하며 이는 변하지 않는다.
//요소 노드는 상태를 가지고 있고
// 초기값은 어트리뷰트로 관리를 하고
// 요소 노드의 변하는 값은 DOM 프로퍼티가 관리를 한다.
// HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태는 어트리뷰트 노드에서 관리한다.
// 사용자가 입력한 최신 상태는 HTML 어트리뷰트에 대응하는 요소 노드의 DOM 프로퍼티과 관리한다. DOM 프로퍼티는 사용자의 입력에 의한 상태 변화에 반응하여 언제나 최신상태를 유지한다.


//class 조작은 classList를 붙여야 한다.

const classClass = document.getElementsByClassName("class")[0];

classClass.classList.add("on") // 클래스 추가
classClass.classList.remove("remove") // 클래스 제거
classClass.classList.item(0) //요소에 있는 클래스에 첫번째 꺼 
// <div class="red boo"></div> 위에껀 red 리턴
classClass.classList.contains("class") // 인자 안에 클래스가 있으면 true, 없으면 false
classClass.classList.toggle("on") // 인자 안에 클래스를 추가 했다가 제거
classClass.classList.replace("기존에 있던거", "기존에 있던 거 바꿀거") // 첫번째 인자는 기존에 있던 걸 제고하고 있던 거를 바꾼다.