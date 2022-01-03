import { createClient, everything } from './graphql'

const client = createClient({
  fetcher: async (body) => {
    const res = await fetch('http://localhost:4000/graphql', {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: getStoredToken(),
      },
      method: 'POST',
      body: JSON.stringify(body),
    })

    const json = await res.json()

    if (json.errors?.length > 0) {
      throw json.errors[0]
    }

    return json
  },
})

export default {
  ...client.chain.query,
  ...client.chain.mutation,
}

export async function getContract(address, fields = { ...everything }) {
  return client.chain.query.getContract({ address }).get(fields)
}

export async function getNFT(
  address,
  tokenId,
  fields = { ...everything, attributes: { ...everything } },
) {
  return client.chain.query.getNFT({ address, tokenId }).get(fields)
}

export { everything } from './graphql'
