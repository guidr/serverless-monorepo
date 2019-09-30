import axios from 'axios';
import faker from 'faker';
import handler from './handler';

describe('function: getCountry', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  test('It returns country data', async () => {
    const countryCode: string = faker.address.countryCode();
    const countryName: string = faker.address.country();

    mockedAxios.get.mockResolvedValueOnce({
      data: {
        alpha2Code: countryCode,
        name: countryName,
      },
    });

    const event: any = { code: countryCode };
    const result = await handler(event);

    expect(result).toHaveProperty('code', countryCode);
    expect(result).toHaveProperty('name', countryName);
  });

  test('It fails with invalid country code', () => {
    mockedAxios.get.mockResolvedValueOnce(new Error());

    const event: any = { code: 'INVALID' };
    const result = handler(event);

    expect(result).rejects.toThrow('Not found');
  });
});
