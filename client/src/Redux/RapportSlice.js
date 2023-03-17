import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const AddRapport = createAsyncThunk("userrapport/AddRapport",async (newrapport,{ rejectWithValue }) => {
    const { dataa } = await axios.post('/api/rapport/',newrapport);
    return dataa;
  }
);

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
      }
    }
  })
  export default RapportSlice.reducer