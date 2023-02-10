/** @type {HTMLCanvasElement} */

const pic_width = Math.floor(window.innerWidth/12);
let pic_height = Math.floor(window.innerHeight/6);

if(pic_height%2 != 0) pic_height+=1;

// Canvas attributes
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = (pic_width * 5);
const CANVAS_HEIGHT = canvas.height = (pic_height * 3);
const numberOffReels = 5;
const reelsArray = [];

// Game attributes
let gameFrame = 0;
let Stop1 = false;
let Stop2 = false;
let Stop3 = false;
let Stop4 = false;
let Stop5 = false;

let matrix = [];
for(let i=0; i<3; i++) {
    matrix[i] = new Array(5);
}

if(!localStorage.getItem("bank"))  {
    var money = 1000;
} 
else {
    var money = localStorage.getItem("bank");
}

const cash = document.getElementById("cash");
cash.innerHTML = "Cash: "+ money;

const results = document.getElementById("results");
results.innerHTML = "";

var roll = 0;

// Creating Reel class
class Reel {
    constructor(x, y, z) {
        
        this.music = new Audio();
        this.music.src = "RollUp.ogg"  // found at https://opengameart.org/content/roll-up

        this.roll = new Audio();
        this.roll.src = "roll.mp3"
        
        this.images = ["dealer.png", "dealer.png", "dealer.png", "dealer.png", "gambler.png", "gambler.png", "gambler.png", "slots.png", "slots.png", "white.png"]
        
        this.image1 = new Image();
        this.pic_number1 = Math.floor(Math.random() * this.images.length);
        this.image1.src = this.images[this.pic_number1];
        
        this.image2 = new Image();
        this.pic_number2 = Math.floor(Math.random() * this.images.length);
        this.image2.src = this.images[this.pic_number2];

        this.image3 = new Image();
        this.pic_number3 = Math.floor(Math.random() * this.images.length);
        this.image3.src = this.images[this.pic_number3];

        this.image4 = new Image();
        this.pic_number4 = Math.floor(Math.random() * this.images.length);
        this.image4.src = this.images[this.pic_number4];
        
        this.spriteWidth = 128;
        this.spriteHeight = 128;
        this.width = pic_width;
        this.height = pic_height;
        this.x = x;
        this.y = y;
        this.z = z;
        this.frame = 0;
        this.rounds1 = 1;
        this.rounds2 = 1;
        this.rounds3 = 1;
        this.rounds4 = 1;
        this.rounds5 = 1;
        this.random1 = 3;
        this.random2 = 0;    
        this.p4 = -1*pic_height;
        this.p1 = 0*pic_height;
        this.p2 = 1*pic_height;
        this.p3 = 2*pic_height;
        this.speed = pic_height/4;
        this.numb = 0;
        console.log(pic_height);
        
    }
    update() {
        if (this.y + this.height >= canvas.height) this.y = 0;
        this.y += this.speed;
        
        if (this.p1 >= canvas.height) this.p1 = -1*pic_height;
        this.p1 += this.speed;
        
        if (this.p2 >= canvas.height) this.p2 = -1*pic_height;
        this.p2 += this.speed;
        
        if (this.p3 >= canvas.height) this.p3 = -1*pic_height;
        this.p3 += this.speed;

        if (this.p4 >= canvas.height) this.p4 = -1*pic_height;
        this.p4 += this.speed;
    }

