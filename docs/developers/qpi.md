---
title: Qubic Programming Interface (QPI)
---

# Qubic Programming Interface(QPI) Guideline

`qpi.h` is the Qubic Programming Interface for implementing the smart contracts. It is available automatically in the smart contract implementation header files. This page outlines the guidelines for developing secure and efficient Qubic contracts.
Adherence to these guidelines is crucial for ensuring the proper functionality and security of your contracts within the Qubic environment.

## Concepts

The state is the persistent memory of the contract that is kept aligned in all nodes. A contract can have member functions and procedures. 

Functions cannot change the state of the contract. They can be called via a `RequestContractFunction` network message. 

Procedures can change the state of the contract. They are invoked by a transaction and run when the tick containing the transaction is processed. 

There are some special procedures that are called by the system at the beginning of the tick etc. 

A call of a user procedure usually goes along with a transfer of an invocation reward from the invoking user to the contract. 

Procedures can call procedures and functions of the same contract and of contracts with lower contract index. 

Functions can call functions of the same contract and of contracts with lower contract ID. 

Private functions and procedures cannot be called from other contracts. 

In order to be available for invocation by transaction and network message, procedures and functions need to be registered in the special member function `REGISTER_USER_FUNCTIONS_AND_PROCEDURES`.

## Syntax and Formatting

Due to security reasons, certain things are prohibited:

- Declaring and accessing arrays using the C/C++ notation (`[` `]`). Utilize pre-defined array structures within qpi.h such as `collection`, `uint32_64`, `uint32_128`, ...
- Any pointer-related techniques such as casting, accessing, ...
- Native data types like `bool`, `int`, `long`, `char`, ... Use their corresponding predefined data types in `qpi.h` (`bit`, `uint8`, `sint8`, `uint16`, `sint32`, `uint64`, ...)
- Inclusion of other files via `#include`. All functions must reside within a single file.
- Math operators `%` and `/`. Use `mod` and `div` from `qpi.h` instead. `+`, `-`, `*`(multiplication), and bit-wise operators are accepted.
- Local variable declaration, even for for-loop. You need to define all necessary variables in either in the contract state or in a "locals" struct similar to the input and output struct of a function or procedure.
- The `typedef`, `union` keyword.
- Floating point data types (half, float, double)

Currently, the maximum contract state size is capped at 1 GiB (03/02/2024). This value is subject to change based on hardware upgrades of computors.

## Member Variables and Functions:

- struct `bit_x` (x = 2 ^ n, n = 1 ~ 24)
  - Member Variable
    - uint64 \_values : `x-bit` integer
  - Member function
    - bit get(uint64 index) : Retrieves the `index`-th bit of `_values`
    - void set(uint64 index, bit value) : Sets at the specified `index`-th bit to the provided bit `value`
- struct `sint8_x` (x = 2 ^ n, n = 1 ~ 24)
  - Member Variable
    - sint8 \_values[x]; : An array of x `signed char` elements
  - Member function
    - sint8 get(uint64 index) : Retrieves the element at the specified `index`
    - void set(uint64 index, sint8 value) : Sets the element at the specified `index` to the provided `value`
- The same goes for `uint8_x`, `sint16_x`, `uint16_x`, `sint32_x`, `uint32_x`, `sint64_x`, `uint64_x`, `id_x`.
- struct `collection`

This shows collection of priority queue of elements with type T and total element capacity L. 

Each ID pov (point of view) has an own queue. 

Array of elements (filled sequentially), each belongs to one PoV / priority queue (or is empty). 

Elements of a POV entry will be stored as a binary search tree (BST): so this structure has some properties related to BST(bstParentIndex, bstLeftIndex, bstRightIndex). 

Look at the [Binary Search Tree](https://www.geeksforgeeks.org/binary-search-tree-data-structure) to learn more.

- Difference between standard BST and POV BST

Each node in a standard BST has left child containing values less than the parent node and the right child containing values greater than the parent node. 

But each element in a POV BST has left child containing `priority` greater than the parent element and the right child containing `priority` less than the parent node.

- sint64 add(const id& pov, T element, sint64 priority)

Add element to priority queue of ID pov, return elementIndex of new element

- uint64 capacity()

Return maximum number of elements that may be stored

- T element(sint64 elementIndex)

Return element value at elementIndex

- sint64 headIndex(const id& pov)

Return elementIndex of first element in priority queue of pov (or NULL_INDEX if pov is unknown)

- headIndex(const id& pov, sint64 maxPriority)

Return elementIndex of first element with priority `<=` maxPriority in priority queue of pov (or NULL_INDEX if pov is unknown)

- sint64 nextElementIndex(sint64 elementIndex)

Return elementIndex of next element in priority queue (or NULL_INDEX if this is the last element)

- uint64 population() const

Return overall number of elements

- id pov(sint64 elementIndex) const

Return point of view elementIndex belongs to (or 0 id if unused)

- sint64 prevElementIndex(sint64 elementIndex) const

Return elementIndex of previous element in priority queue (or NULL_INDEX if this is the last element)

- sint64 priority(sint64 elementIndex) const

Return priority of elementIndex (or 0 id if unused)

- sint64 remove(sint64 elementIdx)

Remove element and mark its pov for removal, if the last element. 

Returns element index of next element in priority queue (the one following elementIdx). 

Element indices obtained before this call are invalidated, because at least one element is moved.

- void replace(sint64 oldElementIndex, const T& newElement)

Replace _existing_ element, do nothing otherwise. 

The element exists: replace its value. 

The index is out of bounds: no action is taken.

- void reset()

Reinitialize as empty collection

- sint64 tailIndex(const id& pov) const

Return elementIndex of last element in priority queue of pov (or NULL_INDEX if pov is unknown)

- sint64 tailIndex(const id& pov, sint64 minPriority) const

Return elementIndex of last element with priority >= minPriority in priority queue of pov (or NULL_INDEX if pov is unknown).


