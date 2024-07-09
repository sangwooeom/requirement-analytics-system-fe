import { RootState } from "@/store";
import { loginApi } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk('login', async (loginInput: LoginInput) => {
    const { data } = await loginApi(loginInput);
    return data;
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: {
            accessToken: '',
            refreshToken: ''
        },
        status: 'idle',
    } as LoginState,
    reducers: {
        logout: (state) => {
            state.token = {accessToken: '', refreshToken: ''};
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload);
                state.token = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = () => (state: RootState) => state.auth.token;

export const selectLoginState = () => (state: RootState) => state.auth.status;