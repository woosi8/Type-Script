console.log(this);

function simpleFunc() {
	console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
	count = 0;
	increase = () => {
		// console.log(this);
	};
}
const counter = new Counter();
counter.increase();
// const ,let으로 선언한 변수는 window에 없이 때문에 undefined가 된다
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
