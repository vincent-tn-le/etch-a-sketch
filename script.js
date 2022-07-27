const container = document.querySelector(".grid-container")

container.style.color = 'blue';


function createGrid(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('style', 'border: 1px solid black;');
            newDiv.style.width = '10px';
            newDiv.style.height = '10px';
            newDiv.style.margin = '1px';
            newDiv.className = `grid ${i} ${j}`;
            container.appendChild(newDiv);
        }
    }
    container.style.gridTemplateColumns = `repeat(${n}, minmax(0,1fr))`;
    container.style.gridTemplateRows = `repeat(${n}, minmax(0,1fr))`;
};

createGrid(50);
