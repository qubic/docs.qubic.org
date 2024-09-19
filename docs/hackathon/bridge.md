---
title: Token Bridge
---
**Disclaimer:** Teams need to create a Qubic wallet on [Qubic Wallet](https://wallet.qubic.org/) and we will transfer 500 qubics so they can use the asset to test their solution. Just reach someone in the Qubic team on the hackathon to transfer the funds.

# System Design: Qubic to Ethereum Token Bridge

## Overview

This system design describes a token bridge that will facilitate the transfer of a token (QU token) from the Qubic blockchain network to the Ethereum blockchain network. The bridge architecture is composed of two major components on each blockchain: a smart contract (SC) and a bridge processor module. The goal of the bridge is to allow users to transfer their QU tokens from Qubic to Ethereum where they will receive wrapped QU tokens (wQU).

The bridge will operate as follows:
- The user submits a bridge order on Qubic to specify the Ethereum destination address and the amount of QU tokens to be bridged.
- The bridge processor on the Qubic side monitors the SC for new orders, processes them, and calls the Ethereum smart contract to issue wrapped QU tokens.
- Once the tokens are transferred, the processor updates the status of the Qubic bridge order with the Ethereum transaction hash and marks it as successful.

## Architecture Components

### 1. Qubic Smart Contract (SC) - still in development; if you can work on creating it we can help deploying it on the network
The Qubic SC serves as the interface for creating, storing, and updating bridge orders. It provides functionality for users to initiate bridge transactions and for the bridge processor to update the status of orders once the transfer is completed on the Ethereum side.

#### Functions:
- `createBridgeOrder(string ethDestination, int64 amount)`: Submits a bridge order to transfer tokens to the Ethereum network. It generates an order ID and stores the following information:
    - Order ID
    - Qubic incoming address (automatically captured as the sender)
    - Ethereum destination address
    - Amount of QU tokens to be bridged
    - Status of the order (initially set to "Pending")
    - Ethereum transaction hash (empty initially)

- `updateBridgeOrder(uint32 orderId, string ethTxHash)`: Updates the order with the Ethereum transaction hash after the transfer is confirmed. Marks the status of the order as "Success".

#### Storage:
- A mapping of order ID to bridge order details:
    - Order ID
    - Qubic incoming address
    - Ethereum destination address
    - Amount
    - Status (bool)
    - Ethereum transaction hash

### 2. Qubic Bridge Processor
The Qubic bridge processor is a piece of off-chain software that runs in a loop. It monitors the Qubic smart contract for new bridge orders and interacts with the Ethereum network to fulfill the bridging process.

#### Responsibilities:
- Poll the Qubic SC in a loop to check for new pending bridge orders.
- The processor also handles the Ethereum side of the bridge, interacting with the Ethereum SC to issue the wrapped QU tokens. It monitors Ethereum transactions for confirmation and communicates the results back to the Qubic SC.
- After the Ethereum transaction is confirmed, the processor updates the Qubic SC with the Ethereum transaction hash and marks the order as successful.

### 3. Ethereum Smart Contract (SC)
The Ethereum SC is responsible for issuing wrapped QU tokens (wQU) to the destination address specified in the bridge order. This contract only accepts calls from the Qubic bridge processor.

#### Functions:
- `issueWrappedToken(address destination, uint qubicOrderId)`: Issues the wrapped QU tokens (wQU) to the provided Ethereum destination address based on the Qubic bridge order ID. It should check for validity to ensure it only processes valid requests from the processor.

## Workflow

### 1. User Initiates Bridge on Qubic
- A user calls `createBridgeOrder(ethDestination, amount)` on the Qubic SC to initiate the bridge process.
- The SC stores the order details in internal storage and assigns the order a unique ID.
- The order status is set to "Pending".

### 2. Qubic Bridge Processor Handles the Order
- The Qubic bridge processor monitors the Qubic SC for new pending orders.
- When a new order is detected, the processor initiates a token transfer by calling the `issueWrappedToken` function on the Ethereum SC.
- The wrapped tokens (wQU) are issued to the Ethereum destination address specified in the bridge order.

### 3. Ethereum SC Issues Wrapped QU Tokens
- The Ethereum SC issues the wrapped QU tokens (wQU) to the destination address and records the transaction hash.

### 4. Qubic SC Updated with Ethereum Transaction Hash
- Once the Ethereum transaction is confirmed, the Qubic bridge processor updates the bridge order on the Qubic SC by calling `updateBridgeOrder(orderId, ethTxHash)`, providing the Ethereum transaction hash.
- The status of the order is set to "Success", completing the process.

---

## Sequence Diagram

```plaintext
User                     Qubic SC                   Qubic Bridge Processor        Ethereum SC
 |                            |                                 |                            |
 |----createBridgeOrder------->|                                 |                            |
 |                            |                                 |                            |
 |                            |-------> Store Order             |                            |
 |                            |                                 |                            |
 |                            |<-------- Order ID --------------|                            |
 |                            |                                 |                            |
 |                            |                                 |                            |
 |                            |<------------------ Poll Order   |                            |
 |                            |                                 |                            |
 |                            |------------Pending Order--------|                            |
 |                            |                                 |                            |
 |                            |<---------------------------------|---issueWrappedToken------> |
 |                            |                                 |                            |
 |                            |                                 |<---------- Token Transfer--|
 |                            |                                 |                            |
 |                            |                                 |                            |
 |                            |<---------------------------------|                            |
 |<---------Update Order-------|                                 |                            |
 |                            |                                 |                            |
```

# Data Structures
## Bridge Order (Qubic SC)

```
struct BridgeOrder {
    uint32 orderId;
    uint8_t userId[32];
    string ethAddress;
    int64 amount;
    bool status; // false = Pending, true = Success
    string ethTxHash;
}
```

Ethereum SC Storage
The Ethereum SC should store records of completed token transfers indexed by the Qubic order ID to prevent double spending.

Or you can use a solidity bridge proxy smart contract that already exists on the internet