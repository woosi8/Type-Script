{
	type PositionType = {
		x: number;
		y: number;
	};
	interface PositionInterface {
		x: number;
		y: number;
	}

	// object ★
	const obj1: PositionType = {
		x: 1,
		y: 1,
	};
	const obj2: PositionInterface = {
		x: 1,
		y: 1,
		z: 1,
	};

	// class ★
	class Pos1 implements PositionType {
		x: number;
		y: number;
	}
	class Pos2 implements PositionInterface {
		x: number;
		y: number;
	}

	// Extends
	interface ZPositionInterface extends PositionInterface {
		z: number;
	}
	type ZPositionType = PositionType & { z: number };

	// 😆 only interfaces can be merged.
	interface PositionInterface {
		z: number;
	}

	// type PositionType {
	// }

	// 데이터를 담을 목적이면 interface보다 type 을 사용한다
	// 😆 Type aliases can use computed properties
	type Person = {
		name: string;
		age: number;
	};
	type Name = Person["name"]; // string

	type NumberType = number;
	type Direction = "left" | "right";
}
