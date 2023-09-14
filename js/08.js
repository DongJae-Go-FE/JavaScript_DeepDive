var person = {
    name : "kar",//프로퍼티
    age: 20,// 왼쪽 프로퍼티 키, 오른쪽 프로퍼티 값
    increase : function (){  // 여기는 전체 매서드
        this.age++;
    }
}

var person2 = {
    name: "Hwang",
    sayLove: function (){
        console.log("love k");
    }
}

console.log(typeof person2); // object


var person3 = {
    kar : "Hwang"
    // 이런식으로 작성하는 게 정상
}

// 객체에 프로퍼티에 접근하기
person3.kar;
person3['kar'];

person.asd; // undefined

var love ={
    kar: "luv",
    Hwang: "luv",
    state : "",
}

//프로퍼티 값 갱신

love.state = "good";

//프로퍼티 동적 생성
love.couple = "best";

//프로퍼티 축약 콘스트럭처 생각해