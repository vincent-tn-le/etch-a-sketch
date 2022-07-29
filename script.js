// Default configuration
const container = document.querySelector(".grid-container")

let colour = 'black';

function changeColour(g) {
    this.style.backgroundColor = colour;
}

function createGrid(n) {
    // Create empty grid
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('style', 'border: 1px solid black;');
            newDiv.style.width = '10px';
            newDiv.style.height = '10px';
            newDiv.style.margin = '1px';
            newDiv.className = `grid`;
            container.appendChild(newDiv);
        }
    }
    container.style.gridTemplateColumns = `repeat(${n}, minmax(0,1fr))`;
    container.style.gridTemplateRows = `repeat(${n}, minmax(0,1fr))`;

    // Add colouring
    const grid = document.querySelectorAll(".grid");
    grid.forEach((g) => {
        g.addEventListener("mouseenter", changeColour);
    });
};

createGrid(16);

//
function newGrid() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach((g) => {
        g.remove();
    });
    
    let num = parseInt(prompt("Number of Squares per side?"));
    //console.log(typeof(num));
    do {
        if (!isNaN(num)) break;
        num = parseInt(prompt("Please enter a valid number."))
    } while (isNaN(num))
    console.log(num);
    console.log(typeof(num));
    createGrid(num);
}