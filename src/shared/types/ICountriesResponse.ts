import { ICountryName } from "./ICountryName";

export interface iCountriesResponse {
  name: ICountryName;
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
  translations: {
    rus: {
      official: string;
      common: string;
    };
    [key: string]: {
      official: string;
      common: string;
    };
  };
}
