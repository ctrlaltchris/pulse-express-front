# Pulse Express Music App

## How to start the server and font end.
Load up terminal and go into your projects directory where you want to clone both of the repos.

- Clone the front end.
```
git clone https://github.com/guanwill/pulse-express.git
```

- Clone the back end.
```
git clone https://github.com/ctrlaltchris/pulse-express-front.git
```

In the terminal, go into the *pulse-express* backend directory. (cd pulse-express).
```
npm i
```

- Type:
```
nodemon app.js
```

- The server will run on **http://localhost:3000**.

cd into the *pulse-express-front* directory.
```
npm i
```

- Type:
```
nodemon app.js
```

- The server will run on **http://localhost:3001**

## Running in the browser
- Go to
```
http://localhost:3001
```
in your web browser.

- Log into github by clicking the top right *git* icon.

- A logged in user can then upload songs by *choosing a file* and clicking the *upload* button.

- Click the play button then the audio and visualizer will start playing.

## TODO:
- Fix performance issues with the visualizer.
- Align the different css, js, background layers.
- Change the *Choose File* to match the other button styles.
- Move the *Choose File* and *Upload* buttons into a top bar layout.
- Move the song list and file information into a collapsable div page that expands from a hamburger menu.
- Get the visualizer working in safari (9.1.1).
- Redo audio elements with pretty alternatives.
- Add album art to page.

## Layout ideas
- User signin (initial load) screen.
```
┌────────────────────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░┌─────────┐░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  login  │░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░└─────────┘░│
├────────────────────────────────────────────────────────┤
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒┌─────────────────────────────────────┐▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│                                     │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│                                     │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│                                     │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│        Pulse Express graphic        │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│                                     │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│                                     │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒│                                     │▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒└─────────────────────────────────────┘▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
├────────────────────────────────────────────────────────┤
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└────────────────────────────────────────────────────────┘
```

- Audio screen. It has a song list and runs visualizers when the music starts.
```
┌─────────────────────────────────────────────────────────┐
│┌──────────────────┐░░░░░░░░░░░░░░░░░░░░░░░┌─────────┐░░░│
││||| hamburger menu│░░░░░░░░░░░░░░░░░░░░░░░│ login   │░░░│
│└──────────────────┘░░░░░░░░░░░░░░░░░░░░░░░└─────────┘░░░│
├───────────────────────┬─────────────────────────────────┤
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│         Song list     │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│                       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
├───────────────────────┴─────────────────────────────────┤
│┌─────────────┐░░░░┌─────────────────┐░░░┌───────────┐░░░│
││  Album art  │░░░░│Play/ Pause song │░░░│volume/mute│░░░│
│└─────────────┘░░░░└─────────────────┘░░░└───────────┘░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└─────────────────────────────────────────────────────────┘
```


## Bugs:
- Audio can stack and overlap.
- The scrubber for the timeline doesn't work as intended.
- Will's computer runs the visualizers better than Chris and Joel's computer. Obvious bug.

