let sports = () => {
    try {
        let args = arguments;
    } catch (error) {
        console.log("사용 불가");
    }
}
sports(1,2);

// ES6에서는 arguments가 존재하지 않는다. 에러가 발생하므로 rest 파라미터를 사용할 것.