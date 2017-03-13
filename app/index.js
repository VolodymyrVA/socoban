import './index.css'
import Game from './Game'

let game = new Game(),
    matrixLevel = game.matrixLevel;

game.paintField();
game.controller(matrixLevel);

