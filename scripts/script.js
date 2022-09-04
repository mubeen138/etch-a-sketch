let body = document.querySelector('body');
let containerDiv = document.querySelector('.container');
let sideBar = document.querySelector('.side-bar');
let gridDiv;
let clearButton;
let mouseDown = false;

// Add mousedown and mouseup event listeners to container div
containerDiv.addEventListener('mousedown',()=> mouseDown = true);
containerDiv.addEventListener('mouseup',() => mouseDown = false);
containerDiv.setAttribute('draggable', 'false');
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

// Clear contents of pad and ask for new grid size
function clearPad(){
    let input = parseInt(prompt("Enter Number of pixels per side (Max 100)"));
    if (input > 100 || input < 16 || input == null || input == undefined){
        clearPad();  
    }else{
        removeAllChildNodes(containerDiv);
        createGrid(input);
    }
}
//Create Grid
function createGrid(numDivs = 16){
    for (i = 0; i < numDivs**2; i++){
        gridDiv = document.createElement('div');
        gridDiv.style.width = `${940/numDivs}px`; 
        gridDiv.style.height = `${940/numDivs}px`;
        gridDiv.setAttribute('draggable', 'false')
        gridDiv.addEventListener('mouseenter',e => {
            if(mouseDown){
                e.target.style.backgroundColor = 'black';
            }
        })
        gridDiv.classList.add('gridDiv');
        containerDiv.appendChild(gridDiv);
    }
}
clearPad();
