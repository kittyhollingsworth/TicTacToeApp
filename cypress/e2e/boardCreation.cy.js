import {ticTacToeElements} from '../support/elements.js'

describe('Scenarios of what can happen when a player tries to create a board', () => {
  it('Player enters a whole number', () => {
    let boardSize = '5'
    cy.visit('/');
    ticTacToeElements.getInputTextbox().type(boardSize.toString());
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').last().as('lastCell');
      cy.get('@lastCell').should('have.attr','data-column', (Number(boardSize) - 1));
      cy.get('@lastCell').should('have.attr','data-row',(Number(boardSize) - 1));
    })

  });
//I do not think a user should be able to enter a decimal but if they were I would expect the 3.1 to round down and not up.
  it('Player enters a decimal', () => {
    let boardSize = '3.1'
    cy.visit('/');
    ticTacToeElements.getInputTextbox().click().type(boardSize.toString());
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').last().as('lastCell');
      cy.get('@lastCell').should('have.attr','data-column',(Number(Math.round(boardSize)) - 1));
      cy.get('@lastCell').should('have.attr','data-row',(Number(Math.round(boardSize)) - 1));
    })
  });

  //All tests below this comment I would add validation to make sure the user knows they entered something that will not work, these tests should fail.
  it('Player enters 1', () => {
    cy.visit('/');
    ticTacToeElements.getInputTextbox().click().type('1');
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').should('not.exist');
    })
    cy.findByText('Insert invalid input message here to user').should('exist');
  });

  it('Player enters 0', () => {
    cy.visit('/');
    ticTacToeElements.getInputTextbox().click().type('0');
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').should('not.exist');
    })
    cy.findByText('Insert invalid input message here to user').should('exist');
  });

  it('Player enters a negative number', () => {
    cy.visit('/');
    ticTacToeElements.getInputTextbox().click().type('-1');
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').should('not.exist');
    });
    cy.findByText('Insert invalid input message here to user').should('exist');
  });

  it('Player enters text', ()=>{
    cy.visit('/');
    ticTacToeElements.getInputTextbox().click().type('Will this work?');
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').should('not.exist');
    });
    cy.findByText('Insert invalid input message here to user').should('exist');
  });

  it('Player enters nothing and hits play', () => {
    cy.visit('/');
    ticTacToeElements.getPlayButton().click();
    cy.findByRole('table').within(()=>{
      cy.get('td').should('not.exist');
    });
    cy.findByText('Insert invalid input message here to user').should('exist');
  });
  
  it('Player enters the text null', () => {
    cy.visit('/');
    ticTacToeElements.getInputTextbox().click().type('null');
    cy.findByRole('table').within(()=>{
      cy.get('td').should('not.exist');
    });
    cy.findByText('Insert invalid input message here to user').should('exist');
  });

});