    update2() {
        if (this.rounds1 === 0 && this.rounds2 !== 0 && this.y === 0 * pic_height  || this.rounds1 === 0 && this.rounds2 !== 0 && this.y === 1 * pic_height || this.rounds1 === 0 && this.rounds2 !== 0 && this.y === 2 * pic_height) {
            this.rounds2 = Math.floor(Math.random() * this.random1 + this.random2)
            if(Stop1===false) {
                money-=100;
                cash.innerHTML = "Cash: "+ money;

                var arr = 0;
                var x_cord = 0;
                var position = 0*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 1;
                x_cord = 0;
                position = 1*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 2;
                x_cord = 0;
                position = 2*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];
              
            }
            Stop1 = true;
        }
        else if (this.rounds2 === 0 && this.rounds3 !== 0 && this.y === 0 * pic_height || this.rounds2 === 0 && this.rounds3 !== 0 && this.y === 1 * pic_height || this.rounds2 === 0 && this.rounds3 !== 0 && this.y === 2 * pic_height) {
            this.rounds3 = Math.floor(Math.random() * this.random1 + this.random2)
            if(Stop1===true && Stop2 ===false) {

                arr = 0;
                x_cord = 1;
                position = 0*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 1;
                x_cord = 1;
                position = 1*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 2;
                x_cord = 1;
                position = 2*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];
               
            }
            Stop2 = true;
        }
        else if (this.rounds3 === 0 && this.rounds4 !== 0 && this.y === 0 * pic_height || this.rounds3 === 0 && this.rounds4 !== 0 && this.y === 1 * pic_height || this.rounds3 === 0 && this.rounds4 !== 0 && this.y === 2 * pic_height) {
            this.rounds4 = Math.floor(Math.random() * this.random1 + this.random2);
            if(Stop2===true && Stop3 ===false) {

                arr = 0;
                x_cord = 2;
                position = 0*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 1;
                x_cord = 2;
                position = 1*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 2;
                x_cord = 2;
                position = 2*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

            }
            Stop3 = true;
        }
        else if (this.rounds4 === 0 && this.rounds5 !== 0 && this.y === 0 * pic_height || this.rounds4 === 0 && this.rounds5 !== 0 && this.y === 1 * pic_height || this.rounds4 === 0 && this.rounds5 !== 0 && this.y === 2 * pic_height) {
            this.rounds5 = Math.floor(Math.random() * this.random1 + this.random2);
            if(Stop3===true && Stop4 ===false) {

                arr = 0;
                x_cord = 3;
                position = 0*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 1;
                x_cord = 3;
                position = 1*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 2;
                x_cord = 3;
                position = 2*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];
        
            }
            Stop4 = true;
        }
        else if (this.rounds5 === 0 && this.y === 0 * pic_height || this.rounds5 === 0 && this.y === 1 * pic_height || this.rounds5 === 0 && this.y === 2 * pic_height ) {
            if(Stop4===true && Stop5 ===false) {

                arr = 0;
                x_cord = 4;
                position = 0*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 1;
                x_cord = 4;
                position = 1*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];

                arr = 2;
                x_cord = 4;
                position = 2*pic_height;
                if(this.p1===position) matrix[arr][x_cord] = this.images[this.pic_number1];
                if(this.p2===position) matrix[arr][x_cord] = this.images[this.pic_number2];
                if(this.p3===position) matrix[arr][x_cord] = this.images[this.pic_number3];
                if(this.p4===position) matrix[arr][x_cord] = this.images[this.pic_number4];
            }
            
            Stop5 = true;
        }
        else {
            this.rounds1 = Math.floor(Math.random() * this.random1 + this.random2);
        }
        
        if (this.y + this.height >= canvas.height) this.y = 0;
        this.y += this.speed;
        
        if (this.p1 >= canvas.height) this.p1 = -1*pic_height;
        this.p1 += this.speed;
        
        if (this.p2 >= canvas.height) this.p2 = -1*pic_height;
        this.p2 += this.speed;
        
        if (this.p3 >= canvas.height) this.p3 = -1*pic_height;
        this.p3 += this.speed;

        if (this.p4 >= canvas.height) this.p4 = -1*pic_height;
        this.p4 += this.speed;
    }

    play() {
        this.music.play();
        //this.roll.play();
    }

    stop() {
        this.music.pause();
        //this.roll.pause();
    }

    draw() {
        ctx.drawImage(this.image1, 0, 0, this.spriteWidth, this.spriteHeight, this.x, (this.p1), this.width, this.height);
        ctx.drawImage(this.image2, 0, 0, this.spriteWidth, this.spriteHeight, this.x, (this.p2), this.width, this.height);
        ctx.drawImage(this.image3, 0, 0, this.spriteWidth, this.spriteHeight, this.x, (this.p3), this.width, this.height);
        ctx.drawImage(this.image4, 0, 0, this.spriteWidth, this.spriteHeight, this.x, (this.p4), this.width, this.height);  
    }
}

// Creating reels in array
for (let i = 0; i < numberOffReels; i++) {
    let num1 = i * pic_width;
    let num2 = 0 * pic_height;
    let num3 = i;
    reelsArray.push(new Reel(num1, num2, num3));
}

