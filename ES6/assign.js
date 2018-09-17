/*=====================================================
첫 번째 파라미터에 열거 가능한 오브젝트를 지정한다.
지정하지 않거나 undefined, null을 지정하면 타입에러 발생.
두 번째 파라미터는 선택으로 열거 가능한 오브젝트를 지정해
콤마로 구분해 다수를 지정 가능하다. 두 번째 파라미터를 
지정하지 않으면 첫 번째 파라미터를 반환한다.

=> 쉽게말해 두 개의 Object 를 하나로 병합할 때 사용하며, 
첫 번째 Object 에 그 다음 Object(들)을 병합해 주는 것이다.
======================================================*/


// 01
try {
    let obj1 = Object.assign(null, {x:1});   // 지정된 첫 번째 파라미터가 null이므로 타입에러 발생
} catch (e) {
    console.log("null 지정 불가");           // error catch 되었으므로 실행됨. 
}
console.log(Object.assign(123));             // 파라미터에 123 지정. 오브젝트를 생성하고 123을 설정. 생성된 오브젝트를 반환함. 설정된 값은 valueOf()로 확인 가능.
console.log(Object.assign(456, 78));         // 파라미터에 456 지정. 위와 같지만, 생성한 오브젝트에 70을 복사하지 않고 반환함. 


// 02
console.log(Object.assign("ABC", {one : 1}));
console.log(Object.assign(Symbol("ABC"), {one : 1}));

try {
    let obj = Object.assign("ABC", "ONE");      // 두 파라미터 모두 문자열이면 에러 발생
} catch (e) {
    console.log("파라미터 모두 문자열 사용 불가");
}


// 03
let oneObj = {};
Object.assign(oneObj, "ABC", undefined, null);
console.log(oneObj); // { '0': 'A', '1': 'B', '2': 'C' } ==> 첫 번째 오브젝트에 두 번째부터의 오브젝트의 값을 복사한다. 단, undefined와 null은 복사하지 않는다.

let twoObj = {};
Object.assign(twoObj, {key1:undefined, key2:null});
console.log(twoObj); // { key1: undefined, key2: null } ==> 단, 이와 같이 두 번째 오브젝트에 Object 오브젝트를 작성하면, 오브젝트를 복사하므로, undefined와 null도 복사된다. 

// 즉, undefined와 null을 파라미터에 값으로 작성하면 복사되지 않지만, 오브젝트의 프로퍼티 값으로 작성하면 복사된다.


// 04 
let sports1 = {
    event: "축구",
    player: 11
};
let dup1 = sports1;         // sports 오브젝트를 dup 변수에 할당하면, dup 변수의 오브젝트와 sports 오브젝트의 프로퍼티가 연동된다.

sports1.player = 55;
console.log(dup1.player);  // 55 --1
dup1.event = "농구";
console.log(sports1.event);  // 농구 --2

// 즉, 1과 2 처럼 한 쪽의 프로퍼티 값을 수정하면 다른 쪽의 프로퍼티 값도 자동으로 변경된다. 이 경우, ES6에서는 assign으로 복사되지 않게 처리가 가능하다.


// 05 
let sports = {
    event: "축구",
    player: 11
};
let dup = Object.assign({}, sports);      // 두 번째 파라미터인 sports 오브젝트의 값을 첫 번째 파라미터인 빈 Object 오브젝트에 복사하고 반환된 첫 번째 파라미터를 dup에 할당한다.
console.log(dup.player);                  // 이 때, 할당된 dup는 sports 오브젝트와 같은 값이다.

dup.player = 33;
console.log(sports.player);  // 11 --1
sports.event = "수영";
console.log(dup.event);  // 축구 --2

/* 1, 2 처럼 Object.assign을 사용하면, 오브젝트의 프로퍼티는 복사하지만, 프로퍼티 값은 연동되지 않는다.
   단, 첫 번째 파라미터 오브젝트를 할당한 오브젝트는 연동되므로 주의할 것!*/