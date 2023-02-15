var b1 = document.getElementById("1");
var b2 = document.getElementById("2");
var b3 = document.getElementById("3");
var b4 = document.getElementById("4");
var b5 = document.getElementById("5");
var b6 = document.getElementById("6");
var b7 = document.getElementById("7");
var b8 = document.getElementById("8");
var b9 = document.getElementById("9");
var dontType = document.getElementById("try");
var container = document.getElementById("containerr");
var boxWidth = b1.offsetWidth;
var num = 0 ;
var XorO = "";
var dash = document.getElementById("dash");
var isDraw = "";
var canWriteInB1 = true;
var canWriteInB2 = true;
var canWriteInB3 = true;
var canWriteInB4 = true;
var canWriteInB5 = true;
var canWriteInB6 = true;
var canWriteInB7 = true;
var canWriteInB8 = true;
var canWriteInB9 = true;
var X = 0;
var O = 0;
document.getElementById('x').innerHTML = X;
document.getElementById('o').innerHTML = O;

//To make the boxes square
container.style.gridTemplateRows = `repeat(3 , ${boxWidth}px)`;

function canNotWrite(){
    canWriteInB1 = false;
    canWriteInB2 = false;
    canWriteInB3 = false;
    canWriteInB4 = false;
    canWriteInB5 = false;
    canWriteInB6 = false;
    canWriteInB7 = false;
    canWriteInB8 = false;
    canWriteInB9 = false;
}
var whoFirst = 0;




function reset(){
    clearInterval(myTimer);
    b1.innerHTML = '';
    b2.innerHTML = '';
    b3.innerHTML = '';
    b4.innerHTML = '';
    b5.innerHTML = '';
    b6.innerHTML = '';
    b7.innerHTML = '';
    b8.innerHTML = '';
    b9.innerHTML = '';
    whoFirst ++;
    if((whoFirst % 2) === 1){
        num = 1;
        dash.innerHTML = "O's Turn";
    }else if((whoFirst % 2) === 0){
        num = 0;
        dash.innerHTML = "X's Turn";
    }
    isDraw = "";
    canWriteInB1 = true;
    canWriteInB2 = true;
    canWriteInB3 = true;
    canWriteInB4 = true;
    canWriteInB5 = true;
    canWriteInB6 = true;
    canWriteInB7 = true;
    canWriteInB8 = true;
    canWriteInB9 = true;
    dontType.style.display = "none";
}

