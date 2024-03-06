const space = '500px';
let colour = 'black';


function createGrid(num){
    const container = document.querySelector('#container');
    var i = 0;
    while (i < num){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        var j = 0;
        while (j < num){
            const col = document.createElement('div');
            const px = Math.round(500 / num);

            col.style.height = px.toString(10)+'px';

            col.style.width = px.toString(10)+'px';
            col.style.borderTop = "thin solid black";
            col.style.borderLeft = "thin solid black";
            col.style.cssFloat = "left";
            col.setAttribute('class', 'cell');
            row.setAttribute('class', 'col');
            if (j === num -1){
                col.style.borderRight = "thin solid black";
            }
            if(i === num - 1){
                col.style.borderBottom="thin solid black";
            }
            row.appendChild(col);
            j++;




        }
        row.style.clear='left';
        container.appendChild(row);
        i++;
    }
    sketch();
}

createGrid(64);

function sketch(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = colour;
        });
    });
}

sketch();

function createButtons(){
    const buts = document.querySelector('#btn_ctn');
    const clear_btn = document.createElement('button');
    clear_btn.textContent = "clear";
    clear_btn.setAttribute('class', 'clear_btn');
    buts.appendChild(clear_btn);

    const resize_btn = document.createElement('button');
    resize_btn.textContent = "resize";
    resize_btn.setAttribute('class', 'resize_btn');
    buts.appendChild(resize_btn);

    const randomColour = document.createElement('button');
    randomColour.textContent = "random colour";
    randomColour.setAttribute('class', 'randomColour');
    buts.appendChild(randomColour);

    const blackColour = document.createElement('button');
    blackColour.textContent = "black";
    blackColour.setAttribute('class', 'black');
    buts.appendChild(blackColour);

    const changeColour = document.createElement('button');
    changeColour.textContent = "change";
    changeColour.setAttribute('class', 'change');
    buts.appendChild(changeColour);
}

createButtons();


function reSize() {
    const resize = document.querySelector('.resize_btn');
    resize.addEventListener('mousedown', function () {
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) =>{
            cell.remove();
        });
        var num = prompt("Enter n by n:", "16");
        createGrid(num);

    });

}
reSize();


function clear(){
    const clr = document.querySelector('.clear_btn');
    clr.addEventListener('mousedown', function(){
        let cells = document.querySelectorAll('.cell');

        cells.forEach((cell) =>{
            cell.style.backgroundColor = 'transparent';
        });


    });

}
clear();

function random(){
    const ran = document.querySelector('.randomColour');
    ran.addEventListener('mousedown', function () {
        let dic =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let i = 0;
        let hex = '';
        while(i < 6){
            let r = Math.floor((Math.random() * 16) + 1);
            hex = hex + dic[r-1];
            i++;
        }
        colour = '#' + hex;
        ran.style.backgroundColor = colour;

    })
}
random();

function black(){
    const ran = document.querySelector('.black');
    ran.addEventListener('mousedown', function () {
        colour = 'black';
        const r = document.querySelector('.randomColour');
        r.style.backgroundColor = 'transparent';

    });
}

black();

function change(){
    const ran = document.querySelector('.change');
    ran.addEventListener('mousedown', function () {
        colour = prompt("Enter a colour or hex code", "red of #aw12034");
    });
}

change();
