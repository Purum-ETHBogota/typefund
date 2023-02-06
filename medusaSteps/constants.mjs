export const applicationAddress = '0xc7aD9B62929F41DA23d7C846d23CCf0a12AcCC15'
export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'cipher',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random2',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'f',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'e',
                type: 'uint256',
              },
            ],
            internalType: 'struct DleqProof',
            name: 'dleq',
            type: 'tuple',
          },
        ],
        internalType: 'struct Ciphertext',
        name: '_cipher',
        type: 'tuple',
      },
    ],
    name: 'oracleResult',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
