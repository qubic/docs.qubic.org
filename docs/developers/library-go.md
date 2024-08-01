---
title: Go Qubic Library
---

# Go Qubic Library

The Go Qubic Library provides tools to interact with a blockchain-based betting system. It includes functionalities for client interactions, data type conversions, bet management, date parsing, wallet management, and cryptographic operations.

For full documentation, please visit the [Go Qubic Library GitHub repository](https://github.com/qubic/go-qubic).

# Qubic Archiver Service

The Qubic Archiver Service's purpose is to store and make available data regardless of the current epoch.

## High Level Description

The archive system consists of two services:

- **qubic-archiver**: The archiver processor and HTTP server that provides RPC endpoints to query the archiver.
- **qubic-nodes**: A service responsible for providing information regarding reliable nodes and the max tick of the network.

For full documentation, please visit the [Qubic Archiver GitHub repository](https://github.com/qubic/go-archiver).
