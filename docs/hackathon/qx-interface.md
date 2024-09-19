---
title: QX Interface
---

**Disclaimer:** Teams need to create a Qubic wallet on [Qubic Wallet](https://wallet.qubic.org/) and we will transfer 10 CFB so they can use the asset to test their solution. Just reach someone in the Qubic team on the hackathon to transfer the funds.

Create a user-friendly interface for QX (Qubic's decentralized exchange) similar to Uniswap. Focus on simplicity and ease of use for trading Qubic-based assets. 

# Displaying qx data

Swagger documentation for getting qx data can be found here: https://qubic.github.io/go-qubic/swagger/index.html#/QxService

## Getting asset orders

There are 2 endpoints that need to be called in order to have the orders for an **asset**:
- sell orders for the asset (ask orders)
- buy orders for the asset (bid orders)

In order to get sell orders for an asset you need to know the asset identifier which is a combination of both the asset name 
and the issuer id of that asset. 

Here are all of the assets that Qubic currently has:

- CFB: CFBMEMZOIDEXQAUXYYSZIURADQLAPWPMNJXQSNVQZAHYVOPYUKKJBJUCTVJL
- QX: ::PLACEHOLDER::
- QTRY: ::PLACEHOLDER::
- RANDOM: ::PLACEHOLDER::
- MLM: ::PLACEHOLDER::
- QFT: TFUYVBXYIYBVTEMJHAJGEJOOZHJBQFVQLTBBKMEHPEVIZFXZRPEYFUWGTIWG
- QPOOL: ::PLACEHOLDER::
- QUTIL: ::PLACEHOLDER::
- QWALLET: QWALLETSGQVAGBHUCVVXWZXMBKQBPQQSHRYKZGEJWFVNUFCEDDPRMKTAUVHA


```shell
~ curl http://95.216.243.140/v1/qx/getAssetAskOrders?assetName=CFB&issuerId=CFBMEMZOIDEXQAUXYYSZIURADQLAPWPMNJXQSNVQZAHYVOPYUKKJBJUCTVJL | jq
{
  "orders": [
    {
      "entityId": "VBTBKDRJJACDRGCDPQFUDLQBSJDAJGBBZHGJYDYTABDLSJMUQWWAXDLDRDVI",
      "price": "4",
      "numberOfShares": "50999800"
    },
    {
      "entityId": "EEWCBEZNLEITWFWVEOFBLKHVXTAARMIGJNXICDIRIFDBUDGFXEYABULCFXAN",
      "price": "4",
      "numberOfShares": "10000000"
    }
  ]
}
```

Similar for buy orders:

```shell
~ curl http://95.216.243.140/v1/qx/getAssetBidOrders?assetName=CFB&issuerId=CFBMEMZOIDEXQAUXYYSZIURADQLAPWPMNJXQSNVQZAHYVOPYUKKJBJUCTVJL | jq
{
  "orders": [
    {
      "entityId": "VBTBKDRJJACDRGCDPQFUDLQBSJDAJGBBZHGJYDYTABDLSJMUQWWAXDLDRDVI",
      "price": "3",
      "numberOfShares": "2112100"
    },
    {
      "entityId": "EEWCBEZNLEITWFWVEOFBLKHVXTAARMIGJNXICDIRIFDBUDGFXEYABULCFXAN",
      "price": "3",
      "numberOfShares": "1000000"
    }
  ]
}
```

# Matching an order

If a user wants to buy an asset, he will look at the sell orders and he should submit an opposite(buy) order that will match the desired sell order.

So for example the user wants to buy the following sell order:

```json
{
  "entityId": "VBTBKDRJJACDRGCDPQFUDLQBSJDAJGBBZHGJYDYTABDLSJMUQWWAXDLDRDVI",
  "price": "4",
  "numberOfShares": "50999800"
}
```

He needs the asset identifier(asset name and issuer id) and the sell order that he wants to match(price and number of shares).
Having the information ready, you can use the js library to construct the buy transaction that will be submitted to the network:

```javascript

```

Similar for a user that wants to sell an asset, the same information is needed and he should create the sell order that will match the buy order:

```javascript

```

pending

