// SPDX-License-Identifier: MIT
pragma solidity =0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Token is ERC20 , Ownable {

    constructor() ERC20("new token", "the new token") {
        _mint(msg.sender, 1000000000000000*10**18);
    }

    function mint(address to, uint256 amount) public  {
        _mint(to, amount);
    }

        function decimals() public view virtual override returns (uint8) {
        return 18;
    }



}