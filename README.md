<div id="top"></div>



<!-- PROJECT LOGO -->
<br />
<div align="center">
 

  <h3 align="center">Staking smart contract written in solidity</h3>


</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#inspiration">Inspiration</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


### Smart Contract Deplyed to Ethereum Rinkeby Testnet 
Contract Address 


    0xf6aF8E8a436A036E763928dCF96f2B367e8E25B3

      
     



![stsking](https://user-images.githubusercontent.com/68476971/180765484-16ca27a5-0dd8-4c1d-97d3-c7f6c5d5e605.png)


### Smart Contract Registered to Oracle testnet for checking expiration of name registration after every 24 hours automatically




<!-- ABOUT THE PROJECT -->
## Inspiration

Blockchain technology enables decentralized applications (DApps) or smart contracts. Staking is an amazing opportunity in Blockhain space which enable users to stake their asset/token to get APY%


## About The Project

Staking smart contract,EVM Compatible
Generate APY in 4 terms.
  a. One Month
  b. Three Months
  c. Six Months
  d. One Year



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Solidity](https://docs.soliditylang.org/en/v0.8.14/)
* [Node.js](https://nodejs.org/en/docs/)
* [Openzeppelin](https://www.openzeppelin.com/)
* [Truffle Suite](https://trufflesuite.com/)
* [Hardhat](https://hardhat.org/)
* [Ehers.js](https://docs.ethers.io/v5/)
* [Chai](https://www.npmjs.com/package/chai) - as testing library.



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation



1. Clone the repo
   ```sh
   git clone https://github.com/rafiulhc/bedrock-staking
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

Change the secret variables as process.env.SECRET_KEY and process.env.ALCHEMY provided by API provider if deploy to mainnet (Ethereum, Binance, Fantom, Avalanche etc.) or remote testnet(rinkeby, ropsten, goerli etc.)

```npm install
  npx hardhat compile
  npx hardhat run --network rinkeby scripts/deploy.js
  ```

![Secret Variables](https://user-images.githubusercontent.com/68476971/169951589-da24b489-0cb6-44f8-a1fb-f9f02afca154.png)


<!--Testing-->
## Testing 

  ```npm install
  npx hardhat compile
  npx hardhat run --network localhost scripts/deploy.js
  npx hardhat test
  ```


After running the commands in terminal should show the tests results....


![Tests](https://user-images.githubusercontent.com/68476971/169960734-8bad34dc-93ca-40b8-843d-e8e48992d94a.png)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

None

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Rafiul Hasan - [Linkedin](https://www.linkedin.com/in/hrafiul/)
               [Twitter](https://twitter.com/r_hasan_c)
               - rafiul.hasan.chowdhury@gmail.com

Project Link: [https://github.com/rafiulhc/bedrock-staking](https://github.com/rafiulhc/bedrock-staking)

<p align="right">(<a href="#top">back to top</a>)</p>







