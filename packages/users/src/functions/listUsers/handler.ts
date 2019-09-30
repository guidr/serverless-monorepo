import { APIGatewayProxyEvent } from 'aws-lambda';
import userList from '../../data/users.json';
import { User } from '../../types';

export interface RequestEvent extends APIGatewayProxyEvent {
  query: string;
}

export default async function handler(event: RequestEvent): Promise<User[]> {
  const queryRegex = new RegExp(event.query, 'i');

  return userList.filter(({ name }: User) => {
    if (event.query && !queryRegex.test(name)) {
      return false;
    }

    return true;
  });
}
