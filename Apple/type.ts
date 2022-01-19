// termianl : tsc -w
let 배열: string[] = ["kim", "park"];
let 오브: { name: string } = { name: "kim" };
// let 오브: { name?: string } = { name: "kim" }; ?옵션
type Name = string | number;
// let 이름: Name = "kim";
// let 이름: string | number = "kim";

function 함수(x: number): number {
	return x * 2;
}

함수(123);

type Member = [number, boolean];

let john: Member = [3, false];

type MemberOb = { [key: string]: string }; //글자로된 모든 object 속성의 타입은 string이다

let johndo: MemberOb = { name: "kim" };

class User {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
