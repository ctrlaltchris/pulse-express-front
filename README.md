# Pulse Express Msuic App

## Running the apps
Load up the terminal

- How to start the server and app
```
cd
```
into your projects directory where you want to clone both of the repos.

- clone the front end
```
git clone https://github.com/guanwill/pulse-express.git
```

- clone the back end
```
git clone https://github.com/ctrlaltchris/pulse-express-front.git
```

cd into the *pulse-express* backend directory.
```
npm i
```

- type:
```
nodemon app.js
```

- the server will run on **http://localhost:3000**

cd into the *pulse-express-front* directory.
```
npm i
```

- type:
```
nodemon app.js
```

- the server will run on **http://localhost:3001**
- Click the play button and the visualizer will start playing.

## Running in the browser
go to
```
http://localhost:3001
```
in your web browser.


- log into github by clicking the top right *git* icon.

- A logged in user can then upload songs by *choosing a file* and clicking the *upload* button.


## TODO:
- Fix performance issues with the visualizer.
- Align the different css, js, background layers.
- Change the *Choose File* to match the other button styles.
- Move the *Choose File* and *Upload* buttons into a top bar layout.
- Move the song list and file information into a collapsable div page that expands from a hamburger menu.

## Bugs:
- Audio can stack and overlap.
- The scrubber for the timeline doesn't work as intended.
- Will's computer runs the visualizers better than Chris and Joel's computer. Obvious bug.

