import { $api } from "../../../shared/api";
import { iCountriesResponse } from "../../../shared/types/ICountriesResponse";

const CountriesApi = async (): Promise<iCountriesResponse[]> => {
  const response = await $api.get(
    "/all?fields=name,flags,capital,translations"
  );
  return response.data;
};

export { CountriesApi };
