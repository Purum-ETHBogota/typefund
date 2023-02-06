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
      '0x476FA8662501E8EB00D1A710D4BA8CBFEDB12DE06875BFC60DE2271CCC05FA6'
    ),
    y: BigNumber.from(
      '0x2FDBC75583B26E496D30688642E15107D4FA672DC8F5437A4F6D5B0CF314E948'
    ),
  },
  cipher: BigNumber.from(
    '0xB78B78901C6970658C878C728908060B63EAFFB87BF6261B6BF145BBAFDF0018'
  ),
  random2: {
    x: BigNumber.from(
      '0x476FA8662501E8EB00D1A710D4BA8CBFEDB12DE06875BFC60DE2271CCC05FA6'
    ),
    y: BigNumber.from(
      '0x2FDBC75583B26E496D30688642E15107D4FA672DC8F5437A4F6D5B0CF314E948'
    ),
  },
  dleq: {
    f: BigNumber.from('0x00'),
    e: BigNumber.from('0x00'),
  },
}

const blob = new Uint8Array([118,86,158,231,244,221,113,40,61,39,43,69,122,85,117,113,27,34,152,206,175,104,168,220,135,235,97,83,151,198,109,254,106,250,21,161,85,11,161,80,37,99,19,140,191,70,247,68,239,106,153,225,89,142,183,98,211,225,119,109,236,3])

const decryptedBytes = await medusa.decrypt(ciphertext, blob)
const plaintext = new TextDecoder().decode(decryptedBytes)

console.log(`Show me the text: ${plaintext}`)