function winner(){
    if( (b1.innerHTML === b2.innerHTML && b2.innerHTML === b3.innerHTML) && (b1.innerHTML === 'X' || b1.innerHTML === 'O') ){
        canNotWrite();
        dash.innerHTML = b1.innerHTML + " Won";
        if(b1.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b1.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b4.innerHTML === b5.innerHTML && b5.innerHTML === b6.innerHTML) && (b4.innerHTML === 'X' || b4.innerHTML === 'O') ){
        canNotWrite();
        dash.innerHTML = b4.innerHTML + " Won";
        if(b4.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b4.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b7.innerHTML === b8.innerHTML && b8.innerHTML === b9.innerHTML) && (b7.innerHTML === 'X' || b7.innerHTML === 'O')){
        canNotWrite();
        dash.innerHTML = b7.innerHTML + " Won";
        if(b7.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b7.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b1.innerHTML === b4.innerHTML && b4.innerHTML === b7.innerHTML) && (b1.innerHTML === 'X' || b1.innerHTML === 'O')){
        canNotWrite();
        dash.innerHTML = b1.innerHTML + " Won";
        if(b1.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b1.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b2.innerHTML === b5.innerHTML && b5.innerHTML === b8.innerHTML)  && (b2.innerHTML === 'X' || b2.innerHTML === 'O')){
        canNotWrite();
        dash.innerHTML = b2.innerHTML + " Won";
        if(b2.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b2.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b3.innerHTML === b6.innerHTML && b6.innerHTML === b9.innerHTML)  && (b3.innerHTML === 'X' || b3.innerHTML === 'O')){
        canNotWrite();
        dash.innerHTML = b3.innerHTML + " Won";
        if(b3.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b3.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b1.innerHTML === b5.innerHTML && b5.innerHTML === b9.innerHTML) && (b1.innerHTML === 'X' || b1.innerHTML === 'O')){
        canNotWrite();
        dash.innerHTML = b1.innerHTML + " Won";
        if(b1.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b1.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( (b3.innerHTML === b5.innerHTML && b5.innerHTML === b7.innerHTML)  && (b3.innerHTML === 'X' || b3.innerHTML === 'O')){
        canNotWrite();
        dash.innerHTML = b3.innerHTML + " Won";
        if(b3.innerHTML === 'X'){
            X++;
            document.getElementById('x').innerHTML = X;
        }else if(b3.innerHTML === 'O'){
            O++;
            document.getElementById('o').innerHTML = O;
        }
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
    else if( ((whoFirst % 2) === 0 && num === 9)     ||   ((whoFirst % 2) === 1 && num === 10)){
        canNotWrite();
        isDraw = "Draw";
        myTimer = setInterval(reset, 1000);
        dontType.style.display = "block";
    }
}
function Draw(){
    if(isDraw === "Draw"){
        dash.innerHTML = "Draw";
        dontType.style.display = "block";
    }
}

function whoPlay(){
    if ((num % 2) === 0){
        dash.innerHTML = "O's Turn"
    }else{
        dash.innerHTML = "X's Turn"
    }
}



function play1(){
    var myTimer;
    if(canWriteInB1 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB1 === true){
        num ++;
        b1.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB1 === true){
        num ++;
        b1.innerHTML = "X";
    }
    canWriteInB1 = false;
    winner();
    Draw();
}
function play2(){
    var myTimer;
    if(canWriteInB2 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB2 === true){
        num ++;
        b2.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB2 === true){
        num ++;
        b2.innerHTML = "X";
    }
    canWriteInB2 = false;
    winner();
    Draw();
}
function play3(){
    var myTimer;
    if(canWriteInB3 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB3 === true){
        num ++;
        b3.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB3 === true){
        num ++;
        b3.innerHTML = "X";
    }
    canWriteInB3 = false;
    winner();
    Draw();
}
function play4(){
    var myTimer;
    if(canWriteInB4 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB4 === true){
        num ++;
        b4.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB4 === true){
        num ++;
        b4.innerHTML = "X";
    }
    canWriteInB4 = false;
    winner();
    Draw();
}
function play5(){
    var myTimer;
    if(canWriteInB5 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB5 === true){
        num ++;
        b5.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB5 === true){
        num ++;
        b5.innerHTML = "X";
    }
    canWriteInB5 = false;
    winner();
    Draw();
}
function play6(){
    var myTimer;
    if(canWriteInB6 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB6 === true){
        num ++;
        b6.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB6 === true){
        num ++;
        b6.innerHTML = "X";
    }
    canWriteInB6 = false;
    winner();
    Draw();
}
function play7(){
    var myTimer;
    if(canWriteInB7 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB7 === true){
        num ++;
        b7.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB7 === true){
        num ++;
        b7.innerHTML = "X";
    }
    canWriteInB7 = false;
    winner();
    Draw();
}
function play8(){
    var myTimer;
    if(canWriteInB8 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB8 === true){
        num ++;
        b8.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB8 === true){
        num ++;
        b8.innerHTML = "X";
    }
    canWriteInB8 = false;
    winner();
    Draw();
}
function play9(){
    var myTimer;
    if(canWriteInB9 === true){
        whoPlay();
    }
    if(((num % 2) === 1) && canWriteInB9 === true){
        num ++;
        b9.innerHTML = "O"
    }
    else if(((num % 2) != 1) && canWriteInB9 === true){
        num ++;
        b9.innerHTML = "X";
    }
    canWriteInB9 = false;
    winner();
    Draw();
}