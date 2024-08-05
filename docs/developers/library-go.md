---
title: Go Libraries
---

# Go Library

The Go Qubic Library provides tools to interact with a blockchain-based betting system. It includes functionalities for client interactions, data type conversions, bet management, date parsing, wallet management, and cryptographic operations.

For full documentation, please visit the [Go Qubic Library GitHub repository](https://github.com/qubic/go-qubic).

# Go Archiver Service

The Go Qubic Archiver Service's purpose is to store and make available data regardless of the current epoch.

## High Level Description

The archive system consists of two services:

- **qubic-archiver**: The archiver processor and HTTP server that provides RPC endpoints to query the archiver.
- **qubic-nodes**: A service responsible for providing information regarding reliable nodes and the max tick of the network.

For full documentation, please visit the [Qubic Archiver GitHub repository](https://github.com/qubic/go-archiver).

# Go Nodes Service

The purpose of the qubic-nodes service is to continuously check node reliability and provide, upon request, a list of reliable nodes.

For full documentation, please visit the [Qubic Go Nodes Service GitHub repository](https://github.com/qubic/go-qubic-nodes).

# Go Node Fetcher

For full documentation, please visit the [Go Node Fetcher GitHub repository](https://github.com/qubic/go-node-fetcher).

# Go SchnorrQ

Schnorr signature on FourQ for Qubic.

For full documentation, please visit the [Go SchnorrQ GitHub repository](https://github.com/qubic/go-schnorrq).
