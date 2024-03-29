/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {auth} from '../../lib/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

interface IUser {
  user: {
    email: string | null;
  },
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredential {
  email: string;
  password: any;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null
}

export const createUser = createAsyncThunk('user/createUser', async ({email, password}: ICredential)=> {
  const data = await createUserWithEmailAndPassword(auth, email, password)
  return data.user.email
})

export const loginUser = createAsyncThunk('user/loginUser', async ({email, password}: ICredential)=> {
  const data = await signInWithEmailAndPassword(auth, email, password)
  return data.user.email
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state)=> {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    })
    .addCase(createUser.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.user.email = action.payload
    })
    .addCase(createUser.rejected, (state, action)=> {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message!;
    })
    .addCase(loginUser.pending, (state)=> {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.user.email = action.payload
    })
    .addCase(loginUser.rejected, (state, action)=> {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message!;
    })
  }
})


export default userSlice.reducer;
export const {setUser, setLoading} = userSlice.actions