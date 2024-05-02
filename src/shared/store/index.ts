import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./Reducers/CountriesSlice";
import countrySlice from "./Reducers/CountrySlice";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    country: countrySlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
