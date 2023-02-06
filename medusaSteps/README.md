# Steps to use medusa

This folder describes the basic workflow to use medusa from scripts using only ethers and hardcoded values.

1. We encrypt our text/file by running `node encrypt.mjs`.
2. We start to decrypt usig `node decrypt.mjs`. In this script we pay to view the file
3. Step 2 triggered an event that the front end should listen, that event has the the encrypted key. We listen to that event by running `events.mjs`
4. We copy the values from the event and update the `ciphertext` object, and finally run `decrypt2.mjs`

Note: for some reason that I will solve later I was not able to use the dotenv package or import the private key and abi from another file... So the files are quite large because they include the abi, kind of ashamed about that... but it is working.
