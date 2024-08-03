---
sidebar_label: 'Security'
---

# Security Measures in Qubic

Security is a paramount concern in any blockchain or distributed ledger technology. Qubic implements a multi-faceted approach to ensure the integrity, confidentiality, and availability of its network. This section outlines the key security measures employed by Qubic.

### 1. Quorum-based Consensus

Qubic utilizes a quorum-based consensus mechanism, which forms the foundation of its security model.

- **How it works**: The network requires agreement from at least 451 out of 676 Computors (network validators) to validate transactions and implement changes.
- **Security benefit**: This approach significantly increases resistance to attacks, as an attacker would need to compromise a large number of Computors simultaneously to manipulate the network.
- **Example**: In a traditional 51% attack scenario, an attacker needs to control just over half of the network. In Qubic's system, they would need to control approximately 66.7% of the Computors, making such attacks exponentially more difficult and costly.

### 2. K12 Hash Algorithm

Qubic employs the K12 hash algorithm for its cryptographic operations.

- **What is K12**: It's a cryptographic hash function developed by the Keccak team, who also created SHA-3.
- **Security benefits**:
  - Provides robust cryptographic security for key generation and transactions
  - Offers superior speed compared to traditional algorithms like SHA-256
- **Usage in Qubic**: K12 is used to transform alphanumeric seeds into high-entropy private keys, ensuring the uniqueness and security of each key.

### 3. FourQ Curve for Digital Signatures

Qubic uses the FourQ elliptic curve for digital signatures.

- **What is FourQ**: It's a high-performance elliptic curve designed for fast and secure digital signatures.
- **Security benefits**:
  - Provides strong cryptographic security
  - Enables faster signature generation and verification compared to many other elliptic curves
- **Implementation**: FourQ is used in the public key generation process, enhancing the overall security of the Qubic ecosystem.

### 4. Epoch-based Processing

Qubic's network operates in weekly epochs, which contributes to its security model.

- **How it works**: The network state is processed and updated at regular intervals (epochs).
- **Security benefits**:
  - Limits the time window for potential attacks
  - Allows for regular security updates and improvements
  - Provides a mechanism for periodic reassessment of Computor performance and network health

### 5. Open-source Code

Qubic maintains its core codebase as open-source, which indirectly contributes to its security.

- **Why it matters**: Open-source code allows for community review and auditing.
- **Security benefits**:
  - Enables rapid identification and resolution of potential vulnerabilities
  - Fosters trust and transparency in the network's operation
  - Allows for continuous improvement through community contributions

### 6. Decentralized Architecture

The decentralized nature of Qubic's network architecture is itself a security feature.

- **How it works**: The network is distributed across numerous Computors, with no single point of control.
- **Security benefits**:
  - Eliminates single points of failure
  - Increases overall network resilience against attacks and outages
  - Makes it difficult for malicious actors to target the entire network

### Ongoing Security Efforts

Qubic is committed to continuous security improvements:

1. **Regular audits**: The team conducts and encourages third-party security audits of the network and its components.
2. **Responsible disclosure program**: Qubic maintains a program for the responsible disclosure of discovered vulnerabilities.
3. **Community engagement**: The team actively engages with the community to identify and address potential security concerns.

By implementing these comprehensive security measures, Qubic aims to provide a robust and trustworthy platform for its users and developers. However, as with any technology, users should remain vigilant and follow best practices for personal security, such as safeguarding private keys and using secure devices for transactions.
