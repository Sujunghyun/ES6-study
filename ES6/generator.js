/*===== 01. declaration : function* 선언문 =====*/
/* function* 함수명(파리미터)의 형태를 제너레이터 선언문이라고 한다.
   처음 제너레이터 함수를 호출하면서 넘겨주는 파라미터 값이 
   함수의 파라미터에 작성한 파라미터명에 설정된다. */ 
console.log('========== 01. declaration ==========');   
function* sports(one, two) {
    console.log("함수 블록");
    yield one + two;            
};
console.log(typeof sports);     // generator 함수의 typeof는 function이다.

let genObj1 = sports(1, 2);     // 함수명(파라미터)로 호출하면 함수블록을 수행하지 않고 generator 오브젝트를 생성해 반환한다. 즉, 여기서 "함수 블록"은 출력되지 않는다.
console.log(typeof genObj1);    // 생성된 generator 오브젝트의 typeof는 object다. 이는 new 연산자로 생성한 인스턴스와 같은 타입이다.


/*===== 02. expression : function* 표현식 =====*/
console.log('========== 02. expression ==========');
let sports2 = function*(one, two) {     // 02-1. function*(one, two)는 무명 함수다. 생성한 함수를 변수에 할당해야 함수를 호출할 수 있다. 이 경우 sports2가 함수명이 된다.
    console.log("함수 블록");
    yield one + two;            // yield 키워드는 yield 오른쪽의 표현식을 평가하고, 평과 결과를 {value:xx, done:true||false} 형태로 반환한다.
};
/* 02-2. sports2(10, 20)를 호출하면 generator 오브젝트를 생성하고, 10, 20을 각각 파라미터 one, two에 설정한다. 
   이때 함수 블록의 코드를 실행하지 않고 생성한 generator 오브젝트를 반환한다. */
let genObj2 = sports2(10, 20);          
console.log(genObj2.next());    // 02-3. generator 오브젝트의 next()를 호출하면 sports2 generator 함수의 함수 블록을 실행한다.
// generator 함수는 new functionName(parameters, ...)의 형태가 아니라 functionName(parameter, ...) 형태로 호출하며, generator 오브젝트를 생성해 반환한다.


/*===== 03. constructor : generator 함수 생성 =====*/
/* 03-1. generator 함수 생성을 위한 생성자(constructor)를 구한다.
   무명 generator 함수를 생성해 Object.getPrototypeOf()의 파라미터 값으로 지정한다.
   그러면 무명 generator 함수의 prototype 오브젝트가 반환되는데, 
   여기에 constructor가 있으므로 이를 반환해 GenConst에 할당한다. 따라서 GenConst은 생성자 함수가 된다. */
console.log('========== 03. constructor ==========');   
let GenConst = Object.getPrototypeOf(function*(){}).constructor;    
let sports3 = new GenConst(     // 03-2. new 연산자로 GenConst 생성자를 호출해 generator 함수를 생성한다. 사용할 파라미터와 함수 블록 코드를 문자열로 작성한다.
    "one", "two",       // 파라미터
    "console.log('함수 블록'); yield one + two"     // 함수 블록 코드
);
let genObj3 = sports3(3, 4);    // 03-3. sports3(3, 4)로 호출하면 제너레이터 오브젝트를 생성해 반환한다.
console.log(genObj3.next());    // 03-4. next()를 호출해 함수 블록을 실행한다.


/*===== 04. yield : generator 함수 실행, 멈춤 =====*/
/* 구문 => [returnValue] = yield [expression];
   yield 키워드의 오른쪽 표현식은 선택으로, 표현식을 작성하면 이를 평가하고 그 결과를 반환한다.
   표현식을 작성하지 않으면 undefined를 반환한다. yield의 표현식 평가 결과는 왼쪽의 [returnValue]에 할당하지 않고
   generator 오브젝트의 next()를 호출하면 next() 파라미터 값이 [returnValue]에 설정된다. 
   next()로 generator 함수를 호출하면 yield 작성에 관계없이 {value:xx, done:true||false} 형태로 반환한다.
   이때 yield를 수행하면 done 값에 false가 설정되고, 수행하지 못하면 true가 설정된다. */
console.log('========== 04. yield ==========');   
function* sports4(one) {    
    let two = yield one;    // 04-3. 여기까지 실행됨.      04-5. 여기서 파라미터 값을 two 변수에 설정한다. 
    // 04-6. 파라미터 값이 지정되지 않았으므로 undefined가 two 변수에 설정된다. undefined + 10 = NaN. 결과값인 NaN을 변수에 설정하지 않는다.    04-8. 여기서 param 변수에 설정한다. 그리고 다음 코드를 실행
    let param = yield two + one;
    yield param + one;      // 04-9. param 변수 값이 41이고 one 변수 값이 10 
}
let generatorObj = sports4(10);     // 04-1. 호출. generator 오브젝트 생성 후 반환. 이 때 함수 블록을 실행하지 않음.

