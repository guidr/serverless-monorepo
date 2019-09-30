import lambda from '@rooster/core/lib/lambda';
import { User } from '@rooster/users';
import DataLoader from 'dataloader';

export default new DataLoader<string, User>((keys: string[]) => {
  return Promise.all(keys.map((id: string) => {
    return lambda.invoke<User>('getUser', { id });
  }));
});
