import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    count: 0
}

//trong createSlice, import 1 object với tên là counter
//reducers: nơi đặt tên cho các action khác nhau, ở đây là increment và decrement
export const counterSlice = createSlice({
    name:'counter',
    initialState, //trạng thái ban đầu: ở đây count ban đầu = 0
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});
// export các action trong slice counterSlice
export const {increment, decrement, reset, incrementByAmount} =counterSlice.actions;
//export reducer vì store cần điều đó
export default counterSlice.reducer;