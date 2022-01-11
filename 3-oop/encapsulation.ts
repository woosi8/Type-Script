{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// public
	// private
	// protected : 상속할때 외부에서 접근할수 없지만 이 클래스를 상속한 자식 클래스는 접근 가능하도록 설정 가능하다
	class CoffeeMaker {
		// BEANS_GRAMM_PER_SHOT: number = 7; 변하지 않는 데이터 (맴버변수) : 오브젝트를 만들때마다 중복적으로 생성되므로 메모리 낭비
		private static BEANS_GRAMM_PER_SHOT: number = 7; //class level : 클래스와 연결이 되어있기 떄문에 오브젝트 마다 만들어지거나 생성되지 않음
		// 사용할때는 this를 쓰지않고 class이름을 붙여준다
		private coffeeBeans: number = 0; //instance (object) level : 오브젝트 마다 새로 만들어야 하는 데이터 (맴버변수)

		//constructor에 private을 만들어서 아래 makeMachin 메쏘드를 사용하도록 권장할수 있다
		private constructor(coffeBeans: number) {
			//                      32
			this.coffeeBeans = coffeBeans;
		}

		// 클래스 내부에 어떠한 속성값도 필요하지 않는 오브젝트 만들때 static
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		// 외부에서 내부데이터로 접근하게 해주기
		fillCoffeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += beans;
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
	// const maker = new CoffeeMaker(32); //new는 이 클래스에 instance를 만든다는 뜻 (생성자 호출)
	const maker = CoffeeMaker.makeMachine(32); //new는 이 클래스에 instance를 만든다는 뜻 (생성자 호출)
	console.log(maker);
	maker.fillCoffeBeans(32);
	const maker3 = CoffeeMaker.makeMachine(3);
	console.log(maker3);
	class User {
		// firstName: string;
		// lastName: string;
		// fullName: string;
		//getter 써준이유 :
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}

		// internalAge를 private으로 설정하여 internalAge접근은 안되지만 get,set age를 통해서 지정할수 있따.
		private internalAge = 4;
		get age(): number {
			return this.internalAge;
		}
		set age(num: number) {
			if (num < 0) {
				throw new Error("error!");
			}
			this.internalAge = num;
		}

		// 생성자에 접근 제어자(private)를 설정하면 this를 안해줘도 된다.
		constructor(private firstName: string, public lastName: string) {
			// this.firstName = firstName;
			// this.lastName = lastName;
			// this.fullName = `${firstName} ${lastName}`;
		}
	}
	const user = new User("Steve", "jobs");
	// user.firstName = "ellie";
	user.age = 6;
	console.log(user.fullName);
}
