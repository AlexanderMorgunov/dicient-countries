import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IReducerStatus } from "../../types/IReducerStatus";
import { iCountriesResponse } from "../../types/ICountriesResponse";
import { CountriesApi } from "../../../modules/Countries/api/CountriesApi";

interface ICountriesSlice {
  error: null | string;
  status: IReducerStatus;
  countries: iCountriesResponse[] | [];
}

const initialState: ICountriesSlice = {
  error: null,
  status: "idle",
  countries: [],
};

export const getCountries = createAsyncThunk<
  iCountriesResponse[],
  void,
  { rejectValue: string }
>("countries/getCountries", async (_, { rejectWithValue }) => {
  try {
    const response = await CountriesApi();
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unexpected error");
  }
});

const countriesSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = "success";
        state.countries = action.payload;
        state.error = null;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default countriesSlice.reducer;
