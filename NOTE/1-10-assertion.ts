{
	/**
	 * Type Assertions 💩
	 */
	function jsStrFunc(): any {
		return 2;
	}
	const result = jsStrFunc();
	// result의 타입을 정확히 알고 있을때
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1)); // 😱

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers()!; // number[] 인걸 확신한다는 뜻 !
	numbers.push(2); // 😱
	// numbers!.push(2); // number[] 인걸 확신한다는 뜻 !

	const button = document.querySelector("class")!;
}
