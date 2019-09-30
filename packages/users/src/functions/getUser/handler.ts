import { APIGatewayProxyEvent } from 'aws-lambda';
import userList from '../../data/users.json';
import { User } from '../../types';

export interface RequestEvent extends APIGatewayProxyEvent {
  id: string;
}

export default async function handler(event: RequestEvent): Promise<User | undefined> {
  return userList.find(({ id }: User) => id === event.id);
}
