
/*******************************************************
 spread 파라미터는 호출하는 함수의 파라미터에 사용하며 배열을 
 엘리먼트 단위로 분리, 전개한다. 
********************************************************/

let one = [17, 21];
let two = [23, 27];
let obj = [51, one, 52, two];   // 1. spread 기능을 사용하지 않으면,
let spreadObj = [51, ...one, 52, ...two];  // 2. spread 기능을 사용하면, ex)...one 
console.log(obj);   // 1-1. [ 51, [ 17, 21 ], 52, [ 23, 27 ] ] 의 형태로 출력된다. 
console.log(obj.length);   // 4
console.log(spreadObj);  // [ 51, 17, 21, 52, 23, 27 ] 의 형태로, 즉 배열안의 배열이 사라지고 하나의 배열처럼 출력된다.
console.log(spreadObj.length);   // 6

let spreadObj2 = [..."ANIMAL"];  // 문자열에 spread를 사용하면
console.log(spreadObj2);  // [ 'A', 'N', 'I', 'M', 'A', 'L' ]의 형태로 출력된다.

const values = [10, 20, 30];
get(...values); // 파라미터에 spread를 사용하면 
function get(one, two, three) {  // 호출받는 함수의 파라미터에 이름을 작성하면 각 요소값이 파라미터 이름에 설정된다.
    console.log(one + two + three);
}