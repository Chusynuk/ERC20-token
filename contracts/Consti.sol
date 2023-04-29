// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Consti is ERC20 {
    uint constant _initial_supply = 100 * (10 ** 18);

    constructor() ERC20("Consti", "CON") {
        _mint(msg.sender, _initial_supply);
    }
}
