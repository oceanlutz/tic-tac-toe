/*
 _    .    .    _ _    .    .    _ _    .    .    _ _    .    .    _
(@`-._ \  / _.-'@(@`-._ \  / _.-'@(@`-._ \  / _.-'@(@`-._ \  / _.-'@)
 \:: .`~\/~'. ::/ \:: .`~\/~'. ::/ \:: .`~\/~'. ::/ \:: .`~\/~'. ::/
  \"##".()."##"/   \"##".()."##"/   \"##".()."##"/   \"##".()."##"/
   >~'""||""`~<     >~'""||""`~<     >~'""||""`~<     >~'""||""`~<
  /.:::/\/\:::.\   /.:::/\/\:::.\   /.:::/\/\:::.\   /.:::/\/\:::.\
  \(@)/    \(@)/   \(@)/    \(@)/   \(@)/    \(@)/   \(@)/    \(@)/
 _ `-'.    .`-' _   `-'      `-'     `-'      `-'   _ `-'.    .`-' _
(@`-._ \  / _.-'@)                                 (@`-._ \  / _.-'@)
 \:: .`~\/~'. ::/                                   \:: .`~\/~'. ::/
  \"##".()."##"/                                     \"##".()."##"/
   >~'""||""`~<                                       >~'""||""`~<
  /.:::/\/\:::.\                                     /.:::/\/\:::.\
  \(@)/    \(@)/                                     \(@)/    \(@)/
 _ `-'.    .`-' _                                   _ `-'.    .`-' _
(@`-._ \  / _.-'@)                                 (@`-._ \  / _.-'@)
 \:: .`~\/~'. ::/                                   \:: .`~\/~'. ::/
  \"##".()."##"/               week 11               \"##".()."##"/
   >~'""||""`~<                                       >~'""||""`~<
  /.:::/\/\:::.\                                     /.:::/\/\:::.\
  \(@)/    \(@)/                                     \(@)/    \(@)/
 _ `-'.    .`-' _                                   _ `-'.    .`-' _
(@`-._ \  / _.-'@)                                 (@`-._ \  / _.-'@)
 \:: .`~\/~'. ::/                                   \:: .`~\/~'. ::/
  \"##".()."##"/                                     \"##".()."##"/
   >~'""||""`~<                                       >~'""||""`~<
  /.:::/\/\:::.\                                     /.:::/\/\:::.\
  \(@)/    \(@)/                                     \(@)/    \(@)/
 _ `-'.    .`-' _ _    .    .    _ _    .    .    _ _ `-'.    .`-' _
(@`-._ \  / _.-'@(@`-._ \  / _.-'@(@`-._ \  / _.-'@(@`-._ \  / _.-'@)
 \:: .`~\/~'. ::/ \:: .`~\/~'. ::/ \:: .`~\/~'. ::/ \:: .`~\/~'. ::/
  \"##".()."##"/   \"##".()."##"/   \"##".()."##"/   \"##".()."##"/
   >~'""||""`~<     >~'""||""`~<     >~'""||""`~<     >~'""||""`~<
  /.:::/\/\:::.\   /.:::/\/\:::.\   /.:::/\/\:::.\   /.:::/\/\:::.\
  \(@)/    \(@)/   \(@)/    \(@)/   \(@)/    \(@)/   \(@)/    \(@)/
   `-'      `-'     `-'      `-'     `-'      `-'     `-'      `-'  hjw
*/

/*
    ///////////////
    ----Prelude----
    ///////////////

    So the basic idea I wanted to achieve was to create a Game class 
    with an array representing the game board. I used a nested array
    with length of 3 with each of its elements also being an array of
    length 3. This was admittedly probably less efficient than just 
    making an array of length 9, but I wanted to try it this way due
    to the ease with which I found other similar designs online with
    arrays that were 9 elements in length. I essentially ended up 
    doing a switch statement to add the appropriate value to the 
    correct position in the board array. This code could no doubt be
    optimized in various ways and be made more efficient, but for 
    now I'm satisfied with the result and game experience.
*/

/*
    setting global variables for turn, current player, and 
    whether the game has ended
*/
let turn = 0, player = '', gameOver = false;

/*
    setting event watchers on buttons, the restart button
    is programed to restart the game and reset variables on
    click, and the buttons on the grid display the appropriate
    X or O depending on turn, unless the game is over or the 
    space is filled
*/
$('.restart').on('click', function() {
    $('h1').text('');
    turn = 0;
    $('#turn').text('Current Turn: O');
    grid.board = grid.makeGrid();
    gameOver = false;
    player = '';
})

