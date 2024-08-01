---
sidebar_label: 'Separation of Power'
---

## Separation of Power in the Qubic Ecosystem

The Qubic ecosystem implements a robust separation of power structure to ensure decentralization, security, and efficient governance. This system is designed to prevent any single entity from having undue control over the network while maintaining operational efficiency.

### Key Components of Power Separation

1. **Computors**
   - A network of 676 validator nodes
   - Responsible for transaction validation and network maintenance
   - Selected based on computational power and performance

2. **Quorum**
   - A consensus mechanism requiring agreement from a majority of Computors
   - Ensures decentralized decision-making for network changes

3. **Arbitrator**
   - An oversight entity that monitors Computor behavior
   - Publishes lists of approved Computors
   - Manages the Arbitrator wallet

4. **Steering Committee (SteCo)**
   - Guides strategic direction of the Qubic ecosystem
   - Manages the ecosystem fund
   - Facilitates communication between various stakeholders

### Detailed Breakdown of Power Distribution

#### Computors
Computors form the backbone of the Qubic network. Their responsibilities include:

- Validating transactions
- Maintaining network integrity
- Participating in the consensus mechanism

To ensure a balance of power:
- A minimum of 226 Computors are required to maintain the status quo
- At least 451 Computors must agree to implement changes

This structure prevents a small group from dominating the network while allowing for efficient operation.

#### Quorum Consensus Mechanism
The Quorum system is designed to achieve decentralized decision-making:

- Requires agreement from at least 451 out of 676 Computors for changes
- Only 226 Computors needed to maintain the current state
- Prevents unilateral control by any single entity or small group

Example:
```
Total Computors: 676
Computors needed for change: 451 (66.7%)
Computors needed for status quo: 226 (33.4%)
```

This system ensures that significant changes require broad consensus, while day-to-day operations can continue smoothly with a smaller agreement threshold.

#### Arbitrator
The Arbitrator plays a crucial oversight role:

- Ensures proper behavior of Computors
- Publishes lists of approved Computors each epoch
- Manages the Arbitrator wallet, which receives a small percentage of generated QUs

While the Arbitrator has significant responsibilities, it operates independently from the Quorum, maintaining a check on power:

- The Arbitrator supervises the Quorum but is not controlled by it
- This separation prevents collusion between the oversight entity and the decision-making body

#### Steering Committee (SteCo)
The SteCo acts as a bridge between various stakeholders:

- Manages the ecosystem fund
- Guides strategic direction in collaboration with the community
- Facilitates communication between developers, users, and other stakeholders

By involving multiple parties in decision-making, the SteCo helps prevent centralization of power while ensuring efficient ecosystem management.

### Benefits of Power Separation

1. **Enhanced Security**: Multiple layers of validation and oversight reduce the risk of attacks or manipulation.
2. **Decentralization**: No single entity can make unilateral decisions affecting the entire network.
3. **Efficient Governance**: The tiered structure allows for both rapid day-to-day operations and careful consideration of major changes.
4. **Community Involvement**: The system encourages active participation from various stakeholders in the ecosystem's development and governance.

By implementing this comprehensive separation of power, Qubic aims to create a robust, decentralized, and secure ecosystem that can adapt and grow while maintaining its core principles of distributed governance.