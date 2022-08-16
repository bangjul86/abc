// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

contract Message {

    function deposit(uint8 _amount) external payable {
        require(msg.value >= _amount, "Insufficient Balane");
            payable (address(this)).transfer(_amount);
        }

    function getBalance() external view returns (uint256){
        return address(this).balance;
    }

    function withdraw() external payable {
        payable (msg.sender).transfer(address(this).balance);

    }

}