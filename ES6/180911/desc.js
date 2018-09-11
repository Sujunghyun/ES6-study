// get 속성은 getter 기능을 제공하고, set 속성은 setter 기능을 제공한다.

//===============  ES5  ===============//

// getter
var getObj = {};
Object.defineProperty(getObj, "fruits", {  // fruits가 프로퍼티 이름. getObj 오브젝트에서 fruits 프로퍼티 작성 여부를 체크하고, 
    get: function() {                      // 작성되어 있으면 get 속성 존재 여부를 체크한다. 존재하면 get 속성 값인 함수를 실행한다. => 이것이 getter!!!
        return "사과";
    }
});
console.log(getObj.fruits);                // getter는 getObj.fruits()처럼 함수를 호출하는 형태가 아니라 getObj.fruits처럼 함수 이름만 작성한다.

// setter
var setObj = {};
Object.defineProperty(setObj, "item", {    // 2-2. item 프로퍼티가 작성되어 있으면, set 속성의 존재여부를 체크한다. 
    set: function(param) {                 // 2-3. set 속성이 존재하면 속성 값인 함수를 실행한다. 이때 2-1의 "배구"를 실행하는 함수의 프로퍼티로 넘겨준다. => 이것이 setter!!!
        this.sports = param;               // 2-4. setter가 호출되면 this.sports 에서 this가 setObj 오브젝트를 참조한다. param 으로 넘겨받은 "배구"를 setObj 오브젝트의 sports 프로퍼티에 설정.
    }
});
setObj.item = "배구";                      // 2-1. 엔진이 이 코드를 해석하면, setObj 오브젝트에서 item 프로퍼티 작성 여부를 체크한다.
console.log(setObj.sports);                // 2-5. setObj.sports는 getter. setObj 오브젝트에 getter를 작성하지 않았지만, 디폴트 getter가 호출되어 sports 프로퍼티 값을 반환해준다.

//===============  ES6  ===============//