console.log(generatorObj.next());   // 04-2. next()를 호출하면, sports4 generator 함수 블록의 첫 줄부터 첫 번째 yield까지 수행한다. 즉, 다음 코드를 실행한다. 리턴값은 { value: 10, done: false }
console.log(generatorObj.next());   // 04-4. next()를 호출하면        리턴값은 { value: NaN, done: false }
console.log(generatorObj.next(41)); // 04-7. next(41)로 호출하면 파라미터 값 41을       리턴값은 { value: 51, done: false }


/*===== 05. next : yield 단위로 실행 =====*/
/* next()를 호출하면 yield를 기준으로 이전 yield의 다음 줄부터 yield까지 수행한다. 
   함수 내에 yield가 다수 작성돼있으면, yield 수만큼 next()를 작성해야 generator 함수 전체를 실행하게 된다.
   파라미터는 선택으로 generator 함수가 멈춘 yield의 왼쪽 변수에 설정한다. */
console.log('========== 05-1. next ==========');
let gen1 = function*(value) {       
    value += 30;
    yield ++value;      // 05-2-1. 여기까지 수행. 파라미터로 받은 3에 30을 더해 value에 할당. 이어서 ++value를 수행하고 value는 34가 됨.
    value += 7;
    yield --value;      // 05-3-1. 여기까지 수행. value 34에 7을 더해 40을 value에 할당. 이어서 --value를 수행하고 value는 40이 됨.
};
// 05-1. 호출. value에 3이 설정되며 generator 오브젝트를 생성 후 반환. 내부에 2개의 yield를 작성했으며, 이는 next()를 두 번 호출한다는 것을 의미. 두 번 호출하지 않고 도중에 종료가능.
let genObj4 = gen1(3);

console.log(genObj4.next());    // 05-2. next() 호출1. 
console.log(genObj4.next());    // 05-3. next() 호출2. yield 왼쪽의 변수에 파리미터 값을 설정하는데, 왼쪽에 변수가 없으므로 다음 코드를 실행
console.log(genObj4.next());    // 05-4. next() 호출3. generator 함수에 yield가 더 이상 없으므로 { value: undefined, done: true }가 반환된다.

console.log('========== 05-2. next ==========');
let gen2 = function*(value) {
    return ++ value;        // generator 함수에 yield를 작성하지 않고 return 문을 작성함. 호출하면 해당 코드가 실행된다.
};
let genObj5 = gen2(9);
console.log(genObj5.next()); // { value: 10, done: true } return문의 수행결과로 value는 변화하지만, yield를 수행하지는 않았기 때문에 done은 true 값을 가진다.

console.log('========== 05-3. next ==========');
let gen3 = function*(param) {   // yield 앞에 let과 var 변수를 작성함.
    let one = param + 1;
    yield one;              // 호출1 결과 여기까지 실행됨. 현재 param 값이 13이므로 one은 14가 할당됨. yield 반환값은 { value: 14, done: false }.
    var two = 2;
    yield one + two;        
    /* 호출2 결과 여기까지 실행됨. one은 let 변수로 앞에서 선언한 것으로, yield로 인해 함수를 빠져나왔다. 
       function 키워드 함수는 함수로 재진입하면 변수를 초기화하지만, generator 함수는 변수에 설정된 값을 유지한다!!!!!  반환값은 { value: 16, done: false } */
};
let genObj6 = gen3(13);         // 함수 호출. 오브젝트 생성.
console.log(genObj6.next());    // next() 호출1.
console.log(genObj6.next());    // next() 호출2.

console.log('========== 05-4. next ==========');
let one, two;
let gen4 = function*() {    // yield 우측에 표현식을 작성하지 않았을 때와 수행할 yield가 없을 때의 처리
    one = yield;            // 호출1 결과 해당 코드를 수행하며 { value: undefined, done: false } 를 반환한다. yield에 표현식을 작성하지 않았기 때문. yield는 실행했기 때문에 done 값은 false다.
    two = yield one + 10;   // 호출2 결과 바로 위 코드의 one 변수에 30을 설정하고 해당 코드를 실행해 { value: 40, done: false }를 반환하다. 정상적인 yield 실행 결과.
}
let genObj7 = gen4();

console.log(genObj7.next());    // next() 호출1.
console.log(genObj7.next(30));  // next() 호출2.
console.log(genObj7.next(18));  // next() 호출3. 호출 시 호출 2 결과 코드의 two 변수에 18을 설정한다. 하지만 수행할 yield가 앖으므로 { value: undefined, done: true } 를 반환한다. 
                                // 이 경우 two 변수에 값을 설정하는 것은 별 의미가 없지만, generator 함수 밖에 선언한 two 변수 값이 변경되기는 한다.
 console.log(two);  // 18
 
