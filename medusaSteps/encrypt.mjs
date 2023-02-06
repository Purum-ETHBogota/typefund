import dotenv from 'dotenv'
dotenv.config()

import { Medusa } from '@medusa-network/medusa-sdk'
import { ethers } from 'ethers'
import { abi, applicationAddress } from './constants.mjs'

// Hyperspace Testnet Medusa Address = "0xd466a3c66ad402aa296ab7544bce90bbe298f6a0";

const medusaAddress = '0xd466a3c66ad402aa296ab7544bce90bbe298f6a0'
const provider = new ethers.providers.JsonRpcProvider(
  'https://api.hyperspace.node.glif.io/rpc/v1'
)

const signer = new ethers.Wallet(
  process.env.PRIVATE_KEY_1
).connect(provider)

//const applicationAddress = '0x667beba358592b285A67ff9F984bed5191d0B248'
//const applicationAddress = '0x3A408835c243C892f1eD7c3D4184c5593181EC93'

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
