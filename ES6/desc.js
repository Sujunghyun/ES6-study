// get 속성은 getter(객체의 프로퍼티를 가져오는 함수) 기능을 제공하고, set 속성은 setter(객체의 프로퍼티를 설정하는 함수) 기능을 제공한다.

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

// getter
let obj1 = {
    value: 123,                 // 3-3. obj 오브젝트에 value 프로퍼티가 있으므로 값을 반환한다. 
    get getValue() {            // 3-1. ES6에서 getter는 함수 이름 앞에 명시적으로 get을 작성한다.
        return this.value
    }
};
console.log(obj1.getValue);     // 3-2. getValue가 getter이므로 함수로 호출된다. getter에서 this는 obj.getValue의 obj 오브젝트를 참조한다.

// setter
let obj2 = {
    set setValue(value) {       // 4-1. ES6에서 setter는 함수 이름 앞에 명시적으로 set을 작성한다.
        this.value = value;     // 4-3. this는 obj.setValue의 obj 오브젝트를 참조한다.
    }
};
obj2.setValue = 456;            // 4-2. obj 오브젝트의 setValue를 프로퍼티 키로 해 값(여기서는 456)을 할당하는 형태로 작성한다.
console.log(obj2.value);
