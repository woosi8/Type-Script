interface Employee {
	pay(): void;
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log(`full time!!`);
	}
	workFullTime() {}
}

class PartTimeEmployee implements Employee {
	pay() {
		console.log(`part time!!`);
	}
	workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}

// generic으로 조건 extend를 해줘서 연결해준다 . 인자로 받는 세부 파라미터를 잃어버리지 않기 위해
// 받아온 파라미터를 그대로 리턴시켜줘서 파라미터를 잃어 버리지 않는다
// extends를 해줌으로써 타입의 조건을 미리 지정해준다
function pay<T extends Employee>(employee: T): T {
	employee.pay();
	return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
	name: "ellie",
	age: 20,
};

const obj2 = {
	animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}
