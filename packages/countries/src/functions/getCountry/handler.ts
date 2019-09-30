import { APIGatewayProxyEvent } from 'aws-lambda';
import axios from 'axios';
import { Country, RestCountry } from '../../types';

interface RequestEvent extends APIGatewayProxyEvent {
  code: string;
}

export default async function handler(event: RequestEvent): Promise<Country> {
  const url: string = `${process.env.REST_COUNTRIES_URL}/v2/alpha/${event.code}`;

  try {
    const { data: country } = await axios.get<RestCountry>(url);

    return {
      code: country.alpha2Code,
      name: country.name,
      flag: country.flag,
    };
  } catch (error) {
    throw new Error('Not found');
  }
}
