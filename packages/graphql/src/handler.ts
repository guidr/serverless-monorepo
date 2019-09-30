import { ApolloServer } from 'apollo-server-lambda';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';

const typeDefs = fileLoader(path.join(__dirname, 'types/*'), { extensions: ['.js'] });
const resolvers = fileLoader(path.join(__dirname, 'resolvers/*'), { extensions: ['.js'] });

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(typeDefs, { all: true }),
  resolvers: mergeResolvers(resolvers),
});

const server = new ApolloServer({
  schema,
  context: ({ event, context }: any) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

export const graphql = server.createHandler();
