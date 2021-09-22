const got = require("got");

const { pluginId } = require("../definition.json");

const [, , subscriptionId, userId, apiKey] = process.argv;

async function main() {
  const response = await got.post(
    `https://api.reach.livetiles.io/api/v1/plugins/${pluginId}/notifications`,
    {
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      json: {
        notificationKey: "default-notification",
        subscriptionId,
        userIds: [userId],
        title: "Hello World!",
        content: "Your first Reach plugin notification",
        notificationTypes: ["MobilePush"],
      },
    }
  );
}

main().catch(console.error);
