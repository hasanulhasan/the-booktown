import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Ifilter {
  sort: string,
  search: string,
  date: string,
  price: string
}

const initialState: Ifilter = {
  sort: '',
  search: '',
  date: '',
  price: ''
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
    },
    dateSort: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
    priceSort: (state, action: PayloadAction<string>) => {
      state.price = action.payload
    }
  }
})


export default filterSlice.reducer;
export const { searchParam, sortType, dateSort, priceSort } = filterSlice.actions