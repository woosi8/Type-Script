// either: a or b ,쓰는 사람이 타입 결정하도록 Generic 해준다
interface Either<L, R> {
	left: () => L;
	right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
	constructor(private leftValue: L, private rightValue: R) {}
	left(): L {
		return this.leftValue;
	}

	right(): R {
		return this.rightValue;
	}
}
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5

//  either는 쓰는 사람이 결정할 수 있게 해준다
const best = new SimpleEither({ name: "ellie" }, "hello");
