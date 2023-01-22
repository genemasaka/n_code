pragma solidity ^0.8.0;

contract PasswordEncoder {
    function encode(string memory password) public pure returns (bytes32) {
        return keccak256(abi.encode(password));
    }
}
