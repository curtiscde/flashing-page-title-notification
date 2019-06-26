# Flashing Page Title Notification JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea404321-93fd-4514-bba4-8a4965a7244d/deploy-status)](https://app.netlify.com/sites/flashing-page-title-notification/deploys)

A javascript plugin which allows easy use of creating a flashing page title for notification purposes.

[![enter image description here][1]][1]


  [1]: https://i.stack.imgur.com/e2O3j.gif

## Demo

https://flashing-page-title-notification.netlify.com/demo

## Blog Article

http://curtistimson.co.uk/post/js/create-a-flashing-tab-notification-page-title/

## Example

```
pageTitleNotification.on("New Message!", 1000);

pageTitleNotification.off()
```


## Install

```
npm install flashing-page-title-notification
```

## Develop

Build to `/dist`:

```
npm run build
```

Changes can be tested at `/dist/demo`
