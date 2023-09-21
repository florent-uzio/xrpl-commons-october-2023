// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Lending {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public lentAmounts;
    uint256 public interestRate; 

    constructor() {
        interestRate = 5; // 5% annual interest rate
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function lend(address borrower, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        // Transfer the assets to the borrower
        balances[msg.sender] -= amount;
        lentAmounts[borrower] += amount;

        // Calculate the interest and update borrower's balance
        uint256 interest = (amount * interestRate) / 100;
        balances[borrower] += amount + interest;
    }

    function repay(address lender, uint256 amount) external {
        require(lentAmounts[msg.sender] >= amount, "Insufficient borrowed amount");

        // Transfer assets from borrower to lender
        lentAmounts[msg.sender] -= amount;
        balances[lender] += amount;
    }

    // Add more advanced interest calculation and management functions
    function getMyBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function setInterestRate(uint256 rate) external {
        interestRate = rate;
    }
}
