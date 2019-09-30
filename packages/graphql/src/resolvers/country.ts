import lambda from '@rooster/core/lib/lambda';
import { Country } from '@rooster/countries';
import { GQLCountry, GQLQueryGetCountryArgs } from '../types';

export default {
  Query: {
    async getCountry(
      _parent: GQLCountry,
      { code }: GQLQueryGetCountryArgs,
    ): Promise<Country> {
      return lambda.invoke<Country>('getCountry', { code });
    },

    async listCountries(): Promise<Country[]> {
      return lambda.invoke<Country[]>('listCountries');
    },
  },
};
