{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};
	const BEANS_GRAMM_PER_SHOT: number = 7;
	let coffeeBeans: number = 0;
	function makeCoffee(shots: number): CoffeeCup {
		if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
			throw new Error("Note enough coffee beans!");
		}
		coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩 줄이기
		return {
			shots,
			// shots: shots,
			hasMilk: false,
		};
	}
	coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
	const coffee = makeCoffee(2);
	console.log(coffee);
}
