---
sidebar_label: 'Oracles'
---

## Oracles in Qubic

### Introduction to Oracles

Oracles play a crucial role in the Qubic ecosystem by bridging the gap between the blockchain and the external world. They serve as trusted data providers that feed real-world information into smart contracts, enabling these contracts to interact with and respond to events outside the blockchain.

### Functionality of Qubic Oracles

In the Qubic network, oracles perform several key functions:

1. **Data Retrieval**: Oracles collect data from various external sources, such as APIs, databases, or IoT devices.
2. **Data Verification**: They verify the accuracy and authenticity of the collected data to ensure its reliability.
3. **Data Transmission**: Oracles securely transmit the verified data to smart contracts on the Qubic network.
4. **Trigger Events**: Based on the provided data, oracles can trigger specific events or actions within smart contracts.

### Types of Oracles in Qubic

Qubic supports different types of oracles to cater to various use cases:

- **Software Oracles**: These interact with online sources of information, such as websites or databases.
- **Hardware Oracles**: These collect data from the physical world through sensors or other IoT devices.
- **Consensus-based Oracles**: These aggregate data from multiple sources to provide a more reliable and decentralized input.

### Implementation of Oracles in Qubic

Qubic's oracle system is designed to be:

1. **Decentralized**: Multiple independent oracles can provide data, reducing the risk of manipulation or failure.
2. **Transparent**: The data provided by oracles is verifiable on the Qubic network.
3. **Secure**: Cryptographic techniques are used to ensure the integrity of the data.

### Example Use Case: Quottery

Quottery, one of Qubic's first smart contracts, demonstrates the practical application of oracles:

```markdown
Quottery: A Decentralized Betting Platform
- Uses oracles to fetch real-world sports results
- Enables transparent and automated payouts based on oracle-provided data
- Payout structure:
  * 10% to a computer-controlled fund
  * 20% to shareholders as dividends
  * 70% to the winner(s) of the bet
```

This implementation showcases how oracles can facilitate complex, real-world interactions within a blockchain ecosystem.

### Future Developments

The Qubic team is actively working on enhancing the oracle system:

- Improving data source diversity
- Implementing more sophisticated consensus mechanisms for oracle data
- Developing specialized oracles for specific industries (e.g., finance, healthcare)

### Conclusion

Oracles are a fundamental component of the Qubic network, enabling smart contracts to interact with the real world in a secure and decentralized manner. As the Qubic ecosystem continues to evolve, the role of oracles is expected to expand, opening up new possibilities for decentralized applications across various industries.