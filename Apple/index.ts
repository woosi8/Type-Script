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

// const변수는 등호로 재할당만 막는 역할이지 const로 담은 object수정은 자유롭게 가능
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

type Girlfriend = {
	// readonly name: string; //수정 불가
	name?: string; //수정 불가 ?는 string | undefined
};

const 여친: Girlfriend = {
	name: "카오",
};
// 여친.name = "유리";

type Name22 = string;
type Age22 = number;

type Person = Name | Age22;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; // { x: number ,y: number }

let position: NewType = { x: 10, y: 20 };

//////////// Literal Types

let 이름7: 123;

이름7 = 123;

function 리턴제한(a: "hello"): 1 | 0 {
	return 1;
}
function 대결(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
	return ["가위"];
}

대결("가위");

// var 자료 = {
// 	name: "kim",
// };
//해결
var 자료 = {
	name: "kim",
} as const; // 타입지정을 literal type지정 알아서 해주셈 , 즉 name의 타입을 kim타입으로 해주라 , readonly 기능도 포함

//여기서 kim은 자료형이 아닌 타입이다
function 내함수(a: "kim") {}
// 내함수(자료.name) 에러 : 자료.name은 string 타입이니깐

내함수(자료.name);

//////////////////// methods type alias
// 함수를 만들떄 타입지정해주기
type 함수타입 = (a: string) => number;
let 함수표현식: 함수타입 = function (a) {
	return 10;
};

type Member1 = {
	name: string;
	plusOne: (x: number) => number;
	changeName: () => void;
};

let 회원정보: Member1 = {
	name: "kim",
	plusOne(a) {
		return a + 1;
	},
	changeName: () => {},
};
회원정보.plusOne(1);

//문자 제거
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
	let result = x.replace(/^0+/, "");
	return result;
};
function removeDash(x: string): number {
	let result = x.replace(/-/g, "");
	return parseFloat(result);
}
// 첫째는 문자, 둘째는 함수, 셋째는 함수
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
	let result = func1(a);
	let result2 = func2(result);
	console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash); //1011112222 출력잘됨

////////// TypeScript Dom 조작
// 1.
let 제목 = document.querySelector("#title");
// if (제목 != null) {
// 	제목.innerHTML = "반가워요";
// }

// 2.
if (제목 instanceof Element) {
	//instanceof class명 : 제목이 Element의 자식 instace인가?
	제목.innerHTML = "반가워요";
}

// 3.
// let 제목3 = document.querySelector("#title") as Element; // 100프로 아니면 잘 안씀
// optional chaining? innerHtml 이 있는가?
if (제목?.innerHTML) {
	제목.innerHTML = "반가워요";
} //없으면 undefined return

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
	//Element타입 : HTMLHeadingElement,HTMLButtonElement
	링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});
//버튼? 안에 addEventListener가 있으면 실행해주고 아니면 undefined를 리턴해줘

class Person2 {
	data: number = 0; //필드값
}
let 사람1 = new Person2();
사람1.data;

class Person3 {
	name: string; // TypeScript constructor this다른점 : 쓸떄는 항상 미리 지정해줘야 한다
	constructor(data: string) {
		this.name = data;
	}
	// prototype 함수 추가
	함수(a: string): string {
		console.log("ㅗㅑ");
		return a;
	}
}
// 함수추가
// Person3.prototype.함수 = function name(params: type) {};

let 사람2 = new Person3("data");
사람2.함수("안녕");

//////////////////interface 장점 : extends로 복사가능
// interface는 중복선언 가능, type & 은 중복선언 불가능 - 외부에서 많이 사용될거 같으면 interface를 선호한다
// type Square = { color: string; width: number };
interface Square {
	color: string;
	width: number;
}
let 네모: Square = { color: "red", width: 100 };

interface Student {
	name: string;
}
interface Teacher extends Student {
	age: number;
}

type Animal3 = { name: string };
type Cat = { age: number } & Animal3; //& 여기선 복사가 아니라 두탑입을 전부 만족하는 타입이라는 뜻 (단점: key값 중복값 잡는게 만들떄가 아니라 만든후에 사용할때 알람을 띄운다)

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 33 };

// /////////////////////////////rest parameter

// destructuring
// let 변수1 = ["안녕"];
// let 변수2 = [100];
let [변수1, 변수2] = ["안녕", 100];
// , 오브젝트 destructuring
// let { student:student, age:age } = { student: true, age: 20 };
let { student, age } = { student: true, age: 20 };
// let obj= {student:true,age:20}

let 오브젝트 = { student: true, age: 20 };
function 함수33({ student, age }: { student: boolean; age: number }) {
	console.log(student, age);
}
함수33({ student: true, age: 20 });

type UserType = {
	user: string;
	comment: number[];
	admin: boolean;
};

function 함수9({ user, comment, admin }: UserType): void {
	console.log(user, comment, admin);
}
함수9({ user: "kim", comment: [3, 5, 4], admin: false });

function 최댓값(...x: number[]) {
	let result = 0;
	x.forEach((i) => {
		if (result < i) {
			result = i;
		}
	});
	return result;
}
console.log(최댓값(4, 6, 3, 2));
