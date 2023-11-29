import { ticTacToeElements } from '../support/elements.js';
describe('Scenarios a player can experience finishing a game', () => {

  it('Both Players Tie', () => {
    cy.visit('/')
    cy.CreateBoard(3);
    ticTacToeElements.getInputTextbox().type('3');
    ticTacToeElements.getPlayButton().click();
    ticTacToeElements.getGridCell('0').click();//X
    ticTacToeElements.getGridCell('2').click();//O
    ticTacToeElements.getGridCell('1').click();//X
    ticTacToeElements.getGridCell('3').click();//O
    ticTacToeElements.getGridCell('5').click();//X
    ticTacToeElements.getGridCell('4').click();//O
    ticTacToeElements.getGridCell('6').click();//X
    ticTacToeElements.getGridCell('7').click();//O
    ticTacToeElements.getGridCell('8').click();//X
    cy.findByText(`Congratulations player X! You've won. Refresh to play again!`).should('not.exist');
    cy.findByText(`Congratulations player O! You've won. Refresh to play again!`).should('not.exist');
    cy.findByText('You Tied Message Goes Here!').should('exist');
  })

  it('Player X Wins', () => {
    cy.visit('/')
    ticTacToeElements.getInputTextbox().type('3');
    ticTacToeElements.getPlayButton().click();
    ticTacToeElements.getGridCell('0').click();//X
    ticTacToeElements.getGridCell('3').click();//O
    ticTacToeElements.getGridCell('1').click();//X
    ticTacToeElements.getGridCell('4').click();//O
    ticTacToeElements.getGridCell('2').click();//X
    cy.findByText(`Congratulations player X! You've won. Refresh to play again!`).should('exist');
   })

   it('Player O Wins', () => {
    cy.visit('/')
    ticTacToeElements.getInputTextbox().type('3');
    ticTacToeElements.getPlayButton().click();
    ticTacToeElements.getGridCell('0').click();//X
    ticTacToeElements.getGridCell('3').click();//O
    ticTacToeElements.getGridCell('1').click();//X
    ticTacToeElements.getGridCell('4').click();//O
    ticTacToeElements.getGridCell('8').click();//X
    ticTacToeElements.getGridCell('5').click();//O
    cy.findByText(`Congratulations player O! You've won. Refresh to play again!`).should('exist');
   })
  
});