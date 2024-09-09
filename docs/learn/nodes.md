---
sidebar_label: 'Node Types'
---

# Node Types in the Qubic Network

Within the Qubic ecosystem, two primary node types work in tandem to support its decentralized infrastructure - the Computors and the Miners. These entities shoulder unique responsibilities and ensure the efficient functioning of the network.

<details>
  <summary>Computors vs. Miners in a nutshell</summary>
  <div>
    <p>
    Traditional blockchains use Miners to validate and add transactions to the blockchain. They compete for rewards in the form of cryptocurrency. Qubic, however, pivots to Computors that execute varied tasks and receive rewards in QUs based on overall participation. This distinction, including their reward mechanisms and roles, sets Computors apart from traditional Miners, marking a shift in how decentralized systems might operate in the future.
    </p>
  </div>
</details>

## Computors

A Computor in the Qubic system is a specialized node designed to execute tasks, ranging from running smart contracts to facilitating transactions on the spectrum. Unlike traditional blockchain systems where Miners verify and add transactions, Computors in the Qubic ecosystem bear a broader scope of duties. They are instrumental in executing tasks, participating in decentralized quorum-based decision making and maintaining the tokenomic equilibrium of the network.

**Key Features**:
- Role in maintaining and ensuring network's decentralized nature.
- Allocation of a portion of newly minted $QUBIC each epoch for their overall network participation.
- Involvement in essential network voting and decision-making processes.

**Limitation**: There is a fixed upper limit of 676 Computors operating in the Qubic network at any given time, ensuring optimal performance and streamlined decision-making. A weekly score ranking based on solutions deliverd by their Miners determines the top 451 performing Computors, who maintain their status, while the remaining 225 spots are filled from the pool of Candidates and lower-ranking Computors each epoch.

:::tip
**Challenges of Running a Computor in Qubic:**

- Operates on bare metal, requiring UEFI control.
- Regular compilation of qubic.cpp every epoch.
- Continuous system updates.
- Need for backup systems to ensure consistent ticking.
- Competition: Must outperform candidates with enough mining power assigned to your IDs to retain spot.

Running a Computor demands technical expertise and constant vigilance. Ensure you're prepared for these challenges if considering operating one!
:::

## Miners

**Miners** in the Qubic ecosystem differ from their counterparts in traditional blockchain networks. Instead of competing to verify and add transactions to a blockchain, Miners in Qubic work on specific computational problems or tasks assigned to them by Computors. Once they find a solution, they relay it back to the respective Computor. This interaction not only assists in verifying the integrity of the tasks but also aids in the overall processing and validation of actions within the network.

**Key Features**:
- Receive computational problems or tasks (represented by IDs) from Computors.
- Upon successful problem-solving, relay solutions back to Computors, contributing to their score.
- Integral to the Qubic's innovative system, where the emphasis is not solely on transaction verification but on overall task execution.

**Potential**: The Qubic network allows for a theoretically unlimited number of Miners, promoting widespread participation and ensuring robust computational power backing the system.

:::info
**Why become a Miner?**

It's crucial to note that only Computors receive weekly payments from the Qubic protocol. However, to maintain their position among the 676 Computors, they must accumulate sufficient solutions each epoch through their associated miners. Consequently, it's inevitable that every Computor will eventually need to cultivate a robust mining pool around them and provide incentives via pool payouts.

Running a Miner is way easier and there are already public [pools](/learn/pool) available.
:::



It's essential for any participant or observer in the Qubic network to understand this fundamental distinction between Miners and Computors. As we progress into this new era of Qubic, the roles and responsibilities of these Computors will undoubtedly become increasingly important.
