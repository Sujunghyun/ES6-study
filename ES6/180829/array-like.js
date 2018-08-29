/**********************************************************
 array-like는 배열은 아니지만 배열처럼 사용할 수 있는 Object를 
 의미함. 프로퍼티 키 값을 0부터 1씩 증가하면서 순차적으로 작성
 하고, length를 프로퍼티 키로 전체 프로퍼티 수를 작성하는 두 가지 
 조건 중 하나라도 만족하지 않으면 array-like가 아니다. 
***********************************************************/
 
let values = {0:"zero", 1:"one", 2:"two", length:3};

for (let key in values) {
    console.log(key, ':', values[key]);    
};

for (let k=0; k<=values.length; k++) {
    console.log(values[k]);    
}; // Object를 전개할 때 사용하는 위의 for-in문 보다는 배열처럼 for() 문을 이용하는 편이 좋다.