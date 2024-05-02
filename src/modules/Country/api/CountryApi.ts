import { $api } from "../../../shared/api";
import { ICountryResponse } from "../../../shared/types/ICountryResponse";

const CountryApi = async (name: string): Promise<ICountryResponse> => {
  const response = await $api.get(`name/${name}`);
  return response.data[0];
};

export { CountryApi };
