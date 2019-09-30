import lambda from '@rooster/core/lib/lambda';
import { Country } from '@rooster/countries';
import DataLoader from 'dataloader';

export default new DataLoader<string, Country>((keys: string[]) => {
  return Promise.all(keys.map((code: string) => {
    return lambda.invoke<Country>('getCountry', { code });
  }));
});
