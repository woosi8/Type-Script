/**
 * Let's make a game 🕹
 */

const position = { x: 0, y: 0 };
type Direc = "up" | "down" | "left" | "right";
function move(direction: Direc, x: number, y: number): number {
	switch (direction) {
		case "up":
			position.y += 1;
			break;
		case "down":
			position.y -= 1;
			break;
		case "left":
			position.x -= 1;
			break;
		case "right":
			position.x -= 1;
			break;
		default:
			throw Error(`unknown command : ${direction}`);
	}
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
