# Flashing Page Title Notification JS

A javascript plugin which allows easy use of creating a flashing page title for notification purposes.

[![enter image description here][1]][1]


  [1]: http://i.stack.imgur.com/e2O3j.gif


## Blog Article

http://curtistimson.co.uk/post/js/create-a-flashing-tab-notification-page-title/


## Demo

https://curttimson.github.io/Flashing-Page-Title-Notification/Demo/Index.html


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

Manual build of `/src/pageTitleNotification.js` to `/dist`:

```
gulp build-js
```

Changes can be tested at `/demo`
