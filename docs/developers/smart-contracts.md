---
title: Smart Contracts
---

# Qubic Smart Contracts

_Disclaimer: You can find all the contracts and the latest information on [Qubic Core Contracts](https://github.com/qubic/core/tree/main/src/contracts)._

Qubic's smart contracts are designed to be secure, efficient, and flexible. Below is a list of known smart contracts within the Qubic ecosystem, along with their addresses and supported input types.

## Known Smart Contracts

### ComputorControlledFund (CCF)
- **Address:** 
- **Description:** Manages funds controlled by computors, allowing for proposals and voting on fund transfers.
- **Input Types:**
  - `SetProposal_input`
  - `GetProposalIndices_input`
  - `GetProposal_input`
  - `Vote_input`
  - `GetVote_input`
  - `GetVotingResults_input`
  - `GetLatestTransfers_input`
  - `GetProposalFee_input`

### MyLastMatch (MLM)
- **Address:** 
- **Description:** A simple contract example with minimal functionality.
- **Input Types:** None specified.

### QUtil
- **Address:** 
- **Description:** Provides utility functions for other smart contracts, such as sending funds to multiple addresses and burning Qubic.
- **Input Types:**
  - `SendToManyV1_input`
  - `GetSendToManyV1Fee_input`
  - `BurnQubic_input`

### Quottery
- **Address:** 
- **Description:** A lottery contract within the Qubic ecosystem.
- **Input Types:** Not specified in the provided context.

### Qx
- **Address:** 
- **Description:** A contract for managing Qubic exchanges.
- **Input Types:** Not specified in the provided context.

### Random
- **Address:** 
- **Description:** Generates random numbers for various applications, including gambling, gaming, NFTs, and security systems.
- **Input Types:** Not specified in the provided context.

## Contract Development Guidelines

When developing smart contracts for the Qubic ecosystem, adhere to the following guidelines to ensure security and efficiency:

1. **State Management:** The state is the persistent memory of the contract that is kept aligned in all nodes.
2. **Functions and Procedures:** 
   - Functions cannot change the state of the contract and can be called via a `RequestContractFunction` network message.
   - Procedures can change the state of the contract and are invoked by a transaction.
3. **Security Restrictions:**
   - Avoid using arrays with C/C++ notation. Use pre-defined array structures within `qpi.h`.
   - Do not use pointer-related techniques or native data types like `int`, `long`, `char`. Use predefined data types in `qpi.h`.
   - Do not include other files via `#include`. All functions must reside within a single file.
   - Avoid using math operators `%` and `/`. Use `mod` and `div` from `qpi.h` instead.
   - Declare all necessary variables in the contract state or in a "locals" struct.
   - Avoid using `typedef`, `union`, and floating point data types.

For more detailed information on smart contract development, refer to the [Qubic Contract Development Guidelines](https://github.com/qubic/core/tree/main/src/contracts).

## Example Smart Contract

Below is an example of a simple smart contract in the Qubic ecosystem:

