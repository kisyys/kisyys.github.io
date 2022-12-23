/** @type {HTMLCanvasElement} */

// Canvas attributes
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// CollisionCanvas attributes
const collisionCanvas = document.getElementById("collisionCanvas");
const collisionCtx = collisionCanvas.getContext("2d");
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

if(!localStorage.getItem("best"))  {
    var score_best = 0;
} 
else {
    var score_best = localStorage.getItem("best");
}

// Other attributes
let score = 0;
let GameOver = false;
ctx.font = "50px Impact";
let timeToNextRave = 0;
let ravenInterval = 1200;
let lastTime = 0;

// Creating Raven class and array
let ravens = [];
class Raven {
    constructor(x2) {
        this.spriteWidth = 200;
        this.spiteHeight = 202;
        this.sizeModifier = Math.random() * 0.4 + 0.4;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spiteHeight * this.sizeModifier;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * (2.5 + x2) + (2.0 + x2);
        this.directionY = Math.random() * 3 + 2.5;
        this.markedForDeletion = false;
        this.image = new Image();
        this.image.src = "turtle2.png";
        this.frame = 0;
        this.maxFrame = 0;
        this.timeSinceFlap = 0;
        this.flapInterval = Math.random() * 150 + 100;
        this.randomColors = [Math.floor(Math.random()* 255), Math.floor(Math.random()* 255), Math.floor(Math.random()* 255)]
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
        //this.hasTrail = Math.random() > 0.5;
        this.hasTrail = 0;
    }
    update(deltatime) {
        if (this.y < 0 || this.y > canvas.height - this.height) {
            this.directionY = this.directionY * -1;
        }
        this.x -= this.directionX;
        this.y += this.directionY; 
        if(this.x < 0 - this.width) this.markedForDeletion = true;
        this.timeSinceFlap += deltatime;
        if(this.timeSinceFlap > this.flapInterval) {
            if(this.frame > this.maxFrame) this.frame = 0;
            else this.frame++;
            this.timeSinceFlap = 0;
            if(this.hasTrail) {
                for(let i = 0; i < 5; i++) {
                    particles.push(new Particle(this.x, this.y, this.width, this.color));
                }  
            }     
        }
        if(this.x < 0 - this.width + window.innerWidth/6 + 50) GameOver = true; 
    }
    draw() {
        collisionCtx.fillStyle = this.color;
        collisionCtx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spiteHeight, this.x, this.y, this.width, this.height);
    }
}

// Creating Explosion class and array
let explosions = [];
class Explosion {
    constructor(x, y, size) {
        this.image = new Image();
        this.image.src = "boom.png";  
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.size = size;
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.sound = new Audio();
        this.sound.src = "boom.wav"  // found at https://opengameart.org/content/magic-sfx-sample
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.markedForDeletion = false;
    }
    update(deltatime) {
        if(this.frame===0) this.sound.play();
        this.timeSinceLastFrame += deltatime;
        if(this.timeSinceLastFrame > this.frameInterval) {
            this.frame++;
            this.timeSinceLastFrame = 0;
            if(this.frame > 5) this.markedForDeletion = true;
        } 
    }
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y - this.size/4, this.size, this.size);
    }
}

