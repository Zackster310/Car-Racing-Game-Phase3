var gameState = 0,playerCount,database,form,player,game;

var allPlayers;

var cars = [];
var car1,car2,car3,car4;

function setup(){
    createCanvas(displayWidth - 400 , displayHeight - 260);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    console.log(displayHeight);
    console.log(displayWidth);
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }
}
