// tsc -w
var 이름 = "kim";
var 나이 = 50;
var 결혼여부 = true;
var 회원들 = ["kim", "park"];
// let 회원들2: { merber1: string; merber2: string } = {
var 회원들2 = {
    merber1: "kim",
    merber2: "park",
};
var proejct = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
//// // // // //  Union, any, unknown;
// let 회원들3: { merber1: string; merber2: string } = {};
var 회원들4 = [1, 2, "hi"];
var object = { a: "bye" };
var 이름2; //실드 해제, 다 들어오게 해준다
var 이름3; //any랑 같다만 조금더 안전하다.
var 나이2;
// 나이 + 1 안된다. union타입은 안된다.
// // // // // // //  Function
function 함수2(x) {
    return x * 2;
}
//리턴이 없는 경우 (리턴하면 에러가 나오게)
function 함수3(x) {
    x * 2;
}
// 파라미터 없어도 되게 할떄는 ?
function 함수4(x) {
    x * 2;
}
//  위에랑 같다
//  function 함수4(x: number | undefined): void {
// 	x * 2;
// }
// Narrowing :Type이 아직 하나로 확정되지 않았을 경우
function 함수5(x) {
    if (typeof x === "string") {
        console.log(x + 3);
    }
    else {
        return x + 1;
    }
}
function 함수6(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
// assertion * 무슨 타입이 들어올지 확실할때만 쓴다
function 함수7(x) {
    var array = [];
    array[0] = x; //number type이 됨
}
console.log(함수2(2));
var 동물 = "kim";
var 동물2 = { name: "kim", age: 30 };
// const변수는 등호로 재할당만 막는 역할이지 const로 담은 object수정은 자유롭게 가능
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
var 여친 = {
    name: "카오",
};
var position = { x: 10, y: 20 };
