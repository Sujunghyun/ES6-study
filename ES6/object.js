
// ES6에서는 key값이 같은 프로퍼티를 두 개 작성했을 때 나중에 작성된 값으로 대체된다.
let sameKey = {one : 1, one : 2};
console.log(sameKey);

// {1, 2}가 아니라 { one: 1, two: 2 }의 형태로 작성한 변수명이 속성명이 된다.
let one = 1, two = 2;
let values = {one, two};
console.log(values);

// Object에 function 작성 시 :(콜론)과 function 키워드를 작성하지 않아도 된다.

/*=========ES5
let obj = {
    getTotal: function(param) {
        return param + 123;
    }
}
=============*/

//====ES6====//
let obj = {
    getTotal(param) {
        return param + 123;
    }
};
console.log(obj.getTotal(400));  // 523
