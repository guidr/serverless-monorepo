import axios from 'axios';
import faker from 'faker';
import handler from './handler';

describe('function: listCountries', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  test('It returns list of countries', async () => {
    const countryList = [...Array(10)].map(() => ([
      faker.address.countryCode(),
      faker.address.country(),
    ]));

    mockedAxios.get.mockResolvedValueOnce({
      data: countryList.map(([alpha2Code, name]) => ({ alpha2Code, name })),
    });

    const expectedList = countryList.map(([code, name]) => ({ code, name }));
    const result = await handler();

    expect(result).toHaveLength(countryList.length);
    expect(result).toEqual(expectedList);
  });
});
