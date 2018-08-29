const obj = {language:"ko"};

try {
    obj = {};
} catch (e) {
    console.log("const 재할당 불가");    
}
obj.language = "en";
console.log(obj.language);
