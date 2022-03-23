let 변수 = "손흥민";
let 문자 = `안녕하세요 ${변수} 입니다`;

function 해체분서기(문자들, 변수들, 변수들2) {
	console.log(문자들);
	console.log(문자들[1] + 변수들2 + 문자들[0] + 변수들); //글자 순서 바꾸기 tagged literal
	console.log(변수들);
	console.log(변수들2);
}

// 문자들을 Array화 해줌
해체분서기`안녕하세요 ${변수} 입니다`;