// Creating animation
animate1 = () => {
    if(roll===0) {
        ctx.clearRect(0 * pic_width, 0, pic_width, CANVAS_HEIGHT);      
        reelsArray[0].draw();
        reelsArray[0].update2();
        reelsArray[1].draw();
        reelsArray[1].update();
        reelsArray[2].draw();
        reelsArray[2].update();
        reelsArray[3].draw();
        reelsArray[3].update();
        reelsArray[4].draw();
        reelsArray[4].update();

        reelsArray[0].play();

        gameFrame++;
        if (!Stop1) {
            requestAnimationFrame(animate1);
        }
        else {
            animate2 = () => {
                ctx.clearRect(1 * pic_width, 0, pic_width, CANVAS_HEIGHT);
                reelsArray[1].draw();
                reelsArray[1].update2();
                reelsArray[2].draw();
                reelsArray[2].update();
                reelsArray[3].draw();
                reelsArray[3].update();
                reelsArray[4].draw();
                reelsArray[4].update();

                // reelsArray[0].stop();
                // reelsArray[1].play();
                
                gameFrame++;
                if (!Stop2) {
                    requestAnimationFrame(animate2);
                }
                else {
                    animate3 = () => {
                        ctx.clearRect(2 * pic_width, 0, pic_width, CANVAS_HEIGHT);
                        reelsArray[2].draw();
                        reelsArray[2].update2();
                        reelsArray[3].draw();
                        reelsArray[3].update();
                        reelsArray[4].draw();
                        reelsArray[4].update();

                        // reelsArray[1].stop();
                        // reelsArray[2].play();

                        gameFrame++;
                        if (!Stop3) {
                            requestAnimationFrame(animate3);
                        }
                        else {
                            animate4 = () => {
                                ctx.clearRect(3 * pic_width, 0, pic_width, CANVAS_HEIGHT);
                                reelsArray[3].draw();
                                reelsArray[3].update2();
                                reelsArray[4].draw();
                                reelsArray[4].update();

                                // reelsArray[2].stop();
                                // reelsArray[3].play();

                                gameFrame++;
                                if (!Stop4) {
                                    requestAnimationFrame(animate4);
                                }
                                else {
                                    animate5 = () => {
                                        ctx.clearRect(4 * pic_width, 0, pic_width, CANVAS_HEIGHT);
                                        reelsArray[4].draw();
                                        reelsArray[4].update2();


                                        // reelsArray[3].stop();
                                        // reelsArray[4].play();

                                        gameFrame++;
                                        if (!Stop5) {
                                            requestAnimationFrame(animate5);
                                        } else {
                                            winning();
                                            reelsArray[0].stop();
                                            // reelsArray[1].stop();
                                            // reelsArray[2].stop();
                                            // reelsArray[3].stop();
                                            // reelsArray[4].stop();
                                        }
                                    }
                                    animate5();
                                }
                            }
                            animate4();
                        }
                    }
                    animate3();
                }
            }
            animate2();
        }
    } else if(roll===1) {
        refresh2();
    }
}

refresh2 = () => {   
    location.reload();   
}

winning = () => {
    var total=0;
    for(var i=0; i<3; i++) {
        for(var j=0; j<5; j++) {

            if(matrix[i][j]==="dealer.png") {
                let id = "dealer";
                let multi = 1;
                let win = 20;

                if(matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3] && matrix[i][j+3]===matrix[i][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                    
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
              
                if(i===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+0][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 & j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }

                if(i===0 && matrix[i][j]==="dealer.png" && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+2][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="dealer.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="dealer.png" &&  j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
            }

            else if(matrix[i][j]==="gambler.png") {
                let id = "gambler";
                let multi = 2;
                let win = 20;

                if(matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3] && matrix[i][j+3]===matrix[i][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                    
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
              
                if(i===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+0][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 & j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }

                if(i===0 && matrix[i][j]==="gambler.png" && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+2][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="gambler.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="gambler.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
            }
            else if(matrix[i][j]==="slots.png") {
                let id = "slots";
                let multi = 3;
                let win = 20;

                if(matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3] && matrix[i][j+3]===matrix[i][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                    
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
              
                if(i===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+0][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 & j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }

                if(i===0 && matrix[i][j]==="slots.png" && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+2][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="slots.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="slots.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
            }
            else if(matrix[i][j]==="white.png") {
                let id = "white";
                let multi = 4;
                let win = 20;

                if(matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3] && matrix[i][j+3]===matrix[i][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                    
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(j===0 && matrix[i][j]===matrix[i][j+1] && matrix[i][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on straight line "+parseInt(i+1)+"! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
              
                if(i===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+0][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 & j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2] && matrix[i+2][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && j===0 && matrix[i][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i+2][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from top! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }

                if(i===0 && matrix[i][j]==="white.png" && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3] && matrix[i+1][j+3]===matrix[i+2][j+4]) {
                    let hit = 5;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="white.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2] && matrix[i][j+2]===matrix[i+1][j+3]) {
                    let hit = 4;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
                
                else if(i===0 && matrix[i][j]==="white.png" && j===0 && matrix[i+2][j]===matrix[i+1][j+1] && matrix[i+1][j+1]===matrix[i][j+2]) {
                    let hit = 3;
                    money+=parseInt(hit*win*multi);
                    results.innerHTML += hit + " of a " + id + " on diaconal line from bottom! You win " + parseInt(hit*win*multi)+"!" +" <br>";
                    total +=parseInt(hit*win*multi);
                }
            }         
        }
    }
    if(total===0) {
        // let s = Math.floor(Math.random() * 2 + 0);
        // if(s===1) {
            results.innerHTML += "LOOOOSER!!! <br> <b>" + "Total winning: " + total + "</b>";
            var loser = new Audio();
            loser.src = "looser.wav"
            loser.play()
            var laugh = new Audio();
            laugh.src = "laugh.wav"
            laugh.play()
        // }
        // else {
        //     results.innerHTML += "Go and jump to the toilet, MORON! <br> <b>" + "Total winning: " + total + "</b>";
        //     var toilet = new Audio();
        //     toilet.src = "toilet.wav"
        //     toilet.play()
        // }  
        
    } else {
        results.innerHTML += "<b>" + "Total winning: " + total + "</b>";
    }
    
    localStorage.setItem("bank", money);
    console.log(localStorage.getItem("bank"))
    cash.innerHTML = "Cash: "+ money;
    roll = 1;
}
