import { login } from 'masto';
import { config } from 'dotenv';

config();

const main = async () => {
  const masto = await login({
    url: process.env.MASTODON_URL,
    accessToken: process.env.MASTODON_ACCESS_TOKEN
  });

  // Fetch your own account
  const me = await masto.accounts.verifyCredentials();

  console.log("Name: ", me.username);
  console.log("Statuses count: ", me.statusesCount);
  console.log("Followers count: ",me.followersCount);
  console.log("Following count: ", me.followingCount);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});