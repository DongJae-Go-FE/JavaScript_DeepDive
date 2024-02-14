//1. spread ... 문법
//es6에서 도입된 문법 ...은 하나로 뭉처 있는 여러 값들의 집합을 펼처서 개별적인 값들의 목록으로 만든다
//array, map, set, DOM 컬렉션에서 사용이 가능하지만
//일단 배열에서 많이 사용한다 생각을 해라



const spreadArr1 = [1, 2, 3];



// 아래처럼 배열을 복사를 한다.
// 왜? 배열을 복사를 하지?
// 배열의 값을 직접 수정하는 것은 위험하므로 사본을 만들어서 덮어서 사용한다고 생각을 해라
// 특히 리엑트에서 많이 씀
const spreadArr1Copy = [...spreadArr1];

const spreadArrSum1 = [1, 2, 3];
const spreadArrSum2 = [4, 5, 6];

// concat 처럼 배열을 합칠 수가 있다.
const spreadArrSumAll = [...spreadArrSum1, ...spreadArrSum2];

//2 destructuring 문법
//구조 분해 할당

const [a, b] = [1, 2];
console.log(a); //1
console.log(b); //2

// 이렇게 비구조화, 구조파괴를 하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다.
// 뭐가 좋을까? 배열과 같은 객제 리터럴에 필요한 값만 추출하여 변수에 할당할 때 유용

//특히 React에서 많이 쓴다
// const [state, setState] = useState()
