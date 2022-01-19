// tsc -w
let 이름: string = "kim";
let 나이: number = 50;
let 결혼여부: boolean = true;
let 회원들: string[] = ["kim", "park"];
// let 회원들2: { merber1: string; merber2: string } = {
let 회원들2: { [key: string]: string } = {
	merber1: "kim",
	merber2: "park",
};

let proejct: { member: string[]; days: number; started: boolean } = {
	member: ["kim", "park"],
	days: 30,
	started: true,
};

//// // // // //  Union, any, unknown;

// let 회원들3: { merber1: string; merber2: string } = {};
let 회원들4: (number | string)[] = [1, 2, "hi"];
let object: { a: string | number } = { a: "bye" };
let 이름2: any; //실드 해제, 다 들어오게 해준다
let 이름3: unknown; //any랑 같다만 조금더 안전하다.
let 나이2: string | number;
// 나이 + 1 안된다. union타입은 안된다.

// // // // // // //  Function

function 함수2(x: number): number {
	return x * 2;
}
//리턴이 없는 경우 (리턴하면 에러가 나오게)
function 함수3(x: number): void {
	x * 2;
}
// 파라미터 없어도 되게 할떄는 ?
function 함수4(x?: number): void {
	x * 2;
}
//  위에랑 같다
//  function 함수4(x: number | undefined): void {
// 	x * 2;
// }

// Narrowing :Type이 아직 하나로 확정되지 않았을 경우
function 함수5(x: number | string) {
	if (typeof x === "string") {
		console.log(x + 3);
	} else {
		return x + 1;
	}
}

function 함수6(x: number | string) {
	let array: number[] = [];
	if (typeof x === "number") {
		array[0] = x;
	}
}
// assertion * 무슨 타입이 들어올지 확실할때만 쓴다
function 함수7(x: number | string) {
	let array: number[] = [];
	array[0] = x as number; //number type이 됨
}

console.log(함수2(2));

// type alias

type Animal = string | number | undefined;
type Animal2 = { name: string; age: number };

let 동물: Animal = "kim";
let 동물2: Animal2 = { name: "kim", age: 30 };
