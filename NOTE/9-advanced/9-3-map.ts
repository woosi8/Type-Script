{
	type Video = {
		title: string;
		author: string;
	};
	// [1, 2].map(item => item * item); // [1, 4]

	// 재사용성을 높이기 위한 map
	type Optional<T> = {
		[P in keyof T]?: T[P]; // for...in
	};

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};
	type VideoOptional = Optional<Video>;

	type Animal = {
		name: string;
		age: number;
	};
	// 부분적으로 가져오기
	const animal: Optional<Animal> = {
		name: "dog",
	};
	animal.name = "ellie";

	const video: ReadOnly<Video> = {
		title: "hi",
		author: "ellie",
	};

	// type VideoOptional = {
	// 있어도 되고 없어도 되고 optional
	//   title?: string;
	//   author?: string;
	// };

	// type VideoReadOnly = {
	//   readonly title: string;
	//   readonly author: string;
	// };

	// null 이 가능하도록 하는 Nullable
	type Nullable<T> = { [P in keyof T]: T[P] | null };
	const obj2: Nullable<Video> = {
		title: "hi",
		author: null,
	};

	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};
}
