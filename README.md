# `nftapi`

[![npm](https://img.shields.io/npm/v/nftapi.svg?style=flat-square)](https://www.npmjs.com/package/nftapi)
[![npm](https://img.shields.io/npm/l/nftapi.svg?style=flat-square)](https://www.npmjs.com/package/nftapi)
[![npm](https://img.shields.io/npm/dt/nftapi.svg?style=flat-square)](https://www.npmjs.com/package/nftapi)
![npm bundle size](https://img.shields.io/bundlephobia/min/nftapi)
[![Known Vulnerabilities](https://snyk.io/test/github/nftapi/nftapi/badge.svg)](https://snyk.io/test/github/nftapi/nftapi)

<!-- ![Twitter Follow](https://img.shields.io/twitter/follow/nftapi) -->

nftapi is an API for querying NFT metadata, rarity, sales history, ownership, and more.

# Usage

First, add the npm package:

```sh
npm install --save nftapi
```

Then initialize the library:

```typescript
import NFT from 'nftapi'

NFT.init({
  // Replace with your API key.
  apiKey: '...',
})
```

To get an API key, go to https://nftapi.dev and register.

# Client library

# API

## `get(options)`

Loads an [NFT](#nft) given address and tokenId.

### Options

| Field     | Type   | Required           | Description                    |
| --------- | ------ | ------------------ | ------------------------------ |
| `address` | string | <center>✓</center> | A NFT contract address (0x123) |
| `tokenId` | string | <center>✓</center> | A Token ID in the NFT contract |

```typescript
const nft = await NFT.get({
  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  tokenId: '1',
})
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

<!-- ## `listNFTAttributes(options)` -->

Access NFT tokens & attributes:

```typescript
const fields = {
  address: true,
  tokens: {
    tokenId: true,
    attributes: {
      trait: true,
      value: true,
    },
  },
}

nftapi.listNFTAttributes(
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  '1',
  fields,
)
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

# Types

## NFT type

| Field          | Type                             | Required |
| -------------- | -------------------------------- | -------- |
| `tokenId`      | string                           | required |
| `name`         | string                           | required |
| `description`  | string                           |
| image          | string                           |
| thumbnailImage | string                           |
| rarity         | Rarity                           |
| openseaUrl     | String!                          |
| attributes     | [[NFTAttribute](#nftattribute)]! |

## NFTAttribute

| Field   | Type   | Required |
| ------- | ------ | -------- |
| `trait` | string | required |
| `value` | string | required |

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
