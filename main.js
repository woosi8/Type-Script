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

const getMovies = async () => {
	try {
		const movies = await axios
			.get("https://dapi.kakao.com/v2/search/cafe", {
				data: { query: "아이유" },
				headers: { Authorization: "KakaoAK ed16505f52b3700ce7ba53be5bd618e5" },
			})
			.then((response) => {
				console.log(response);
			});
	} catch {
		console.log("error");
	} finally {
		console.log("done");
	}
};

document.querySelector("#버튼").addEventListener("click", function () {
	setTimeout(() => {
		console.log(this.innerHTML);
		getMovies();
	}, 1000);
});
