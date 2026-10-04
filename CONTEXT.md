# Flashing Page Title Notification

Draws a user's attention back to a browser tab by alternating the page title with a short message.

## Language

**Notification**:
The short message shown in place of the page title, e.g. "New Message!".
_Avoid_: alert, message text

**Original title**:
The page title as it was when the Flash started, and what is restored when it stops.
_Avoid_: current title, default title

**Flash**:
The repeating alternation between the Notification and the Original title, from `on()` until `off()`.
_Avoid_: blink, interval, notification (for the whole effect)
