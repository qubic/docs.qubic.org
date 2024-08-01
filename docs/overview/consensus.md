---
sidebar_label: 'Qubic Consensus'
---

## Qubic Consensus Mechanism

The Qubic network employs a unique and innovative consensus mechanism that combines elements of traditional blockchain systems with advanced distributed computing concepts. This section provides a detailed overview of the Qubic consensus mechanism, its key components, and how it ensures network security and efficiency.

### Quorum-based Consensus Model

At the core of Qubic's consensus mechanism is a **quorum-based model**, which draws inspiration from research by renowned computer scientists Nick Szabo and Leslie Lamport. This model is designed to achieve agreement among a distributed set of nodes in an efficient and secure manner.

#### Key Components:

1. **Computors**: The network consists of 676 special nodes called Computors, which are responsible for validating transactions and maintaining the network's integrity.

2. **Quorum Thresholds**:
   - To implement changes: At least 451 Computors (2/3 majority) must agree.
   - To maintain status quo: A minimum of 226 Computors (1/3 + 1) is required.

3. **Arbitrator**: An entity that oversees Computor behavior and publishes the list of active Computors for each epoch. The Arbitrator is not controlled by the Quorum, ensuring an additional layer of checks and balances.

### Consensus Process

1. **Transaction Submission**: Users submit transactions to the network.
2. **Computor Validation**: Computors receive and validate these transactions.
3. **Quorum Agreement**: For a transaction to be confirmed, it must be agreed upon by the required quorum of Computors.
4. **Finality**: Once the quorum is reached, the transaction is considered final and irreversible.

### Advantages of Qubic's Consensus Mechanism

1. **High Performance**: The system achieves absolute finality within seconds, significantly faster than many traditional blockchain networks.

2. **Enhanced Security**: The quorum-based approach makes it extremely difficult to execute attacks such as 51% attacks or double-spends.

3. **No Forks**: Unlike proof-of-work systems, Qubic's consensus mechanism does not allow for chain forks, ensuring a single, consistent state of the network.

4. **Increased Decentralization**: With 676 Computors and constant competition for these positions, Qubic achieves a higher level of decentralization compared to many proof-of-work cryptocurrencies.

### Useful Proof-of-Work (UPoW)

While not directly part of the consensus mechanism, Qubic incorporates a **Useful Proof-of-Work (UPoW)** system for Computor selection:

- Miners compete by contributing computational power to AI-related tasks.
- This process serves a dual purpose:
  1. Selecting Computors for the next epoch.
  2. Advancing AI research and development.

### Example: Consensus in Action

To illustrate how the consensus mechanism works, consider the following scenario:

1. A user initiates a transaction to transfer 100 QUs to another address.
2. The transaction is broadcast to the network and received by the Computors.
3. Each Computor independently validates the transaction (checking balance, signature, etc.).
4. If at least 451 Computors agree that the transaction is valid, it is confirmed and added to the network's state.
5. The transaction is now final and cannot be reversed or altered.

### Conclusion

Qubic's consensus mechanism represents a significant advancement in distributed ledger technology. By combining a quorum-based system with innovative features like UPoW, Qubic achieves a balance of security, efficiency, and decentralization that sets it apart in the cryptocurrency landscape.
