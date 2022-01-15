{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		public static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		public coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
			private sugar: SugarSource,
			private milk: MilkFrother,
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += beans;
		}

		clean() {
			console.log("cleaning the machine...🧼");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... 🔥");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... ☕️`);
			return {
				shots,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	//싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup {
		  console.log(`Steaming some milk🥛...`);
		  return {
			...cup,
			hasMilk: true,
		  };
		}
	  }

	  class FancyMilkSteamer implements MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup {
		  console.log(`Fancy!!!! Steaming some milk🥛...`);
		  return {
			...cup,
			hasMilk: true,
		  };
		}
	  }
	  
	//설탕 제조기
	class AutomaticSugarMixer {
		private getSugar() {
			console.log("Getting some sugar from jar");
		}
		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}






	const machines: CoffeeMaker[] = [
		new CoffeeMachine(16),
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
		new CoffeeMachine(16),
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
	];

	machines.forEach((machine) => {
		console.log("---------------------------");
		machine.makeCoffee(1);
	});
}
