---
sidebar_label: 'Smart Contracts'
---

## Smart Contracts

Smart contracts are self-executing agreements with the terms of the contract directly written into code. In the Qubic ecosystem, smart contracts play a crucial role in enabling complex, automated transactions and decentralized applications (DApps).

### Key Features of Qubic Smart Contracts

1. **Qubic Units (QUs) as "Energy"**
   - Smart contracts in Qubic use QUs as a form of computational "energy."
   - This concept is similar to "gas" in other blockchain systems but with unique properties.
   - Example: A smart contract might require 100 QUs to execute a specific function.

2. **Frictionless and Scalable**
   - Qubic's architecture allows for highly efficient smart contract execution.
   - Contracts can process transactions quickly, often in mere seconds.
   - This scalability enables complex applications that might be impractical on other platforms.

3. **Deflationary Mechanism**
   - QUs used in smart contract execution are "burned" or permanently removed from circulation.
   - This process helps to control inflation and potentially increase the value of remaining QUs over time.
   - Example: If a contract burns 10 QUs per execution and is run 1,000 times, it would remove 10,000 QUs from the total supply.

4. **Oracle Integration**
   - Oracles are external data sources that can feed real-world information into smart contracts.
   - Qubic's smart contracts can incorporate this data, expanding their utility beyond on-chain information.
   - Use case: A weather insurance contract could use oracle data to automatically pay out claims based on recorded temperatures.

5. **Self-Financing Capability**
   - Smart contracts in Qubic can be designed to collect funds during their Initial Coin Offering (ICO).
   - This feature allows developers to fund ongoing maintenance and improvements to their contracts.

6. **User-Requested QUs**
   - Contracts can be programmed to request QUs from users for specific services.
   - This creates a flexible model for monetizing decentralized applications.

### Quottery: A Case Study in Qubic Smart Contracts

Quottery is one of the first smart contracts deployed on the Qubic network, showcasing the platform's capabilities through a decentralized betting system.

#### How Quottery Works:

1. Users place bets on various outcomes (e.g., sports events, elections).
2. The contract automatically manages the betting pool.
3. Once the event concludes, the contract distributes winnings as follows:
   - 10% to a computer-controlled fund
   - 20% to shareholders as dividends
   - 70% to the winner(s) of the bet

#### Significance of Quottery:

- **Transparency**: All transactions and payouts are visible on the blockchain.
- **Fairness**: The code ensures automatic and impartial distribution of winnings.
- **Oracle Implementation**: Quottery marks the first use of oracles in the Qubic network, demonstrating how external data can be reliably integrated into smart contracts.

### Developing Smart Contracts on Qubic

Qubic uses C++ for smart contract development, offering several advantages:

1. **Performance**: C++ allows for efficient, low-level operations, crucial for complex contracts.
2. **Familiarity**: Many developers are already familiar with C++, lowering the barrier to entry.
3. **Tooling**: Developers can leverage existing C++ development tools and libraries.

Example of a simple Qubic smart contract structure:

```cpp
#include <qubic/contract.hpp>

class MyContract : public qubic::Contract {
public:
    void initialize() override {
        // Contract initialization code
    }

    void execute(const qubic::Transaction& tx) override {
        // Main contract logic
    }

    // Additional contract methods
};

QUBIC_EXPORT_CONTRACT(MyContract)
```

### Future Developments

The Qubic team is actively working on expanding smart contract capabilities, including:

- Enhanced developer tools and documentation
- More complex oracle systems for diverse data inputs
- Integration with the Aigarth AI system for intelligent contract behavior
- Standardized templates for common contract types (e.g., tokens, voting systems)

By leveraging these advanced features, Qubic aims to position itself as a leading platform for next-generation decentralized applications and autonomous systems.