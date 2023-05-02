import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'


export const AddRapport = createAsyncThunk("userrapport/AddRapport",async (newrapport,{ rejectWithValue }) => {
    try {
      const { dataa } = await axios.post('/api/rapport/',newrapport)
    return dataa
    } catch (error) {
      rejectWithValue(error.response.message.dataa)
    }
  })

// Update Rapport

export const UpdateRapport = createAsyncThunk('userrapport/UpdateRapport',async(updateRapport,{rejectWithValue})=>{
try {
  const { data } = await axios.put(`/api/rapport/${updateRapport._id}`,updateRapport)
  return data
} catch (error) {
  return rejectWithValue(error.response.message.dataa)
}
})

//Delete Rapport

export const DeleteRapport = createAsyncThunk('userrapport/DeleteRapport',async(id,{rejectWithValue})=>{
  try {
    const {data} = await axios.delete(`/api/rapport/${id}`)
    return data
  } catch (error) {
  return rejectWithValue(error.response.message.dataa)
  }
})

//get all rapports

export const GetAllRapport = createAsyncThunk('userrapport/GetAllRapport',async( _ ,{rejectWithValue})=>{
  try {
    const { data } = await axios.get('/api/rapport/')
  return data
  } catch (error) {
    return  rejectWithValue(error.response.message.data)
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
      state.userrapport = action.payload
      },
      [AddRapport.rejected] : (state,{type,payload})=>{
          state.Errors = payload
      },
      [GetAllRapport.pending]: (state) => {
        state.isLoading = true
      },
      [GetAllRapport.fulfilled] : (state,{type,payload})=>{
      state.isLoading = false    
      state.usersrapport = payload
      },
      [GetAllRapport.rejected] : (state,{type,payload})=>{
          state.Errors = payload
      },
      [UpdateRapport.pending] : (state)=>{
        state.isLoading = true
      },
      [UpdateRapport.fulfilled] : (state,{type,payload})=>{
        state.isLoading = false
        state.usersrapport = state.usersrapport.map(el => (el._id === payload._id)? {...el,...payload} : el)
      },
      [UpdateRapport.rejected] : (state,{type,payload})=>{
        state.Errors = payload
      },
      [DeleteRapport.pending] : (state)=>{
        state.isLoading = true
      },
      [DeleteRapport.fulfilled] : (state,{type,payload})=>{
        state.isLoading = false
        state.usersrapport = state.usersrapport.filter(el=> el._id !== payload.deletedRapport._id)
      },
      [DeleteRapport.rejected] : (state,{type,payload})=>{
        state.Errors = payload
      }
    }
  })
  export default RapportSlice.reducer