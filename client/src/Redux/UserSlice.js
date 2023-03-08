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

export const signIn = createAsyncThunk('user/signIn',async(user,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/Login', user )
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors)
    }
})

const UserSlice = createSlice({
    name:'user',
    initialState:{
        User:JSON.parse(localStorage.getItem('user')),
        isLoading: false,
        RegisterErrors: null,
        LoginErrors: null,
        token: localStorage.getItem('token'),
        isAuth: Boolean(localStorage.getItem('isAuth'))
    },
    reducers:{
        LogOut: (state)=>{
            localStorage.clear()
            state.User = {}
            state.isAuth = false
            state.token = null
        }
    },
    extraReducers:{
    [SignUp.pending] : (state)=>{
        state.isLoading = true
    },
    [SignUp.fulfilled] : (state,{type,payload})=>{
        state.isLoading = false
    },
    [SignUp.rejected] : (state,{type,payload})=>{
        state.RegisterErrors = payload
    },

    [signIn.pending] : (state)=>{
        state.isLoading = true
    },
    [signIn.fulfilled] : (state,{type,payload})=>{
        state.isLoading = false
        state.User = payload.isfound
        state.token = payload.token
        state.isAuth = true
        localStorage.setItem('user', JSON.stringify(payload.isfound))
        localStorage.setItem('token', payload.token)
        localStorage.setItem('isAuth', true)

    },
    [signIn.rejected] : (state,{type,payload})=>{
        state.LoginErrors = payload
    }

    }
})
export default UserSlice.reducer
export const {LogOut} = UserSlice.actions