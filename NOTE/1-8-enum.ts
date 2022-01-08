{
	/**
	 * Enum
	 */
	// JavaScript
	const MAX_NUM = 6;
	const MAX_STUDENTS_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;

	// TypeScript
	type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; //Enum보다 사용되는(타입을 보장해줌)
	enum Days {
		// Monday =1, 1부터 시작을 원할때, 문자열도 가능 "monday", 근데 다 넣어줘야 하는 번거로움이 있음
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	console.log(Days.Monday);
	let day: Days = Days.Saturday;
	day = Days.Tuesday;
	day = 10; //enum의 문제점 : 숫자를 맘대로 넣을수가 있다
	console.log(day);

	let dayOfweek: DaysOfWeek = "Monday";
	dayOfweek = "Wednesday";
}
