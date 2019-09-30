import { gql } from 'apollo-server-lambda';

export default gql`
  type Query {
    getUser(id: ID!): User
    listUsers(query: String): [User]
  }

  type User {
    id: ID!
    name: String!
    country: Country!
  }
`;
