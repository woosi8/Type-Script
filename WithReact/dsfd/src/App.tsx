import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, increment } from "./index";
import { Dispatch } from "redux";

let a: string = "kim";
let 박스: JSX.IntrinsicElements["div"] = <div>ㅇㅇㅇ</div>;
type Prof = { name: string; age: string };
function App() {
	let [user, setUser] = useState("kim"); //useState는 알아서 타입지정해준다
	// let [user, setUser] = useState<string | number>("kim"); //정말 간혹 두타입을 쓰고싶을떄 generic
	return (
		<div>
			{박스}
			<h4>안녕하십니까</h4>
			<Profile name="철수" age="20" />
		</div>
	);
}

function Profile(props: Prof): JSX.Element {
	// const 꺼내온거 = useSelector((state: { count: number }) => state);
	const 꺼내온거 = useSelector((state: RootState) => state);
	const dispatch: Dispatch = useDispatch(); //디스패치 타입지정
	return (
		<div>
			{props.name},{props.age}프로필입니다
			{꺼내온거.counter1.count}
			<button
				onClick={() => {
					dispatch(increment());
				}}
				// dispatch({ type: "증가" });
			>
				버튼
			</button>
		</div>
	);
}

export default App;
