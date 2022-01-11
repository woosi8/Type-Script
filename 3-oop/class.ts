{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};
	class CoffeeMaker {
		// BEANS_GRAMM_PER_SHOT: number = 7; 변하지 않는 데이터 (맴버변수) : 오브젝트를 만들때마다 중복적으로 생성되므로 메모리 낭비
		static BEANS_GRAMM_PER_SHOT: number = 7; //class level : 클래스와 연결이 되어있기 떄문에 오브젝트 마다 만들어지거나 생성되지 않음
		// 사용할때는 this를 쓰지않고 class이름을 붙여준다
		coffeeBeans: number = 0; //instance (object) level : 오브젝트 마다 새로 만들어야 하는 데이터 (맴버변수)

		constructor(coffeBeans: number) {
			//                      32
			this.coffeeBeans = coffeBeans;
		}

		// 클래스 내부에 어떠한 속성값도 필요안할때 static
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Note enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩 줄이기
			return {
				shots,
				// shots: shots,
				hasMilk: false,
			};
		}
	}
	const maker = new CoffeeMaker(32); //new는 이 클래스에 instance를 만든다는 뜻 (생성자 호출)
	console.log(maker);
	const maker3 = CoffeeMaker.makeMachine(3);
	console.log(maker3);
}
