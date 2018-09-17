/*==============================================
     ===    : 값과 값 타입을 모두 비교한다.
     ==     : 값만 비교한다.
Object.is() : 값과 값 타입을 모두 비교한다.
결과값은 모드 true/false이며 === 와 Object.is()는
0과 NaN의 비교 결과값이 다르다.
===============================================*/

console.log("1:", Object.is(1, "1"));                                   // 1: false (Number type, String type)
console.log("2:", Object.is(NaN, NaN), NaN === NaN);                    // 2: true false

console.log("3:", Object.is(0, -0), 0 === -0);                          // 3: false true
console.log("4:", Object.is(-0, 0), -0 === 0);                          // 4: false true

console.log("5:", Object.is(-0, -0), -0 === -0);                        // 5: true true
console.log("6:", Object.is(NaN, 0/0), NaN === 0/0);                    // 6: true false

console.log("7:", Object.is(null, null), null === null);                // 7: true true
console.log("8:", Object.is(undefined, null), undefined === null);      // 8: false false
