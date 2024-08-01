---
sidebar_label: 'Glossary'
---

# Glossary of Qubic Terminology

This glossary provides detailed explanations of key terms and concepts used in the Qubic ecosystem. Understanding these terms is crucial for navigating the Qubic network and its various components.

## Core Network Components

### Computors
**Definition**: The 676 nodes responsible for validating transactions and maintaining the Qubic network.

**Detailed Explanation**:
- Computors are the backbone of the Qubic network, similar to validators in other blockchain systems.
- They play a crucial role in the consensus mechanism and network security.
- The specific number (676) is chosen to balance decentralization and efficiency.
- Computor selection is based on performance in the Useful Proof-of-Work (UPoW) system.

**Key Points**:
- 226 Computors are needed to maintain the status quo.
- 451 Computors are required to implement changes.
- This structure ensures both stability and the ability to evolve the network.

### Quorum
**Definition**: A consensus mechanism requiring agreement from a specific number of Computors for decision-making.

**Detailed Explanation**:
- The Quorum system is designed to ensure democratic decision-making within the network.
- It prevents any single entity or small group from having undue influence over the network.

**Key Points**:
- For changes: At least 451 out of 676 Computors must agree.
- For maintaining status quo: At least 226 Computors are required.
- One quorum member can speak for the whole quorum, streamlining communication.

### Arbitrator
**Definition**: An entity that oversees the proper functioning of Computors and manages certain aspects of the network.

**Detailed Explanation**:
- The Arbitrator acts as a supervisory body, ensuring the integrity of the network.
- It has specific responsibilities that are crucial for network operations but operates independently of the Quorum.

**Key Responsibilities**:
1. Ensures proper behavior of Computors
2. Publishes lists of active Computors
3. Manages the Arbitrator wallet

**Important Note**: The Arbitrator supervises the Quorum but is not controlled by it, maintaining a balance of power within the system.

## Financial Components

### Arbitrator Wallet
**Definition**: A special wallet that receives Qubic Units (QUs) not earned by underperforming Computors.

**Detailed Explanation**:
- This wallet serves as a mechanism for redistributing unearned rewards.
- It acts as a "founder tax," receiving approximately 1% of generated QUs.

**Security Measure**:
- The wallet's seed (private key) is split between three individuals.
- Each individual holds 2/3 of the seed.
- Any two can restore the full seed, ensuring both security and accessibility.

### Ecosystem Fund
**Definition**: A fund managed by the Steering Committee (SteCo) to support and grow the Qubic ecosystem.

**Detailed Explanation**:
- This fund is used for various initiatives that contribute to the development and expansion of Qubic.
- It plays a crucial role in the strategic growth of the ecosystem.

**Potential Uses**:
- Funding development projects
- Supporting marketing initiatives
- Facilitating exchange listings
- Sponsoring community events or educational programs

## Governance Structures

### Steering Committee (SteCo)
**Definition**: A group responsible for managing the ecosystem fund and guiding the strategic direction of Qubic.

**Detailed Explanation**:
- The SteCo acts as a bridge between the core development team and the broader community.
- It plays a crucial role in decision-making processes that affect the entire ecosystem.

**Key Responsibilities**:
1. Managing and allocating the ecosystem fund
2. Guiding the strategic direction of Qubic
3. Collaborating with the community on important decisions
4. Overseeing various aspects of project development and growth

**Importance**: The SteCo ensures that the Qubic project maintains a balance between centralized leadership and community-driven development, fostering a more democratic and inclusive ecosystem.
