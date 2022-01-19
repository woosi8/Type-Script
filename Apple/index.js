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
// Union, any, unknown;
// let 회원들3: { merber1: string; merber2: string } = {};
var 회원들4 = [1, 2, "hi"];
var object = { a: "bye" };
var 이름2; //실드 해제, 다 들어오게 해준다
var 이름3; //any랑 같다만 조금더 안전하다.
var 나이2;
// 나이 + 1 안된다. union타입은 안된다.
