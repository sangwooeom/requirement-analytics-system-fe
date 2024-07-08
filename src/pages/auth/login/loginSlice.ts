import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loginSlicer = createSlice({
    name: 'login',
    initialState: {
        accessToken: '',
        refreshToken: ''
    } as Token,
    reducers: {
        saveToken: (state, action: PayloadAction<Token>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        removeToken: (state) => {
            state.accessToken = '';
            state.refreshToken = '';
        }
    }
})

export const { saveToken, removeToken } = loginSlicer.actions;

export default loginSlicer.reducer;