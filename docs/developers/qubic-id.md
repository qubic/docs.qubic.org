---
title: Qubic ID
---

# Qubic ID

The Qubic ID system is designed to generate and verify unique identifiers based on cryptographic keys. Here's a brief overview of how it works:

1. **Seed to Private Key:** A seed string is converted into a private key using a hashing function. This ensures that the private key is unique and securely derived from the seed.

2. **Private Key to Public Key:** The private key is then used to generate a public key using the SchnorrQ algorithm. This public key is essential for cryptographic operations and identity verification.

3. **Public Key to Human-Readable ID:** The public key is converted into a human-readable ID. This involves dividing the public key into segments, converting each segment into a base-26 string, and appending a checksum for validation.

4. **Creating the ID Package:** The system combines the private key, public key, and human-readable ID into a complete ID package. This package can be used for various operations within the Qubic Network.

5. **ID Verification:** The system can verify the validity of a human-readable ID by converting it back to a public key and comparing it with the original ID. This ensures that the ID is authentic and has not been tampered with.

The Qubic ID system ensures that each ID is unique, verifiable, and securely generated using cryptographic principles, providing a robust mechanism for identity management within the Qubic Network.
