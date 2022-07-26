const container = document.querySelector(".grid-container")

container.style.color = 'blue';


function createGrid(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('style', 'border: 1px solid black;');
            newDiv.style.gridTemplateColumns = `${i} ${i+1};`;
            newDiv.style.gridTemplateRows = `${j} ${j+1};`;
            newDiv.textContent = `grid ${i} ${j}`;
            newDiv.className = `grid ${i} ${j}`;
            container.appendChild(newDiv);
        }
    }
};

createGrid(16);
