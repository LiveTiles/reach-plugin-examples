# Reach Plugin Notifications

Reach Plugins can send notifications through channels such as Mobile Push Notifications, E-Mails and Browser Push Notifications.

This readme guides you through the process of setting up notifications for Reach Plugins.

## Prerequisites

- A notification registration in the definition.json
- Plugin needs to be published to a Reach Subscription
- A plugin API Key used for authentication against the Reach API

## 1. Setup the notification registration

Update the plugin's definition.json file:

```
{
  "pluginId": "<new-unique-pluginId",
  "extensions": [],
  "notifications": [
    {
      "key": "default-notification",
      "title": "Plugin Notifications",
      "possibleNotificationTypes": ["MobilePush", "Email", "BrowserPush"]
    }
  ]
}

```

## 2. Publish the Reach Plugin

Send notifications requires the plugin to be published first.
This can be done by running the npm script 'publish-web'. This will open up a new web browse
and guides you through the publish process:

```
npm run publish-web
```

When cloning this repository you first need to change the plugin ID to a unique value. See previous step.

## 3. Generate a Plugin API key

After the plugin has been published a new API key can be generated. This API key is required to authenticate against the Reach API.
Run the npm script 'generate-api-key' and follow the instructions in the web browser:

```
npm run generate-api-key
```

## 4. Sending notifications

Since the plugin API key should never be exposed to the client notifications should be send from a trusted environment. For instance your own API backend, a Azure Function or from a Microsoft Power Automate Flow.

Use the following HTTP request to send a notification

```
POST https://api.reach.livetiles.io/api/v1/plugins/talkative-plugin/notifications
Authorization: "Bearer eyJhbGciOiJSUzUxMiI..."
Content-Type: "application/json"

{
  subscriptionId: "target subscription Id",
  userIds: [],
  groupIds: []
  title: "Click here, very interesting",
  message: "Hello World!",
  notificationTypes: ["MobilePush", "Email", "BrowserPush"],
  notificationKey: "default-notification",
}
```

This repository contains a sample script to test notifications. See `./scripts/send-notification.js`.
You can run this script via `npm run send-notification <subscriptionId> <userId> <apiKey>`
