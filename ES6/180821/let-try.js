let sports = "축구";

// try문은 별도의 스코프를 갖는다.

try {
    let sports = "농구";
    console.log(sports);   
} catch (e) {
    console.log(sports);   // try에서 실행됨. catch 문은 try 블록 스코프에 속함.
};
console.log(sports);