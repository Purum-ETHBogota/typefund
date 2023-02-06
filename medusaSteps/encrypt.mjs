const abi = [
  {
    inputs: [
      {
        internalType: 'contract IEncryptionOracle',
        name: '_oracle',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CallbackNotAuthorized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficentFunds',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ListingDoesNotExist',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
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
        indexed: false,
        internalType: 'struct Ciphertext',
        name: 'ciphertext',
        type: 'tuple',
      },
    ],
    name: 'ListingDecryption',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'cipherId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    name: 'NewListing',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cipherId',
        type: 'uint256',
      },
    ],
    name: 'NewSale',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'cipherId',
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
        name: 'buyerPublicKey',
        type: 'tuple',
      },
    ],
    name: 'buyListing',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
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
        name: 'cipher',
        type: 'tuple',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    name: 'createListing',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'listings',
    outputs: [
      {
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracle',
    outputs: [
      {
        internalType: 'contract IEncryptionOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
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
        name: 'cipher',
        type: 'tuple',
      },
    ],
    name: 'oracleResult',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
    ],
    name: 'payments',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'publicKey',
    outputs: [
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
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'payee',
        type: 'address',
      },
    ],
    name: 'withdrawPayments',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

import { Medusa } from '@medusa-network/medusa-sdk'
import { ethers } from 'ethers'

// Filecoin Hyperspace Testnet
// const contracts medusaAddress = "0xd466a3c66ad402aa296ab7544bce90bbe298f6a0";

//Arbitrum Goerli
//0xf1d5A4481F44fe0818b6E7Ef4A60c0c9b29E3118

const medusaAddress = '0xd466a3c66ad402aa296ab7544bce90bbe298f6a0'
const provider = new ethers.providers.JsonRpcProvider(
  'https://api.hyperspace.node.glif.io/rpc/v1'
)

// const provider = new ethers.providers.JsonRpcProvider(
//   'https://arb-goerli.g.alchemy.com/v2/dbCADwOzV6nIjiOBYAoFUvL4hcTXMjPF'
// )

const signer = new ethers.Wallet(
  'a9bd3fda9e7449d8edc090a5e62482a18de8c373441a103c32fd0e902600831e'
).connect(provider)

//const applicationAddress = '0x667beba358592b285A67ff9F984bed5191d0B248'
const applicationAddress = '0x3A408835c243C892f1eD7c3D4184c5593181EC93'

const medusa = await Medusa.init(medusaAddress, signer)
// console.log('mmm...')
// console.log(medusa)

const medusaPublicKey = await medusa.fetchPublicKey()
console.log(`medusa public key: ${medusaPublicKey}`)

//Lets encrypt!!!!!!!!!:
const plaintext = 'This is a cool font !!'

const buff = new TextEncoder().encode(plaintext)

//console.log(`buff: ${buff}`)

//Encrypt data towards Medusa
const { encryptedData, encryptedKey } = await medusa.encrypt(
  buff,
  applicationAddress
)
console.log(`encryptedData: ${encryptedData}`)
//console.log(`encryptedKey: ${JSON.stringify(encryptedKey)}`)

//Encrypt to medusa
//Now we interact with the app contract
//We create a listing and set the "policy"
//Here we pass the encryptedkey and submit it to medusa

const onlyFiles = new ethers.Contract(applicationAddress, abi, signer)

try {
  const price = ethers.utils.parseEther('0.01')
  const result = await onlyFiles.createListing(
    encryptedKey,
    'test3',
    'description3',
    price,
    'ipfs link'
  )

  await listenForTransactionMine(result, provider)
  console.log('Done!')
  console.log(`result: ${JSON.stringify(result)}`)
} catch (error) {
  console.log(error)
}

function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}...`)
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations`
      )
      resolve()
    })
  })

  //   return new Promise()
}
