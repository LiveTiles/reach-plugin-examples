# Reach Plugin Notifications

Reach Plugins can send notifications through channels such as Mobile Push Notifications, E-Mails and Browser Push Notifications.

This readme guides you through the process of setting up notifications for Reach Plugins.

## Prerequisites

- A notification registration in the definition.json
- Plugin needs to be published to a Reach Subscription
- A plugin API Key used for authentication against the Reach API

## 1. Setup the notification registration

Update the plugin's definition.json file:

```json
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

```bash
npm run publish-web
```

When cloning this repository you first need to change the plugin ID to a unique value. See previous step.

## 3. Generate a Plugin API key

After the plugin has been published a new API key can be generated. This API key is required to authenticate against the Reach API.
Run the npm script 'generate-api-key' and follow the instructions in the web browser:

```bash
npm run generate-api-key
```

## 4. Sending notifications

Since the plugin API key should never be exposed to the client notifications should be send from a trusted environment. For instance your own API backend, a Azure Function or from a Microsoft Power Automate Flow.

Use the following HTTP request to send a notification

```json
{
  "Method": "POST",
  "Headers": {
    "Authorization": "Bearer <Plugin-Notification-Api-Key>",
    "Content-Type": "application/json"
  },
  "Body": {
    "GroupIds": [
      // ...
    ],
    "UserIds": [
      // ...
    ],
    "Title": "Important announcement!",
    "Content": "We won't hold any meetings tomorrow!",
    "NotificationTypes": ["Email", "BrowserPush"],
    "NotificationKey": "my-plugin-notif-key-1",
    "SubscriptionId": "a95de2ad-46bb-41e8-af99-5692132ca350",
    // If specified "Content" will be ignored
    "ContentHtml": "<h1>Important announcement!</h1> <br /> <p>We won't hold any meetings tomorrow!</p>",
    "Url": "https://reach.livetiles.io/"
  }
}
```

This repository contains a sample script to test notifications. See `./scripts/send-notification.js`.
You can run this script via `npm run send-notification <subscriptionId> <userId> <apiKey>`
