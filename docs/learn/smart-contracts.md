# Smart Contracts 

Smart Contracts are blockchain-based, self-acting protocols that activate when specified code criteria are met. Among the myriad of blockchain applications, Smart Contracts emerge as a game-changer. Qubic enhances this game, pioneering an innovative approach to Smart Contracts, merging efficiency with security.

## How Qubic's Smart Contracts Operate
Qubic's Smart Contracts revolve around public functions encapsulated in the contract's source code. These functions receive a C++ struct as input and emit another C++ struct as output. To trigger a function (which necessitates client software), a transaction is made with the `destinationPublicKey` associated with the contract index.

<details>
  <summary>Some more geeky details</summary>
  <div>
    <p>
      The `inputType` of the transaction is set to the index of the called function, and `inputSize` is set to `sizeof(inputStruct)`. The `amount` can be non-zero to simultaneously transfer qus when a smart contract function is called, and the amount is deducted from `sourcePublicKey` only if the function is called.
    </p>
    <p>
      Data from the input struct are injected between `inputSize` and the signature. If not enough data are supplied, the remaining portion is filled with zeros. If the data exceed the actual input data, then the input is truncated.
    </p>
  </div>
</details>


## Proposal and IPO Process
Before a Smart Contract's integration:

- It must undergo a [proposal](/learn/proposals) voting by the quorum. Specifically, ⅔ of the 676 computors need to participate in the voting, with a majority required for contract acceptance.
- The shares associated with the Smart Contract undergo an [IPO](/learn/ipo) using a [Dutch auction](/learn/dutch-auction) model.
Spotlight on Qubic's Smart Contracts

## Distinguishing Features
Key highlights include:

- Use of Qubic Units (QUs) as "energy", making contracts frictionless and expansive.
- Deflationary by design, with QUs used during execution being "burned".
- Integration capability with real-world data using Qubic's oracles.
- While QUs are used in Smart Contract execution, it remains cost-free for users due to self-financing from its IPO. However, there's flexibility, as contracts can charge users QUs for specialized services.

## Voting rules
- A proposal with less than 451 valid votes is invalid.
- A valid vote is one with index above 0 and matching one of the options from the proposal.
- A proposal with duplicate options or option indices outside of [1; 7] range is invalid.
- Options must be sorted and listed without gaps starting from option #1 (e.g. "5 = yes / 2 = no" is invalid options for a proposal).
- The result of a proposal is the option which has got strictly more than 50% of valid votes.
- If none of the options has got more than 50% then another proposal should be published with two most popular options only, in some cases if #1/#2 places are shared by several options more voting steps may be needed.
- The computor which publishes a proposal isn't allowed to vote that epoch with the only exception: The first option from the published proposal is taken as own computor's vote.

## The Road Ahead
With the robust Qubic blockchain combined with the adaptability of Smart Contracts, developers are armed with an unparalleled toolkit. As the Qubic framework grows, its Smart Contracts are set to diversify and expand their influence.

In summation, Qubic rejuvenates the Smart Contract landscape, intensifying efficiency and making them apt for real-world applications. By merging external data, it broadens dApp possibilities, guiding us towards a future of unmatched blockchain interactions.
