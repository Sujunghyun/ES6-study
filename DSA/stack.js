/*=======================================
후입선출(LIFO))의 원리를 가지는 자료구조. 
가장 최근의 자료가 스택의 가장 위에 있고, 
가장 오래된 자료가 스택의 가장 아래에 있다.
ex) 쌓여있는 식판
========================================*/

function Stack() {

    let items = [];

    // 스택 꼭대기에 새 원소(들)를 추가한다.
    this.push = (element) => {
        items.push(element);
    };
    // 스택 꼭대기에 있는 원소를 반환하고 해당 원소를 스택에서 삭제한다.
    this.pop = () => {
        return items.pop();
    };
    // 스택 꼭대기에 있는 원소를 반환하되, 삭제하지는 않는다. 보통 스택을 참조하는 용도로 사용된다.
    this.peek = () => {
        return items[items.length-1];
    };
    // 스택에 원소가 하나도 없으면 true, 스택의 크기가 0보다 크면 false를 반환한다.
    this.isEmpty = () => {
        return items.length == 0;
    };
    // 내부 배열의 length를 반환한다.
    this.size = () => {
        return items.length;
    };
    // 스택의 모든 원소를 삭제한다.
    this.clear = () => {
        items = [];
    };
    // 헬퍼 함수. 콘솔창에서 확인용. 없어도 됨.
    this.print = () => {
        console.log(items.toString());        
    };
}

/* 예제 01 */

// let stack = new Stack();
// console.log(stack.isEmpty());

// stack.push(74);
// stack.push(99);
// stack.push(12);
// console.log(stack.peek());

// stack.push(567);
// console.log(stack.size());
// console.log(stack.isEmpty());

// stack.pop();
// stack.pop();
// console.log(stack.size());
// stack.print();


/* 예제 02 */
// 10진수를 2진수로 변환하는 메소드

// divideBy2 = (decNumber) => {
//     let remStack = new Stack(),
//         rem,
//         binaryString = '';
    
//     while (decNumber > 0) {                     // 나눗셈의 몫이 0이 아닐 때까지
//         rem = Math.floor(decNumber % 2);        // 나머지를 
//         remStack.push(rem);                     // 스택에 넣는다.
//         decNumber = Math.floor(decNumber / 2);  // decNumber는 스스로를 2로 나눈 몫으로 업데이트한다. JS의 경우, 여기서 정수 값을 얻기 위해서는 무조건 Math.floor()를 사용하자.
//     }

//     while (!remStack.isEmpty()) {                   // remStack이 텅비지 않으면 계속반복한다. 즉, remStack이 텅 빌 때까지 반복한다.
//         binaryString += remStack.pop().toString();  // remStack의 원소를 pop 메소드로 꺼내서 문자열로 변환, 연결한다.
//     }
//     return binaryString;    // 반환된 값은 2진수
// }
// console.log(divideBy2(233));   // 11101001
// console.log(divideBy2(750));   // 1011101110
// console.log(divideBy2(361));   // 101101001

/* 예제 03 */
/* 예제 02를 약간 수정해 2진법 이외의 진법으로 변환하는 메소드.
   10진수를 2로 나누는 대신, 제수를 인자로 받는다.*/

baseConverter = (decNumber2, base) => {
    let remStack2 = new Stack(),
        rem2,
        baseString = '',
        digits = '0123456789ABCDEF';                // 2/8/16진수로 표기할 때 사용하기 위한 문자들 0부터 15(F)까지 준비한다.

    while (decNumber2 > 0) {                            // 나눗셈의 몫이 0이 아닐 때까지
        rem2 = Math.floor(decNumber2 % base);           // 나머지를 
        remStack2.push(rem2);                           // 스택에 넣는다.
        decNumber2 = Math.floor(decNumber2 / base);     // decNumber2는 스스로를 base(몇 진수인지 ex 2/8/16))로 나눈 몫으로 업데이트한다.
    }

    while (!remStack2.isEmpty()) {                  // remStack2가 텅비지 않으면 계속반복한다. 즉, remStack2가 텅 빌 때까지 반복한다.
        baseString += digits[remStack2.pop()];      // remStack2의 원소를 pop 메소드로 꺼내서 문자열로 변환, 연결한다. 이 때 digits을 이용해 표현한다.
    }
    return baseString;
}
console.log(baseConverter(19999, 2));       // 10진수 10000을 2진수로 변환. 100111000011111
console.log(baseConverter(19999, 8));       // 10진수 10000을 8진수로 변환. 47037
console.log(baseConverter(19999, 16));      // 10진수 10000을 16진수로 변환. 4E1F

