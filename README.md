<div align="center">
  
  <h1>Tic-Tac-Toe!</h1>
  
  <p>
    A simple, playable game of Tic-Tac-Toe
  </p>

<!--badges and links-->
  <p>
    <a href="https://github.com/oceanlutz/tic-tac-toe/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/oceanlutz/tic-tac-toe" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/oceanlutz/tic-tac-toe" alt="last update" />
    </a>
    <a href="https://github.com/oceanlutz/tic-tac-toe/network/members">
      <img src="https://img.shields.io/github/forks/oceanlutz/tic-tac-toe" alt="forks" />
    </a>
    <a href="https://github.com/oceanlutz/tic-tac-toe/stargazers">
      <img src="https://img.shields.io/github/stars/oceanlutz/tic-tac-toe" alt="stars" />
    </a>
    <a href="https://github.com/oceanlutz/tic-tac-toe/issues/">
      <img src="https://img.shields.io/github/issues/oceanlutz/tic-tac-toe" alt="open issues" />
    </a>
    <a href="https://github.com/oceanlutz/tic-tac-toe/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/oceanlutz/tic-tac-toe" alt="license" />
    </a>
  </p>

  <h4>
    <a href="https://github.com/oceanlutz/tic-tac-toe/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/oceanlutz/tic-tac-toe/issues/">Request Feature</a>
  </h4>
</div>
<br />
<br />

## About
  This is one of the first projects I began working on, I wanted to create a very simple looking game of tic-tac-toe. There isn't much going on admittedly, and it will most likely be improved more in the future! For now, I just wanted to make a design that was very minimal and not too straining to look at. ✨

### Packages and Cloning

This project uses Jquery 3.7.1 (which I may convert back to pure Javascript) and Bootstrap 4.6.2, which itself is using Popper JS 1.16.1. Run the commands below to clone and also install dependencies.

Clone (in current directory)
```bash
git clone https://github.com/oceanlutz/tic-tac-toe.git
```
Go to the project directory

```bash
cd tic-tac-toe
```

Install Dependencies
```bash
npm install
```
To run afterwards, just open the HTML in an internet browser.

### Usage 
I made several choices when writing the JS for this that some may call *atypical*. I honestly just thought I would have more fun with nested arrays as opposed to a single array representing all 9 buttons on the game grid. It's not as efficient, but much cooler in my opinion. Below are my favorite few lines of code used:

```javascript
if (Math.abs(j - i) == 2 || Math.fround(Math.tan(j)) == Math.fround(Math.sin(2) / (i + Math.cos(2)))) {
  diagonalRight.push(test[i]);
}

//i had to use Math.fround() because for some reason one side of the equation is one decimal place longer(???)
```

### Possible future plans
- Add a score keeping track of who wins each game
- Put on personal site (will definitely at least do this)
- Do whatever random thing I think of and feel the strong compulsion to add

### Contact Me
Ocean Lutz - oceanlutz@pm.me
