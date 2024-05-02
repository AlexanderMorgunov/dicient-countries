import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IReducerStatus } from "../../types/IReducerStatus";
import { ICountryResponse } from "../../types/ICountryResponse";
import { CountryApi } from "../../../modules/Country/api/CountryApi";

interface ICountrySlice {
  error: null | string;
  status: IReducerStatus;
  country: ICountryResponse;
}

const initialState: ICountrySlice = {
  error: null,
  status: "idle",
  country: {} as ICountryResponse,
};

export const getCountry = createAsyncThunk<
  ICountryResponse,
  string,
  { rejectValue: string }
>("country/getCountry", async (name, { rejectWithValue }) => {
  try {
    const response = await CountryApi(name);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unexpected error");
  }
});

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = "success";
        state.country = action.payload;
        state.error = null;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default countrySlice.reducer;
