// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.16;

error InsufficientBalanceError();

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event TransferSucceed(address indexed from, address indexed to, uint256 value); // New Event
}

contract SimpleERC20 is IERC20 {
    string public name = "ExampleToken";
    string public symbol = "EXT";
    uint8 public decimals = 18;
    uint256 public override totalSupply;

    mapping(address => uint256) private _balances;
    mapping(address => uint256) private _allowances;

    constructor(uint256 initialSupply) {
        totalSupply = initialSupply * 10 ** uint256(decimals);
        _balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function BalanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address receipt, uint256 amount) public override returns (bool) {
        if (_balances[msg.sender] < amount) {
            revert InsufficientBalanceError();
        }
    }
}