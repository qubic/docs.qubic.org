---
sidebar_label: 'Quorum'
---

# Quorum Consensus Mechanism

The Qubic network employs a unique consensus mechanism known as **Quorum**, which forms the backbone of its decentralized decision-making process. This system ensures network security, transaction validation, and protocol updates through a collaborative approach.

### What is a Quorum?

In the context of Qubic, a Quorum refers to a specific number of network participants (called Computors) required to reach consensus on various network operations and decisions. This mechanism is designed to balance efficiency, security, and decentralization.

### Key Components of the Quorum System

1. **Computors**: These are the 676 nodes responsible for maintaining the Qubic network. Computors play a crucial role in validating transactions and participating in the consensus process.

2. **Consensus Thresholds**:
   - **Status Quo Maintenance**: Requires agreement from at least 226 Computors.
   - **Network Changes**: Requires agreement from at least 451 Computors.

### How Quorum Consensus Works

1. **Proposal Submission**: Any change or decision requiring network consensus is submitted as a proposal.

2. **Voting Process**: Computors review the proposal and cast their votes.

3. **Consensus Achievement**:
   - For maintaining the current state (status quo), at least 226 Computors must agree.
   - For implementing changes, a higher threshold of 451 Computors must reach agreement.

4. **Decision Implementation**: Once the required threshold is met, the decision is considered final and is implemented across the network.

### Advantages of the Quorum System

1. **Enhanced Security**: The high threshold for changes (451 out of 676) makes it extremely difficult for malicious actors to manipulate the network.

2. **Efficient Decision-Making**: The lower threshold for maintaining status quo (226) allows for quick confirmation of normal operations.

3. **Decentralization**: With 676 Computors, the system is more decentralized than many other blockchain networks, reducing the risk of centralized control.

4. **Flexibility**: The system can adapt to different types of decisions by using varying thresholds.

### Example Scenario

Imagine the Qubic network needs to implement a protocol upgrade:

1. The upgrade proposal is submitted to the network.
2. All 676 Computors review the proposal.
3. For the upgrade to be approved, at least 451 Computors must vote in favor.
4. If 451 or more Computors agree, the upgrade is implemented. If not, the current protocol remains unchanged.

### Quorum Representation

An interesting feature of the Qubic Quorum system is that a single Computor can speak on behalf of the entire Quorum once consensus is reached. This allows for efficient communication of decisions without requiring input from all 676 Computors for every interaction.

### Conclusion

The Quorum consensus mechanism in Qubic provides a robust, secure, and decentralized approach to network governance. By requiring agreement from a significant portion of network participants, it ensures that decisions are made in the best interest of the network as a whole, while maintaining efficiency in day-to-day operations.
