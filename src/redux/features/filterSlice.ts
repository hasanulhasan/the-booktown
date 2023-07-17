import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Ifilter {
  sort: string,
  search: string,
}

const initialState: Ifilter = {
  sort: '',
  search: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchParam: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    sortType: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})


export default filterSlice.reducer;
export const { searchParam,sortType } = filterSlice.actions