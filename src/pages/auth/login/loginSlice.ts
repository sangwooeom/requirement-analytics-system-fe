import { loginApi } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const login = createAsyncThunk('login', async (loginInput: LoginInput) => {
    const { data } = await loginApi(loginInput);
    return data;
})

export const loginSlicer = createSlice({
    name: 'login',
    initialState: {
        token: {
            accessToken: '',
            refreshToken: ''
        },
        status: 'idle',
    } as LoginState,
    reducers: {
        saveToken: (state, action: PayloadAction<Token>) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = { accessToken: '', refreshToken: '' };
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, _) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const { saveToken, removeToken } = loginSlicer.actions;

export default loginSlicer.reducer;

export const selectToken = () => (state) => state.login.token;