{
	/**
	 * Type Assertions π©
	 */
	function jsStrFunc(): any {
		return 2;
	}
	const result = jsStrFunc();
	// resultμ νμμ μ νν μκ³  μμλ
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1)); // π±

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers()!; // number[] μΈκ±Έ νμ νλ€λ λ» !
	numbers.push(2); // π±
	// numbers!.push(2); // number[] μΈκ±Έ νμ νλ€λ λ» !

	const button = document.querySelector("class")!;
}
