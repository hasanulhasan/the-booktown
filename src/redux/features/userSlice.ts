import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {app} from '../../lib/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app)

interface IUser {
  user: {
    email: string | null;
  },
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredential {
  email: string,
  password: string
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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
  }
})


export default userSlice.reducer;
