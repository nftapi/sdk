# Install

```sh
npm install --save nftapi
```

# Usage

```typescript
import nftapi from 'nftapi'

nftapi.init({
  apiKey: '', // Replace with your NFTAPI Key
})
```

# GraphQL

Connect directly to the NFTAPI's GraphQL endpoint:

# API

## `getContract()`

Client

```typescript
import client from 'nftapi'

client.getContract({ address: '0x123' }).get({
  id: true,
  name: true,
  symbol: true,
})
```

GraphQL

```GraphQL
query {
  getContract(address: "") {
    id
    name
    symbol
  }
}
```

## `getToken()`
