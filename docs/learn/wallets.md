---
sidebar_label: 'Wallets'
---

# Wallets
In Qubic we currently have two main types of Wallets.

1. Direct Network Connected Wallet
2. Proxied Wallet

## Overview
|  Type 	|  Advantages 	|  Disadvantages 	|  Wallets 	|
|---	|---	|---	|---	|
|  Direct 	|  - Most plain without any 3rd party SW <br /> - Mostly Open Source |  - More dificult to handle. <br /> - Need to have direct connection to Qubic Peers 	|   https://github.com/computor-tools/qubic-js (Alpha)	|
|  Proxied 	|  - Easy to handle <br /> - Runs everywhere without direct connection to the network 	|  - Server-Part of Software must not be Open Source <br /> - if the proxy service is offline, you can't interact with the network 	|  https://wallet.qubic.li (Beta)	|


## Direct Network Connected Wallet
This Wallet uses a direct connection to the Network. It Connects to at least 3 Qubic Nodes and interacts directly with them.


## Proxied Wallet
A Proxied Wallet uses a proxy service to interact with the network. The proxy provider ensures that your transaction is sent to the network.
