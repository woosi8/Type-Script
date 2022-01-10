/**
 * Type Inference
 */
let text = "hello";
function print(message = "hello") {
	console.log(message);
}
print("hello");
//                                  return 타입
function add(x: number, y: number): number {
	return x + y;
}
const result = add(1, 2);
