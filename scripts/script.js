let body = document.querySelector('body');
let containerDiv = document.querySelector('.container');
let sideBar = document.querySelector('.side-bar');
let gridDiv;
let clearButton;

// Create Clear Button to clear and prompt

clearButton = document.createElement('button');
clearButton.id = 'clear-button';
clearButton.textContent = 'Clear';
clearButton.addEventListener('click',clearPad)

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
sideBar.appendChild(clearButton);

function clearPad(){
    let input = prompt("Enter Number of pixels per side (Max 100)");
    if (input > 100){
        clearPad();  
    }else{
        removeAllChildNodes(containerDiv);
        createGrid(input);
    }
}
function createGrid(numDivs = 16){
    for (i = 0; i < numDivs**2; i++){
        gridDiv = document.createElement('div');
        gridDiv.style.width = `${940/numDivs}px`; 
        gridDiv.style.height = `${940/numDivs}px`;
        gridDiv.addEventListener('mousedown',e => {
        e.target.style.backgroundColor = 'black';
        })
        gridDiv.classList.add('gridDiv');
        containerDiv.appendChild(gridDiv);
    }
}
createGrid();