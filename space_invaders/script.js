var hero = {
    top: 700,
    left: 600
};

var missles = []

var enemies = [
    {left: 450 , top: 100},
    {left: 750 , top: 150},
    {left: 600 , top: 100},
    {left: 200 , top: 150},
    {left: 1000 , top: 100},
    {left: 100 , top: 150},
    {left: 900 , top: 100},
    {left: 300 , top: 150}
]

document.onkeydown = function(e){
    
    if(e.keyCode === 37){
        console.log('left');
        hero.left = hero.left - 10;
        moveHero()
    }
    else if(e.keyCode ===39){
        console.log('right');
        hero.left = hero.left + 10;
        moveHero()
    }
    else if(e.keyCode === 32){
        console.log('fire')
        missles.push({
            left: hero.left + 15,
            top: hero.top - 30
        })
        drawMissiles()
    }

}

function moveHero(){
    document.getElementById('the_hero').style.left = hero.left +"px"
}

function drawMissiles(){
    document.getElementById('missiles').innerHTML = "";
    for(let i=0;i<missles.length; i++){
        document.getElementById('missiles').innerHTML +=
        `<div class='missile' style='left:${missles[i].left}px; 
        top:${missles[i].top}px;'></div>`;
    }
}

function moveMissiles(){
    for(i=0;i<missles.length;i++){
        missles[i].top = missles[i].top - 5;
    }
}


function drawEnemies(){
    document.getElementById('enemies').innerHTML = "";
    for(let i=0;i<enemies.length; i++){
        document.getElementById('enemies').innerHTML +=
        `<div class='enemy' style='left:${enemies[i].left}px; 
        top:${enemies[i].top}px;'></div>`;
    }
}

function moveEnemies(){
    for(i=0;i<enemies.length;i++){
        enemies[i].top = enemies[i].top + 1;
    }
}

function collisionDetection(){
    for(let i=0;i<enemies.length;i++){
        for(let j=0;j<missles.length; j++){
            if(
                (missles[j].top <= enemies[i].top +50) &&
                (missles[j].top >= enemies[i].top) &&
                (missles[j].left >= enemies[i].left) &&
                (missles[j].left <= enemies[i].left + 50)
            ){
                enemies.splice(i, 1);
                missles.splice(j, 1);
            }
        }
    }
}


function gameLoop(){
    setTimeout(gameLoop, 100);
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetection();
}


gameLoop();

