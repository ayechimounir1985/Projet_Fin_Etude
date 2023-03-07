import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const SignUp = createAsyncThunk('user/SignUp' , async(newUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/',newUser)
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors)
        
    }
})

const UserSlice = createSlice({
    name:'user',
    initialState:{
        User:{},
        isLoading: false,
        RegisterErrors: null,
        LoginErrors: null,
        token: null,
        isAuth: false
    },
    reducers:{},
    extraReducers:{
    [SignUp.pending] : (state)=>{
        state.isLoading = true
    },
    [SignUp.fulfilled] : (state,{type,payload})=>{
        state.isLoading = false
    },
    [SignUp.rejected] : (state,{type,payload})=>{
        state.RegisterErrors = payload
    }

    }
})
export default UserSlice.reducer