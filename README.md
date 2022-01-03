# `nftapi`

[![npm](https://img.shields.io/npm/v/nftapi.svg?style=flat-square)](https://www.npmjs.com/package/nftapi)
[![npm](https://img.shields.io/npm/l/nftapi.svg?style=flat-square)](https://www.npmjs.com/package/nftapi)
[![npm](https://img.shields.io/npm/dt/nftapi.svg?style=flat-square)](https://www.npmjs.com/package/nftapi)
![npm bundle size](https://img.shields.io/bundlephobia/min/nftapi)
[![Known Vulnerabilities](https://snyk.io/test/github/nftapi/nftapi/badge.svg)](https://snyk.io/test/github/nftapi/nftapi)

<!-- ![Twitter Follow](https://img.shields.io/twitter/follow/nftapi) -->

# Install

1. Install

```sh
npm install --save nftapi
```

2. Initialize the library

```typescript
import nftapi from 'nftapi'

nftapi.init({
  apiKey: '...', // Replace with your NFTAPI Key
})
```

# Usage

## Get an NFT

Load NFT metadata:

```typescript
nftapi
  .getNFT('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', '1')
  .then(console.log)
```

Result:

```json
{
  "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "name": "Cryptoadz",
  "symbol": "TOADZ",
  "totalSupply": 7025
}
```

## Get NFT Tokens

Access NFT tokens & attributes:

```typescript
nftapi
  .getNFT('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', '1', {
    address: true,
    tokens: {
      tokenId: true,
      attributes: {
        trait: true,
        value: true,
      },
    },
  })
  .then(console.log)
```

Result:

```json
{
  "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "tokens": [
  {
    "id": "a23c7794-8c6d-40e2-b912-f68768238d9d",
    "name": "Cryptoadz",
    "attributes": [
      {
        "trait": "# Traits",
        "value": "4"
      },
      {
        "trait": "Accessory II",
        "value": "Long Cigarette"
      },
      {
        "trait": "Background",
        "value": "95"
      },
      {
        "trait": "Body",
        "value": "Albino"
      },
      {
        "trait": "Head",
        "value": "Fun Cap"
      }
    ]
  }
}
```

## Get NFT Rarity

```
@todo
```

## Get NFT sales history & price

```
@todo
```

<!-- # Using the client

## `getContract(address)`

via Client

```typescript
client.getContract('0x123').then(console.log)

{
  name: ''
}
```

via GraphQL

```graphql
query {
  getContract(address: "0x123") {
    id
    name
    symbol
  }
}
```

## `getNFT(address, tokenId)`

via Client

```typescript
client.getNFT('0x123', '1').get({
  id: true,
  name: true,
  symbol: true,
})
```

via GraphQL

```graphql
query {
  getNFT(address: "0x123", tokenId: "1") {
    id
    name
    symbol
  }
}
```

# Types

## Contract

## NFT

## Attribute -->
