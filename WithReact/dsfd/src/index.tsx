//npm install @reduxjs/toolkit

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
const counterSlice = createSlice({
	name: "counter",
	initialState: 초기값,
	reducers: {
		increment(state) {
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

//action dispatch() {type:string}
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

export let { increment, decrement, incrementByAmount } = counterSlice.actions;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
