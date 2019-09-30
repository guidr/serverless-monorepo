import axios from 'axios';
import { Country, RestCountry } from '../../types';

export default async function handler(): Promise<Country[]> {
  const url: string = `${process.env.REST_COUNTRIES_URL}/v2/all?fields=alpha2Code;name;flag`;
  const { data: countries } = await axios.get<RestCountry[]>(url);

  return countries.map((country: RestCountry) => ({
    code: country.alpha2Code,
    name: country.name,
    flag: country.flag,
  }));
}
