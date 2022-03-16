console.log("HelloWorld1~~~111222");
var Car = /** @class */ (function () {
	function Car() {
		this.engine = 1;
	}
	return Car;
})();

let 자료 = {
	data: [1, 2, 3, 4, 5],
};
자료.전부더하기 = function () {
	let 합 = 0;
	this.data.forEach(function (a) {
		합 = 합 + a;
	});
	return 합;
};

console.log(자료.전부더하기());
자료.전부더하기();

const btn = document.querySelector("#버튼");
console.log(btn);

document.querySelector("#버튼").addEventListener("click", function () {
	setTimeout(() => {
		console.log(this.innerHTML);
	}, 1000);
});
