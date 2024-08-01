---
sidebar_label: 'Arbitrator'
---

## Arbitrator

The Arbitrator is a crucial component of the Qubic ecosystem, serving as a supervisory entity that ensures the proper functioning and integrity of the network. This role is distinct from traditional blockchain systems and plays a vital part in Qubic's unique architecture.

### Key Responsibilities

The Arbitrator's primary responsibilities include:

1. **Computor Oversight**: Monitoring and ensuring the proper behavior of Computors (the network's validators).
2. **Computor List Publication**: Regularly publishing updated lists of active Computors.
3. **Network Parameter Management**: Setting and adjusting parameters for the mining algorithm.
4. **Fault Tolerance**: Developing and implementing mechanisms to replace faulty Computors.
5. **Wallet Management**: Overseeing the Arbitrator wallet, which receives unearned QUs from underperforming Computors.

### Relationship with the Quorum

While the Arbitrator supervises the Quorum (the consensus mechanism of Qubic), it maintains independence from it. This separation of powers ensures a system of checks and balances within the network. 

- The Arbitrator can intervene if the Quorum behaves improperly.
- The Quorum cannot directly control or override the Arbitrator's decisions.

### The Arbitrator Wallet

A key aspect of the Arbitrator's role is the management of the Arbitrator wallet. This wallet serves several purposes:

- **Unearned QU Collection**: It receives Qubic Units (QUs) that were not earned by Computors due to underperformance.
- **Founder Tax**: Approximately 1% of generated QUs are allocated to this wallet, functioning as a "founder tax."
- **Ecosystem Development**: Funds from this wallet are partially used to support and develop the Qubic ecosystem.

#### Security Measures

To ensure the security and integrity of the Arbitrator wallet, a split-key mechanism is employed:

- The wallet's seed is divided among three individuals.
- Each individual holds 2/3 of the seed.
- Any two of the three individuals can reconstruct the full seed if necessary.

This approach balances security with practicality, preventing single-point failures while allowing for recovery if needed.

### Importance in the Qubic Ecosystem

The Arbitrator plays a critical role in maintaining the stability and fairness of the Qubic network:

1. **Network Integrity**: By overseeing Computors, the Arbitrator helps prevent malicious behavior and ensures network reliability.
2. **Adaptive Governance**: The ability to adjust network parameters allows for responsive governance as the ecosystem evolves.
3. **Resource Allocation**: Through the management of unearned QUs, the Arbitrator helps incentivize good performance and supports ecosystem growth.

### Example Scenario

To illustrate the Arbitrator's role, consider this scenario:

1. The network detects that a group of Computors is consistently underperforming.
2. The Arbitrator reviews the situation and decides to reallocate the unearned QUs to the Arbitrator wallet.
3. These funds are then used to finance a development grant for improving Computor efficiency.
4. The Arbitrator publishes an updated Computor list, potentially replacing some underperforming nodes.

This example demonstrates how the Arbitrator can respond to network issues, reallocate resources, and drive improvements in the ecosystem.

By balancing centralized oversight with decentralized operations, the Arbitrator helps ensure that Qubic can adapt and thrive while maintaining its core principles of fairness and efficiency.