// Creating Particle class and array
let particles = [];
class Particle {
    constructor(x, y, size, color) {
        this.size = size;
        this.x = x + this.size/2 + Math.random() * 50 - 25;
        this.y = y + this.size/3 + Math.random() * 50 - 25;
        this.radius = Math.random() * this.size/10;
        this.MaxRadius = Math.random() * 20 + 35;
        this.markedForDeletion = false;
        this.speedX = Math.random() * 1 + 0.5;
        this.color = color;        
    }
    update() {
        this.x += this.speedX;
        this.radius += 0.3;
        if(this.radius > this.MaxRadius - 5) this. markedForDeletion = true;    
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = 1 - this.radius/this.MaxRadius;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Creating score counter
drawScore = () => {
    ctx.fillStyle = "black";
    ctx.font = "25px Georgia";
    ctx.fillText("Pisteet: " + score, canvas.width/1.5, 40);
    ctx.fillStyle = "white";
    ctx.fillText("Pisteet: " + score, canvas.width/1.5, 42);
    ctx.fillStyle = "black";
    ctx.fillText("Paras tulos: " + score_best, canvas.width/1.5, 65);
    ctx.fillStyle = "white";
    ctx.fillText("Paras tulos: " + score_best, canvas.width/1.5, 67);
}


drawMario = () => {
    let image = new Image();
    image.src = "mario6.png";
    ctx.drawImage(image, 0, 0, window.innerWidth/6, window.innerHeight);
}

// Creating game over screen
drawGameOver = () => {
    ctx.textAlign = "center";
    
    if(score>1) {
        ctx.fillStyle = "black";
        ctx.font = "30px Georgia";
        ctx.fillText(`Peli loppui`, canvas.width/2, canvas.height/2.4);
        ctx.fillText(`Hyvin pelattu Lukas!`, canvas.width/2, canvas.height/2);
        ctx.fillStyle = "blue";
        ctx.fillText(`Peli loppui`, canvas.width/2, canvas.height/2.4+2);
        ctx.fillText(`Hyvin pelattu Lukas!`, canvas.width/2, canvas.height/2+2);
        // ctx.fillStyle = "red";
        // ctx.font = "25px Georgia";
        // ctx.fillText(`Pelaa uudestaan?`, canvas.width/2, canvas.height/1.6);
        // let { width } = ctx.measureText("Pelaa uudestaan?");
        // ctx.fillRect(canvas.width/2-(width/2), canvas.height/1.6+1, width, 2);    
    }
    else {
        ctx.fillStyle = "black";
        ctx.font = "30px Georgia";
        ctx.fillText(`Peli loppui`, canvas.width/2, canvas.height/2);
        ctx.fillStyle = "blue";
        ctx.fillText(`Peli loppui`, canvas.width/2, canvas.height/2+2)      
    }

    if(score_best<score) {
        localStorage.setItem("best", score);
    }

    setTimeout(again, 1200);
    setTimeout(refresh2, 1300);
}

again = () => { 
    ctx.fillStyle = "red";
    ctx.font = "25px Georgia?";
    ctx.fillText(`Pelaa uudestaan?`, canvas.width/2, canvas.height/1.6);
    let { width } = ctx.measureText("Pelaa uudestaan?");
    ctx.fillRect(canvas.width/2-(width/2), canvas.height/1.6+1, width, 2);  
}

refresh2 = () => { 
    window.addEventListener("click", function() {
        location.reload();
    });
}

// Creating Event Listener for collision
window.addEventListener("click", function(e) {
    const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 1, 1);
    //console.log(detectPixelColor);
    const pc = detectPixelColor.data;
    ravens.forEach(object => {
        if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2] ) {
            // collision detected
            object.markedForDeletion = true;
            score++;
            explosions.push(new Explosion(object.x, object.y, object.width));
            //console.log(explosions);
        }
    });
});

let x2 = 0;
// Creating animation
animate = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collisionCtx.clearRect(0, 0, canvas.width, canvas.height);
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextRave += deltatime;
    if(timeToNextRave > ravenInterval) {
        x2+=0.3;
        ravens.push(new Raven(x2));
        timeToNextRave = 0;
        ravens.sort(function(a,b) {
            return a.width - b.width;
        })
    };
    drawScore();
    drawMario();
    [...particles, ...ravens, ...explosions].forEach(object => object.update(deltatime));
    [...particles, ...ravens, ...explosions].forEach(object => object.draw());
    ravens = ravens.filter(object => !object.markedForDeletion);
    explosions = explosions.filter(object => !object.markedForDeletion);
    particles = particles.filter(object => !object.markedForDeletion);
    if(!GameOver) requestAnimationFrame(animate);
    else drawGameOver();   
}
animate(0);
