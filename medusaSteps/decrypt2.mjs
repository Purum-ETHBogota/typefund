import dotenv from 'dotenv'
dotenv.config()

import { Medusa } from '@medusa-network/medusa-sdk'
import { ethers, BigNumber } from 'ethers'
import { abi, applicationAddress } from './constants.mjs'

// Hyperspace Testnet Medusa Address = "0xd466a3c66ad402aa296ab7544bce90bbe298f6a0";

const medusaAddress = '0xd466a3c66ad402aa296ab7544bce90bbe298f6a0'
const provider = new ethers.providers.JsonRpcProvider(
  'https://api.hyperspace.node.glif.io/rpc/v1'
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY_2).connect(provider)

const medusa = await Medusa.init(medusaAddress, signer)

//Now we have the ciphertext from the event

const ciphertext = {
  random: {
    x: BigNumber.from(
      '0x29423E3637F4FFBDDB11DE3B6AD3BC4A6DFF316431ADAA2DBF868214633496D6'
    ),
    y: BigNumber.from(
      '0x1B0E618E5D899CEC91772747186BB7689F973D69AE91E4731F028E6B2BDF5EA'
    ),
  },
  cipher: BigNumber.from(
    '0x73B68BF8C95EEBFFFD4608CA792941FDFE0B9E29FDBAD2B1D3DA6855C9975D25'
  ),
  random2: {
    x: BigNumber.from(
      '0x29423E3637F4FFBDDB11DE3B6AD3BC4A6DFF316431ADAA2DBF868214633496D6'
    ),
    y: BigNumber.from(
      '0x1B0E618E5D899CEC91772747186BB7689F973D69AE91E4731F028E6B2BDF5EA'
    ),
  },
  dleq: {
    f: BigNumber.from('0x00'),
    e: BigNumber.from('0x00'),
  },
}

const blob = new Uint8Array([
  115, 208, 179, 228, 33, 156, 24, 90, 215, 207, 49, 42, 82, 30, 132, 171, 6,
  254, 129, 251, 153, 69, 35, 136, 113, 160, 187, 168, 90, 224, 151, 34, 228,
  159, 116, 105, 141, 216, 207, 112, 207, 221, 251, 209, 79, 217, 10, 124, 139,
  71, 132, 43, 198, 218, 167, 15, 210, 17, 240, 231, 188, 182,
])

const decryptedBytes = await medusa.decrypt(ciphertext, blob)
const plaintext = new TextDecoder().decode(decryptedBytes)

console.log(`Show me the text: ${plaintext}`)
