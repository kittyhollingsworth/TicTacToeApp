import '@testing-library/cypress/add-commands'
import { ticTacToeElements } from '../support/elements.js';

//Cypress custom commands were not working off the bat even with adding the import './commands'; into the e2e.js file, tried a couple of things from stackoverflow that also didn't work.

// Cypress.Commands.add('CreateBoard', (boardSize)=>{
//     ticTacToeElements.getInputTextbox().type(boardSize);
//     ticTacToeElements.getPlayButton().click();
// });