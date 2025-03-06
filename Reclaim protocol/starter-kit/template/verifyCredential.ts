import { Reclaim } from 'reclaim-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  // Example: verify a Twitter credential (replace with your own flow)
  const reclaim = new Reclaim();
  const credentialType = 'twitter';
  const userHandle = process.env.TWITTER_HANDLE || 'exampleuser';

  try {
    const proof = await reclaim.verifyCredential({
      type: credentialType,
      identifier: userHandle,
    });
    console.log('Credential verified:', proof);
  } catch (err) {
    console.error('Verification failed:', err);
  }
}

main();