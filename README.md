# MadBot Desktop

Control room and OBS overlays for MadBot. Alerts, chat, goals, and an event list run on this PC. OBS reads them as browser sources.

## Run

```powershell
npm install
npm start
```

## OBS

Add a Browser source for each overlay. Set the size to 1920×1080.

- Alert box: `http://127.0.0.1:4721/alert.html`
- Chat: `http://127.0.0.1:4721/chat.html`
- Goal: `http://127.0.0.1:4721/goal.html`
- Event list: `http://127.0.0.1:4721/events.html`

The app has to stay open while you stream.
