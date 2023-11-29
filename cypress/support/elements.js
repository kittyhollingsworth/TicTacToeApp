const getPlayButton = () =>{
    cy.findByRole('button', {name: /play/i}).as('playButton');
    return cy.get('@playButton');
};

const getInputTextbox = () =>{
    cy.findByRole('textbox', {placeholder: /Enter a number to generate a tic tac toe board/i}).as('inputTextbox');
    return cy.get('@inputTextbox')
}

const getGridCell = (gridCellId) =>{
    cy.get(`td[id="${gridCellId}"]`).as(`gridCell${gridCellId}`)
    return cy.get(`@gridCell${gridCellId}`)
} 


export const ticTacToeElements = {
    getPlayButton,
    getInputTextbox,
    getGridCell
}