$('.btn-new').on('click', function() {
    if (turn % 2 == 0) {
        if ($(this).children().text() == '') {
            $(this).children().text('O');
            $('#turn').text('Current Turn: X');
            player = 'O';
            turn++;
        }
        
    } else {
        if ($(this).children().text() == '') {
            $(this).children().text('X');
            $('#turn').text('Current Turn: O');
            player = 'X';
            turn++;
        }
    };

    /*
        checkWin() function does logic necessary to determine 
        win state after each button click and player move, 
        and valueToGrid() adds the X or O to the array of 
        spaces
    */
    grid.valueToGrid(this.value);
    grid.checkWin();
    if (gameOver) {
        $('#win-modal').modal('toggle');
        $('.modal-title').text(`Player ${player} wins!`);
    }   else if ($('h1:contains("O")').length == 5) {
            $('#win-modal').modal('toggle');
            $('.modal-title').text(`Everyone Loses!`);
        }

})

/*
    Grid class with constructor for array containing 
    elements representing each individual button
*/
class Grid {
    constructor() {
        this.board = this.makeGrid();
    }

    makeGrid() {
        let grid = Array(3);
        for (let i = 0; i < 3; i++) {
            grid[i] = [0, 0, 0];
        }
        return grid;
    }

    /*
        using a switch to assign player move to 
        appropriate element in array
    */
    valueToGrid(value) {
        let row0 = this.board[0];
        let row1 = this.board[1];
        let row2 = this.board[2];

        switch (value) {
            case '0':
                row0.splice(0, 1, $('button[value=0]').text());
                break;
            case '1':
                row0.splice(1, 1, $('button[value=1]').text());
                break;
            case '2':
                row0.splice(2, 1, $('button[value=2]').text());
                break;
            case '3':
                row1.splice(0, 1, $('button[value=3]').text());
                break;
            case '4':
                row1.splice(1, 1, $('button[value=4]').text());
                break;
            case '5':
                row1.splice(2, 1, $('button[value=5]').text());
                break;
            case '6':
                row2.splice(0, 1, $('button[value=6]').text());
                break;
            case '7':
                row2.splice(1, 1, $('button[value=7]').text());
                break;
            case '8': 
                row2.splice(2, 1, $('button[value=8]').text());
                break;
            default:
                break;
        }
    }

    /*
        this function contains the logic for checking 
        each element and surrounding element to determine
        if the game has ended via player win

        i use Array.prototype.every() to determine if every
        element in a given array is matching and also not
        the numerical value of 0  
    */
    checkWin() {
        for (let i = 0; i < this.board.length; i++) {
            let j = this.board[i];
            if (j.every(this.isEqual) && j[0] != 0) {
                gameOver = true;
                return true;    
            }
        }

        //loops and logic for creating columns from
        //the array of rows already present, then
        //comparing elements inside
        for (let i = 0; i < 3; i++) {
            let columns = [];    

            for (let j = 0; j < 3; j++) {
                let test = this.board[j]
                columns.push(test[i]);
            }

            if (columns.every(this.isEqual) && columns[0] != 0) {
                gameOver = true;
                return true;     
            }
        }

        //variables representing both diagonals on grid
        let diagonalLeft = []; 
        let diagonalRight = [];

        for (let i = 0; i < 3; i++) {   

            for (let j = 0; j < 3; j++) {
                let test = this.board[j]
                if (j == i) {
                    diagonalLeft.push(test[i]);
                }
                
                //unhinged OR-statement incoming
                if (Math.abs(j - i) == 2 || Math.fround(Math.tan(j)) == Math.fround(Math.sin(2) / (i + Math.cos(2)))) {
                    diagonalRight.push(test[i]);
                }
            }
        }

        if (diagonalLeft.every(this.isEqual) && diagonalLeft[0] != 0) {
            gameOver = true;
            return true;     
        } else if (diagonalRight.every(this.isEqual) && diagonalRight[0] != 0) {
            gameOver = true;
            return true;
        }

        return false;
    }

    /*
        below function returns true when 
        called as arg in the every() array 
        operation and every element in 
        the array is identical
    */
    isEqual(element, index, array) {
        return element == array[0];
    }
}

//initializing new Grid on page load
let grid = new Grid



