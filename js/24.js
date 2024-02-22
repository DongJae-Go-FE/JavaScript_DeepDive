document.getElementById("id"); // 아이디 선택자 하나만 가능
document.getElementsByClassName("class")[0]; // 하나만 선택 가능 여러개 값을 반환하려면 배열이나 객체에 담아서 리턴
document.getElementsByTagName("div")[0]; //하나만 선택 가능  여러개 값을 반환하려면 배열이나 객체 담아서 리턴
document.querySelectorAll(".node") // #id , .class, 테그 이런식 선택한 거 모두를 노드리스트로 리턴



const nodeSelect = document.getElementById("me");

nodeSelect.parentNode // me라는 id의 부모 요소들 선택 - 요소노드, 택스트노드 포함
nodeSelect.parentElement // me라는 id의 부모 요소들 선택 - 요소 노드만 포함
nodeSelect.childNodes // me라는 id의 자식 요소들 선택 - 요소 노드, 텍스트 노드 포함
nodeSelect.children // me라는 id의 자식 요소들 선택 - 요소 노드만 포함 
nodeSelect.firstChild // me라는 id의 첫번째 자식 요소 - 요소 노드, 텍스트 노드 포함
nodeSelect.firstElementChild //me라는 id의 첫번째 자식 요소 선택 - 요소 노드만 포함
nodeSelect.lastChild // me라는 id의 마지막 자식 요소 선택 - 요소 노드, 텍스트 노드 포함
nodeSelect.lastElementChild // me라는 id의 마지막 자식 요소 선택 - 요소 노드만 포함
nodeSelect.previousSibling // me라는 id의 형제 요소의 중 이전에 있는 것을 반환 - 요소 노드, 텍스트 노드
nodeSelect.previousElementSibling // me라는 id의 형제 요소 중 id 이전에 있는 것을 반환 - 요소 노드
nodeSelect.nextSibling //me라는 id의 형제 요소 중 id 다음에 있는 것을 반환 - 요소 노드, 텍스트 노드
nodeSelect.nextElementSibling // me라는 id 형제 요소 중에 id 다음에 있는 것을 반환 - 요소 노드


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
//