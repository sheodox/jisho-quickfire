# Jisho-Quickfire

This is a utility that runs on a NodeJS server for doing quick look-ups of multiple words in succession using Jisho.org.

## What's it for?

I made this while I was trying to read a manga and I had to look up a bunch of words I didn't know. This simplifies the process of looking up multiple words in a row. 
Each time you search for a word the first result is shown right below the search box, this means that you can see all of your recent searches at once- making it easier
to understand a sentence full of words you have to look up. Additionally, after every search your search term is highlighted so you can just start typing and hit 
enter again for the next word.

Additionally if the first word that appears isn't the one you wanted you can press \[ or \] to go through the first few results.

# How to use this app

## Setup
1. Clone the repository
2. Install NodeJS
3. Navigate to the jisho-quickfire folder in terminal or command prompt (depending on your OS)
4. Enter the command `npm install`

## Running the server

If you don't feel comfortable running this as an admin, change the `80` to `3000` near the bottom of `app.js` before continuing. If you do this there should be no need 
to run with elevated privileges, you'll just need to connect to a different port.

### Windows

Right click `run.bat` and click 'Run as administrator'.

### Mac or Linix

Open a terminal to the jisho-quickfire directory and run `sudo run.sh`

## Connecting to the server

Navigate to `localhost` in your address bar (alternatively `localhost:3000` if you made the port change in app.js).