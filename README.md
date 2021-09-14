# Alpaca ibALPACA Subgraph

Alpaca Finance is the largest lending protocol allowing leveraged yield farming on Binance Smart Chain. It helps lenders to earn safe and stable yields, and offers borrowers undercollateralized loans for leveraged yield farming positions, vastly multiplying their farming principals and resulting profits.‌ Furthermore, Alpacas are a virtuous breed. That’s why, we are a fair-launch project with no pre-sale, no investor, and no pre-mine. This is a product built by the Alpacas, for the Alpacas.

Deployed at: https://thegraph.com/legacy-explorer/subgraph/nftgalaxy/alpaca-ibalpaca-subgraph

### Model

#### User

* id: User address
* mintCount: User mint times


### Example Queries

- Each address will get a chance to draw from Burger NFT cards for more than 100 BURGER or xBURGER liquidity provided by any one of following trading pairs for 10 days on Liquidity.

Query:
```graphql
{
  user(id: "0x005557a4d27714a764eed9afb2b2e86ac35d6f00") {
    id
    mintCount
  }
}
```

Sample response data:
```json
{
  "data": {
    "user": {
      "id": "0x005557a4d27714a764eed9afb2b2e86ac35d6f00",
      "mintCount": 10
    }
  }
}
```

Get claim count expression: 
```javascript
function(data) {
  if (data.user == null) {
    return 0
  }
  if (data.user.mintCount > 0) {
    return 1
  }
  return 0
  
}
```
