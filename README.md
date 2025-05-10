
# Five Elements Game

A modern web implementation of the traditional Chinese five elements (Wu Xing) game.

## Features

🎮 **Interactive Gameplay**  
- 10-round matches with score tracking
- Visual feedback for wins/losses
- Animated element selections

🎨 **Beautiful Theme**  
- Elegant gradient background
- Gold accent colors
- Responsive design for all devices

🔄 **Game Management**  
- Automatic round counting
- Final winner announcement
- Reset/play again functionality

## Technologies Used

**Frontend:**
- HTML5, CSS3 (Flexbox, Grid, CSS Variables)
- JavaScript (ES6)
- [Font Awesome](https://fontawesome.com/) (icons)
- [Google Fonts](https://fonts.google.com/) (Montserrat & Playfair Display)

**Tools:**
- Visual Studio Code
- Git/GitHub
- Responsive Design Tools

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/five-elements-game.git
2. Navigate to the project directory:
	bash
		cd five-elements-game

3. Open index.html in your browser:
	◦	Double-click the file, or
	◦	Use a local server like VS Code's Live Server extension
### How to Play
	1	Choose one of the five elements by clicking its icon
	2	The computer will randomly select an element
	3	The game will determine the winner based on elemental rules
	4	Play continues for 10 rounds
	5	After 10 rounds, the final winner is announced
	6	Click "Play Again" to start a new game
### Game Rules
The five elements interact in a cycle of creation and destruction:

| Element |   Defeats   | Defeated By
|  Metal  | Wood & Soil | Fire & Water
|  Wood   |Water & Soil | Metal & Fire
|  Water  |Metal & Fire | Wood & Soil
|  Fire   |Metal & Wood | Soil & Water
|  Soil   |Fire & Water | Metal & Wood


## Project Structure

five-elements-game/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # Game logic
├── images/             # Game assets
│   ├── metal-icon.png
│   ├── wood-icon.png
│   ├── water-icon.png
│   ├── fire-icon.png
│   ├── soil-icon.png
│   └── question-icon.png
└── README.md           # This file

## Customizing
	1	To change colors: Modify the CSS variables in :root
	2	To add animations: Add new @keyframes in CSS
	3	To modify game rules: Update the winningRules object in JavaScript

Created by Vanessa Zhou - github.com/vanessazlh
