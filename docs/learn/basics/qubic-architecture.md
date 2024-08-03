---
sidebar_label: 'Qubic Architecture'
---

# Architecture

The Qubic network architecture is designed to provide a high-performance, scalable, and secure distributed ledger system. This section outlines the key components and concepts that form the foundation of Qubic's innovative architecture.

### Ticks and Epochs

Qubic's architecture is built around two fundamental time-based concepts: **ticks** and **epochs**.

#### Ticks
- Ticks are the Qubic equivalent of blocks in traditional blockchain systems.
- They occur approximately every 5 seconds, providing rapid transaction processing.
- The tick speed is adjustable, allowing for future optimization as the network evolves.

#### Epochs
- An epoch is a longer time period, typically spanning one week.
- Epochs serve as checkpoints for major network updates and computor selection.
- Currently, epoch changes involve brief network downtime for upgrades, but seamless transitions are planned for future implementations.

### High-Performance Computing

Qubic's architecture is optimized for maximum performance:

- The network runs entirely in RAM on bare-metal servers.
- It operates without a traditional operating system, reducing overhead.
- This approach enables Qubic to achieve impressive transaction speeds, with live tests demonstrating over 40 million transactions per second.

### Transaction Processing

Qubic's transaction model is designed for efficiency and flexibility:

- Transactions are treated as data packets with assigned handlers.
- Each transaction can include up to 1024 bytes of extra data, allowing for versatile use cases.
- Transactions are pruned (removed from active storage) at each epoch change, with only balance summaries persisting.
- This pruning mechanism helps maintain network efficiency and reduces storage requirements.

#### Transaction Finality
- Qubic achieves sub-second finality for transactions.
- Once a transaction is included in a tick, it is considered final and irreversible.
- This absolute finality eliminates the possibility of reorganizations, forks, or 51% attacks, enhancing security and reliability.

### Consensus Mechanism

Qubic employs a unique consensus mechanism based on a quorum of computors:

- The network is maintained by 676 computor nodes.
- Consensus requires agreement from at least 451 computors to implement changes.
- 226 computors are sufficient to maintain the status quo.

This approach provides a balance between decentralization and efficient decision-making.

### Network State Management

Qubic uses a set of specialized files to manage the network state:

#### Spectrum File
- Contains entity information, including balances and transfer counts for all addresses.
- Updated and hashed with each tick to ensure consistency.

#### Universe File
- Stores information on asset holdings per address.
- Must match the Spectrum file hash for quorum consensus.

This file-based approach allows for efficient state management without requiring full historical data retention.

### Computors and Mining

The Qubic network is secured and maintained through a combination of computors and miners:

#### Computors
- 676 validator nodes responsible for network integrity and performance.
- Selected each epoch based on mining power.
- A maximum of 225 validators can be replaced each epoch, encouraging participation while ensuring network stability.

#### Mining
- Utilizes a Useful Proof-of-Work (UPoW) system.
- Miners contribute computational power to solve AI-related tasks.
- Mining performance determines eligibility for computor selection.

### Cryptographic Security

Qubic implements robust cryptographic measures to ensure network security:

#### K12 Hash Algorithm
- Developed by the Keccak team (creators of SHA-3).
- Chosen for its superior speed and security compared to traditional algorithms like SHA-256.
- Used for transforming alphanumeric seeds into high-entropy private keys.

#### Key and Address Generation
- Uses a 55-character lowercase alphanumeric seed to generate 256-bit private keys.
- Public keys are generated using elliptic curve multiplication with the FourQ curve.
- The FourQ curve provides enhanced cryptographic security and efficient digital signatures.

### Network Accessibility

Qubic's architecture is designed for easy access and verification:

- The Spectrum (network state) is directly accessible from any computor.
- Users can verify transactions and smart contract status in real-time using the Spectrum Information Tool (qubic.li CLI).

This architecture combines high performance, security, and accessibility, positioning Qubic as a next-generation distributed ledger technology capable of supporting a wide range of applications and use cases.