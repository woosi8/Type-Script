{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// public
	// private
	// protected
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}
	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}
	// CoffeeMachine은 interface CoffeeMaker구현하는 곳,, 즉 CoffeeMaker에 규약된 모든 함수를 구현해야함
	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
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
			console.log("cleaning the machine...");
		}

		private graindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up...");
		}
		private extract(shots: number): CoffeeMachine {
			console.log(`Pulling ${shots} shots...`);
			return {
				shots,
				hasMilk: false,
			};
		}
		makeCoffee(shots: number): CoffeeCup {
			this.graindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
	maker.fillCoffeeBeans(32);
	maker.makeCoffee(2);

	const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
	// maker2.fillCoffeeBeans(32); interface CoffeeMaker에는 fillCoffeeBeans없기 떄문에
	// 즉 interface를 사용하면 내가 얼마만큼 행동을 약속 할건지 보장할건지 결정해줄수 있다는 뜻
	maker2.fillCoffeeBeans(32);
	maker2.makeCoffee(2);
	maker2.clean();

	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
		}
	}
	class ProBarista {
		constructor(private machine: CommercialCoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
			this.machine.fillCoffeeBeans(45);
			this.machine.clean();
		}
	}
	const amateur = new AmateurUser(maker);
	const pro = new ProBarista(maker);
	amateur.makeCoffee();
}
