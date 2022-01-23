<!-- ABOUT THE PROJECT -->
## About The Project

This is a basic hardhat project with the starter contracts for EulerFeet.



### Built With

* [hardhat](https://hardhat.org/)
* [solidity 0.8.11](https://docs.soliditylang.org/en/v0.8.11/)
* [typescript](https://www.typescriptlang.org/)
* [openzeppelin](https://openzeppelin.com/)



<!-- GETTING STARTED -->
## Getting Started

This is an project of EulerFeet which is uing the ERC20 token as the payment method for minting left/right shoe token. To get a local copy up and running follow these steps.



### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```



### Installation

1. Clone the repo
    ```shell
    git clone <current-repo>
    ```
2. Install NPM packages
    ```shell
    npm install
    ```
3. Try running some of the following task:
    ```shell
    npx hardhat compile
    npx hardhat clean
    npx hardhat test
    npx hardhat node
    npx hardhat run scripts/deploy.ts
    ```



### How to play with EulerFeet contract on Remix
* [remix ethereum IDE](https://remix.ethereum.org/)

1. import the Feet.sol, EulerFeet.sol and Blacklisttable.sol from your local to the contracts folder on Remix.
2. Select COMPILER 0.8.11+ and complie Feet.sol.
3. Deploy the Contract Feet.sol on Remix. Should be able to see the FEET contract under the Deployed Contracts list.
4. Complie EulerFeet.sol contract and deloy it. Now you should see two contacts that have been deploy on the Remix.
5. Unfold the deployed contract - FEET and click on the gimmeSomeFeet function to mint some token beforehand.
6. Copy the EULERFEET contract address.
7. Go to the approve function under the FEET contract and paste the EULERFEET contract address and set a proper amount for it. This setp will set the allowance for the EULERFEET contract and it will be needed for the later token transferFrom function.
8. Now everything is ready. Go to the EULERFEET contract and try the mintLeftShoe function. Remember to copy and past the FEET contract address here as the parameter.
9. Similarly, feel free to try the minRightShoe function with the proper FEET contract address and minted LeftShoeId.
10. Try the burnRightShoe / WithdrawFunds function as you like.