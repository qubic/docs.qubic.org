# Dutch Auction

In a Dutch auction, the price of the shares is not predetermined. Instead, it's the investors who dictate the price through their bids, providing a more dynamic pricing mechanism.

The smart contract creator intending to go public decides on the quantity of shares to be sold. Investors then place their bids during one epoch indicating the number of shares they wish to purchase and the price they are willing to pay per share. A comprehensive list of bids is compiled, starting with the highest bid price at the top.

Qubic's IPO function will work down this list from the highest bid price, accepting bids until the total number of shares intended to be sold is reached. The price of the offering is determined from the last price covering the full offer quantity. This means all successful bidders pay the same price per share, regardless of their initial bid price.

A Dutch auction system encourages bidders to bid competitively since it safeguards them from overpaying. If a bid is too high, it is simply adjusted down to the final price. This methodology provides an efficient, market-driven approach to share pricing in IPOs, resulting in a fair distribution of shares based on demand and perceived value.

## Example

As an example: 10 shares are available overall:

| Bidder wants to pay | $QUBIC per share for | Amount of shares wanted |
|---------------------|------------------|-------------------------|
| Alice               | 300              | 5                       |
| Bob                 | 7                | 10                      |
| Charlie             | 90               | 3                       |

These bids are sorted by price, from highest to lowest: 

| Bidder wants to pay | $QUBIC per share for | Amount of shares wanted |
|---------------------|------------------|-------------------------|
| Alice               | <span style={{backgroundColor: 'yellow'}}>300</span>            | 5                       |
| Charlie             | <span style={{backgroundColor: 'yellow'}}>90</span>             | 3                       |
| Bob                 | <span style={{backgroundColor: 'yellow'}}>7</span>              | 10                      |

Now we go through line by line and sum up: 

| Bidder wants to pay | $QUBIC per share for | Amount of shares wanted | Sum of shares neede |
|---------------------|------------------|-------------------------|---------------------|
| Alice               | 300              | 5                       | <span style={{backgroundColor: 'yellow'}}>5</span>                   |
| Charlie             | 90               | 3                       | <span style={{backgroundColor: 'yellow'}}>8 (5+3)</span>             |
| Bob                 | 7                | 10                      | <span style={{backgroundColor: 'yellow'}}>18 (5 + 3 + 10)</span> |

We exceed the number of available shares (10). The lowest offer still getting shares is 7 QUs

As a result, the final distribution is as followed:
- Alice gets 5 shares and pays 35 $QUBIC
- Charlie gets 3 shares and pays 21 $QUBIC total 
- Bob gets 2 shares and pays 14 $QUBIC total