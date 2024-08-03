---
sidebar_label: 'Spectrum'
---

# Spectrum: The Backbone of Qubic's State Management

### Introduction to the Spectrum

The Spectrum is a fundamental component of the Qubic network, serving as the primary mechanism for maintaining and updating the state of all entities within the system. It plays a crucial role in ensuring the integrity and consistency of the network's data.

### Key Features of the Spectrum

1. **State Management**: The Spectrum stores essential information about all entities in the Qubic network, including:
   - Account balances
   - Transfer counts
   - Smart contract states

2. **Real-time Updates**: The Spectrum is updated with each tick (Qubic's equivalent of a block), ensuring that the network always reflects the most current state.

3. **Hashing for Integrity**: After each update, the Spectrum is hashed to create a unique fingerprint of the current network state.

4. **Consensus Mechanism**: The Spectrum hash is used as part of Qubic's consensus process, with at least two-thirds of nodes required to agree on the hash for valid consensus.

### How the Spectrum Works

1. **Tick Processing**: 
   - Every 5 seconds (approximately), a new tick occurs in the Qubic network.
   - During this tick, all transactions and state changes are processed.

2. **State Update**:
   - The Spectrum file is updated to reflect all changes that occurred during the tick.
   - This includes modifications to account balances, transfer counts, and smart contract states.

3. **Hashing**:
   - After all updates are applied, the entire Spectrum file is hashed using the K12 algorithm.
   - This hash serves as a compact representation of the entire network state.

4. **Consensus**:
   - Computors (Qubic's validators) compare their Spectrum hashes.
   - If at least 451 out of 676 Computors (two-thirds majority) agree on the hash, consensus is achieved.

### Importance of the Spectrum

The Spectrum is critical to Qubic's operation for several reasons:

1. **Efficiency**: By maintaining a compact representation of the network state, Qubic can achieve high transaction throughput and quick finality.

2. **Security**: The hashing and consensus mechanism protect against unauthorized state changes and ensure network integrity.

3. **Scalability**: The Spectrum allows Qubic to process a large number of transactions without needing to store the entire transaction history.

### Accessing the Spectrum

Developers and users can access Spectrum information through the Spectrum Information Tool (qubic.li CLI). This tool allows for real-time verification of transactions and smart contract states, enhancing transparency and enabling rapid development of Qubic-based applications.

### Example: Spectrum Update Process

To illustrate how the Spectrum works, let's consider a simple transaction:

1. User A sends 100 QUs to User B.
2. During the next tick, this transaction is processed.
3. The Spectrum is updated:
   - User A's balance is decreased by 100 QUs
   - User B's balance is increased by 100 QUs
   - Both users' transfer counts are incremented
4. The updated Spectrum is hashed.
5. Computors compare their Spectrum hashes to achieve consensus.

This process ensures that all nodes in the network have a consistent view of the current state, without needing to store or process the entire transaction history.