import { gql } from 'apollo-server-lambda';

export default gql`
  type Country {
    code: ID!
    name: String!
    flag: String
  }

  type Query {
    getCountry(code: ID!): Country
    listCountries: [Country]
  }
`;
