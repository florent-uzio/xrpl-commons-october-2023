// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0; 

contract SimpleBank { 
    
    address public owner;
    mapping(address => uint256) public balances;
    mapping(address => uint256) public loans;

     // Events
    event Deposited(address indexed user, uint256 amount);
    event Loaned(address indexed user, uint256 amount);
    event LoanRepaid(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function loan(uint256 amount) public {
        require(amount > 0, "Loan amount should be greater than 0");
        require(balances[owner] >= amount, "Bank does not have sufficient funds");

        loans[msg.sender] += amount;
        balances[owner] -= amount;
        payable(msg.sender).transfer(amount);

        emit Loaned(msg.sender, amount);
    }

    function repayLoan() public payable {
        require(loans[msg.sender] > 0, "You do not have an outstanding loan");
        require(msg.value == loans[msg.sender], "Must repay the exact loan amount");

        loans[msg.sender] = 0;
        balances[owner] += msg.value;

        emit LoanRepaid(msg.sender, msg.value);
    }

    function getLoanAmount() public view returns (uint256) {
        return loans[msg.sender];
    }

    function withdraw() public onlyOwner {
        uint256 withdrawalAmount = balances[owner];
        payable(owner).transfer(withdrawalAmount);

        emit Withdrawn(owner, withdrawalAmount);
    }

    function getBankBalance() public view onlyOwner returns (uint256) {
        return balances[owner];
    }
}