interface Stack {
	readonly size: number;
	push(value: string): void;
	pop(): string;
}

type StackNode = {
	readonly value: string;
	// next: StackNode | undefined;
	readonly next?: StackNode;
};

class StackImpl implements Stack {
	private _size: number = 0;
	private head?: StackNode;
	constructor(private capacity: number) {}
	// get으로만 정의해주면 외부에서 읽을수만 있고 수정은 못한다. 왜냐면 set이 없기에
	get size() {
		return this._size;
	}
	push(value: string) {
		if (this.size === this.capacity) {
			throw new Error("Stack is full!");
		}
		const node: StackNode = { value, next: this.head };
		this.head = node;
		this._size++;
	}
	pop(): string {
		if (this.head == null) {
			throw new Error("Stack is empty!");
		}
		const node = this.head;
		this.head = node.next;
		this._size--;
		return node.value;
	}
}

const stack = new StackImpl(10);
stack.push("Elle 1");
stack.push("bob2");
stack.push("steav3");
while (stack.size !== 0) {
	console.log(stack.pop());
}
