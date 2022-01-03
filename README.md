# Install

```sh
npm install --save nftapi
```

# Usage

```typescript
import nftapi from "nftapi";

nftapi.init({
  apiKey: "", // Replace with your NFTAPI Key
});
```

# GraphQL

Connect directly to the NFTAPI's GraphQL endpoint:

# API

## `getContract()`

```typescript

```

Raw GraphQL query

```typescript
nftapi.query({
  getContract: [
    {
      address: "0x123",
    },
    {
      id: true,
      name: true,
      symbol: true,
    },
  ],
});
```

## `getToken()`
