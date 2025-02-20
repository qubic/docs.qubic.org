First, locate the function you want to query in the smart contract code. In this example, we'll use the Fees function from the QX contract.

#Step 1: Identify the Smart Contract Function


```
struct QX : public ContractBase
{
public:
    struct Fees_input
    {
    };
    struct Fees_output
    {
        uint32 assetIssuanceFee; // Amount of qus
        uint32 transferFee; // Amount of qus
        uint32 tradeFee; // Number of billionths
    };
    // ...
}

struct QX : public ContractBase
{
public:
    struct Fees_input
    {
    };
    struct Fees_output
    {
        uint32 assetIssuanceFee; // Amount of qus
        uint32 transferFee; // Amount of qus
        uint32 tradeFee; // Number of billionths
    };
    // ...
}
```

Step 2: Find the Function Registration
Look for the REGISTER_USER_FUNCTION keyword to find the function number:

```
REGISTER_USER_FUNCTION(Fees, 1)
```

This tells us that the Fees function is registered with the number 1.

## Step 3: Determine the Contract Index
Find the contract index in the contract definition file:

```
#define CONTRACT_INDEX_QX 1
```

This tells us that the QX contract is registered with the index 1.

## Step 4: Construct the API Request

Now we can create a curl command to query the smart contract:
```

curl -X 'POST' \
  'https://rpc.qubic.org/v1/querySmartContract' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "contractIndex": 1,
  "inputType": 1,
  "inputSize": 0,
  "requestData": ""
}'

this should return a response like:
{"responseData":"AMqaO0BCDwBAS0wA"}
```

