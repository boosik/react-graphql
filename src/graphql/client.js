import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://hasura.dev-supernova.xyz/v1/graphql',
  cache: new InMemoryCache(),
})


export async function getValidators() {
  return client.query({
    query: gql`
      query GetValidators {
        validator {
          consensus_pubkey
          consensus_address
          validator_voting_powers {
            validator_address
            voting_power
          }
        }
      }
    `
  })
}
