//npm install @reduxjs/toolkit  , 리덕스 라이브러리 : createSlice 코드를 신문법으로 사용하기

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
	count: number;
}

const 초기값: Counter = { count: 0 };
// const 초기값: Counter = { count: 0 };

// Slcie -  함수형으로 reducer 만들기 ,state+reducer
//신버전 - if문 보다 깔끔한 느낌을줌, state 수정시 복사본만들 필요 없음
const counterSlice = createSlice({
	//1
	name: "counter",
	//2
	initialState: 초기값,
	//3 데이터 수정방법
	reducers: {
		increment(state) {
			//첫째 파마리터는 타입 지정 안해줘도 초기값 :Counter 지정했던 타입이 자동으로 반영된다
			state.count += 1;
		},
		decrement(state) {
			state.count -= 1;
		},
		incrementByAmount(state, action: PayloadAction<number>) {
			// incrementByAmount(state, action: any) {
			state.count += action.payload;
		},
	},
});

//action dispatch() {type:string}, 구버전
function reducer(state = 초기값, action: any) {
	if (action.type === "증가") {
		return { count: state.count + 1 };
	} else if (action.type === "감소") {
		return { count: state.count - 1 };
	} else {
		return 초기값;
	}
}

// const store = createStore(reducer);
// slice stroe 만들기
let store = configureStore({
	reducer: {
		counter1: counterSlice.reducer,
	},
});

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>;

//수정방법 만든거  export
export let { increment, decrement, incrementByAmount } = counterSlice.actions;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
