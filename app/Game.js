class Game {
    constructor(){
        this.matrix = [
            '                   ',
            '    wwwww          ',
            '    w   w          ',
            '    wb  w          ',
            '  www  bww         ',
            '  w  b b w         ',
            'www w ww w   wwwwww',
            'w   w ww wwwww  ppw',
            'w b  b          ppw',
            'wwwww www wyww  ppw',
            '    w     wwwwwwwww',
            '    wwwwwww        ',
            '                   '];
        this.matrixLevel = [[], [], [], [], [], [], [], [], [], [], [], [], []];
    }

    paintField(){
        let field = document.getElementById('field');
        for (let i = 0; i < this.matrix.length; i++)
            for (let j = 0; j < this.matrix[i].length; j++) {
                let div = document.createElement('div');
                div.className = this.matrix[i][j] == ' ' ? 's' : this.matrix[i][j];
                field.appendChild(div);
                this.matrixLevel[i].push(div);
            }
    }

    controller(matrixLevel) {
        window.addEventListener("keydown", function (key) {
            let dx, dy, runner, chip, x, y;
            if (key.keyCode == 37) dx = -1, dy = 0;
            else if (key.keyCode == 39) dx = 1, dy = 0;
            else if (key.keyCode == 38) dx = 0, dy = -1;
            else if (key.keyCode == 40) dx = 0, dy = 1;
            else return;

            for (let i = 0; i < matrixLevel.length; i++)
                for (let j = 0; j < matrixLevel[i].length; j++)
                    if (matrixLevel[i][j].className == 'y' || matrixLevel[i][j].className == 'Y') x = j, y = i;

            runner = matrixLevel[dy + y][dx + x];
            if(runner.className == 'w')return;

            let cell = matrixLevel[y][x];

            if(runner.className == 'b' || runner.className == 'a'){
                chip = matrixLevel[dy + y + dy][dx + x + dx];
                if(chip.className == 'w' || chip.className == 'b' || chip.className == 'a')return;

                chip.className = chip.className == 'p' ? 'a' : 'b';
                runner.className = runner.className == 'a' ? 'p' : 's'
            }
            cell.className = cell.className == 'Y' ? 'p' : 's';
            runner.className = runner.className == 'p' ? 'Y' : 'y';
            x += dx, y += dy;

            for (let i = 0; i < matrixLevel.length; i++)
                for (let j = 0; j < matrixLevel[i].length; j++)
                    if (matrixLevel[i][j].className == 'b') return;
            alert('You win!');
        });

    }
}

export default Game