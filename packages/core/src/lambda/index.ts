import { Lambda, AWSError } from 'aws-sdk';

export interface Payload {
  [property: string]: any;
}

export interface InvocationRequest {
  InvocationType?: Lambda.Types.InvocationType;
  LogType?: Lambda.Types.LogType;
  ClientContext?: string;
  Qualifier?: Lambda.Types.Qualifier;
}

const lambda = new Lambda({
  apiVersion: '2015-03-31',
  endpoint: process.env.IS_OFFLINE
    ? 'http://localhost:3000'
    : 'https://lambda.us-east-1.amazonaws.com',
});

export default {
  async invoke<T>(
    functionName: string,
    payload: Payload = {},
    options: InvocationRequest = {},
  ): Promise<T> {
    const params: Lambda.Types.InvocationRequest = {
      InvocationType: 'RequestResponse',
      ...options,
      FunctionName: `rooster-api-${process.env.AWS_STAGE}-${functionName}`,
      Payload: JSON.stringify(payload),
    };

    return new Promise<T>((resolve, reject): void => {
      lambda.invoke(params, (error: AWSError, response: Lambda.Types.InvocationResponse): void => {
        if (error) {
          return reject(error);
        }

        try {
          return resolve(JSON.parse(response.Payload as string));
        } catch (error) {
          resolve(null);
        }
      });
    });
  },
};
