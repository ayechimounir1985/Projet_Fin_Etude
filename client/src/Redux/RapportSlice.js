import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const AddRapport = createAsyncThunk("userrapport/AddRapport",async (newrapport,{ rejectWithValue }) => {
    try {
      const { dataa } = await axios.post('/api/rapport/',newrapport)
    return dataa;
    } catch (error) {
      rejectWithValue(error.response.message.dataa)
    }
  }
);

//get all rapports

export const GetAllRapport = createAsyncThunk('userrapport,GetAllRapport',async(_,{rejectWithValue})=>{
  try {
    const { dataa } = await axios.post('/api/rapport/')
  return dataa
  } catch (error) {
    rejectWithValue(error.response.message.dataa)
  }
})

const RapportSlice = createSlice({
    name: "userrapport",
    initialState: {
      isLoading: false,
      userrapport: {},
      usersrapport: [],
      Errors: null,
    },
    reducers: {
  
    },
    extraReducers: {
      [AddRapport.pending]: (state) => {
        state.isLoading = true;
      },
      [AddRapport.fulfilled] : (state,action)=>{
      state.isLoading = false    
      state.rapport = action.payload
      },
      [AddRapport.rejected] : (state,{type,payload})=>{
          state.Errors = payload
      },
      [GetAllRapport.pending]: (state) => {
        state.isLoading = true;
      },
      [GetAllRapport.fulfilled] : (state,{type,payload})=>{
      state.isLoading = false    
      state.usersrapport = payload
      },
      [GetAllRapport.rejected] : (state,{type,payload})=>{
          state.Errors = payload
      },
      
    }
  })
  export default RapportSlice.reducer