import { createClient } from './graphql'

const client = createClient()

export default {
  ...client.chain.query,
  ...client.chain.mutation,
}

export { everything } from './graphql'
