---
title: JSON RPC API
---
## Qubic RPC
The Qubic RPC is your gateway to the Qubic Network. For testing purposes, you can use https://testapi.qubic.org as baseUrl.

> [Swagger/OpenAPI Documentation](qubic-rpc-doc.html)

> Learn how to operate your own RPC Server for Qubic: [How to build your own Qubic RPC Server](how-to-qubic-rpc.md)

### Public available RPC/API's

| Base Url | Version/State | Use Case |
| -------- | ------- | ---- |
| testapi.qubic.org  | V2 | Test RPC/API with the latest features. Use this in your development environment or to try out the latest features.    |
| rpc-staging.qubic.org | V2 | Public RPC/API for staging (production testing) purposes. Normally only for internal Testing. Ask us if you want to test the latest features that will be in production soon.   |
| rpc.qubic.org    | V1   | Public RPC/API for general purposes. Use this in your productive applications. |

## Exchange integration
To partner up with Qubic from a perspective of an exchange, there are two main approaches how you can integrate Qubic into your business logic:

1. TX Based
2. Balance Based

### TX Based Workflow
This is the classical way you may already know from other blockchains. You can do block scans for deposits and send transactions via RPC call to the network.

> [Read more about the TX Based Workflow](tx-based-use-case.md).

For the transaction based approach, Qubic offers a RPC Server. Please ask us for detailed information and access.

The Qubic RPC Server is built and operated with the following software:

- `qubic-http` https://github.com/qubic/qubic-http
- `go-archiver` https://github.com/qubic/go-archiver
- `go-node-fetcher` https://github.com/qubic/go-node-fetcher
- `go-node-connector` https://github.com/qubic/go-node-connector
- `ts-library` https://github.com/qubic/ts-library (https://www.npmjs.com/package/qubic-ts-library)


### Balance Based Workflow
In contrary to the TX Based Workflow, with the balance workflow you can implement Qubics native way of integration.

In Qubic the Balance of an Address can be altered without a Transaction being issued. This can be invoked by any Smart Contract.

Therefore you can also use the Balance Based approach to interact with Qubic.

We are building the application `qubic-lrv` for this. Which is currently in testing state.

Please read here more when testing state is passed.

References:
- `qubic-lrv` https://github.com/computor-tools/qubic-lrv