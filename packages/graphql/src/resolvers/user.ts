import lambda from '@rooster/core/lib/lambda';
import { countryLoader } from '../dataloaders';
import { GQLUser, GQLQueryGetUserArgs, GQLQueryListUsersArgs } from '../types';

export default {
  Query: {
    async getUser(_parent: GQLUser, { id }: GQLQueryGetUserArgs) {
      return lambda.invoke('getUser', { id });
    },

    async listUsers(_parent: GQLUser, { query }: GQLQueryListUsersArgs) {
      return lambda.invoke('listUsers', { query });
    },
  },

  User: {
    async country({ country }: GQLUser) {
      return countryLoader.load((country as unknown) as string);
    },
  },
};
