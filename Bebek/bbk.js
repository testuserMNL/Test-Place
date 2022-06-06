var char1=new Image();
char1.src = "Images/char1.png";

var char2=new Image();
char2.src = "Images/char2.png";

var back=new Image();
back.src = "Images/bg.jpg";

var pole=new Image();
pole.src = "Images/tiang.png";

var dead=new Image();
dead.src = "Images/mati.png";


function startcanvas () {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var cW = canvas.width;
var cH = canvas.height;


// function splash() {

// }

main();
    function main() {
        var imagechange = false;

        function BG () {
            this.x = 0;
            this.render=function() {
                ctx.drawImage (back, this.x--, 0);

                if (this.x == -1599) {
                    this.x = 0;
                }
            }
        }
        var background = new BG();

        function Character () {
            this.x=100; this.y=200; this.w = 100; this.h = 100; this.i = 0;
            this.render = function () {
                if (imagechange) {
                ctx.drawImage (char1, this.x, this.y+=5);
                this.i++;
                if (this.i == 5) {
                imagechange = false;
                this.i = 0;
                }
                } else {
                ctx.drawImage (char2, this.x, this.y+=5);
                }
            }
        }
        var character = new Character();

        var Pole=[];   
        
        addPole();
        function addPole () {
            var x=800, y = 0, w = 50, h = 300;
            var mix = Math.floor(Math.random()*200)
            Pole.push({"x":x, "y":y-mix, "w":w, "h":h})
        }

        var count = 0;

        function end() {
            clearInterval(interval);
            ctx.clearRect(0, 0, cW, cH);
            background.render ();
            renderPole();
            ctx.drawImage(dead, character.x, character.y);

            ctx.font="Bold 60px arial";
            ctx.fillText("GAME OVER", 150, 290);

            ctx.font = "Normal 60px Arial";
            ctx.fillText("Score : "+score , 150, 340);
        }

        var score = 0, addnum=true;
        function addscore () {
            score++
        }

        function hit () {
            for (var i = 0; i < Pole.length; i++){
                var p=Pole[i];
                if((character.x + character.w > p.x && character.y < p.y+p.h && character.x<p.x+p.w)||(character.x+character.w > p.x && character.y+character.h > p.y+p.h+220 && character.x < p.x + p.w)) {
                    end();
                }else if (p.x+p.w<character) {
                    if (addnum) {
                        addscore();
                        addnum = false;
                    }
                }
            }
        
        if (character.y <= 10) {end(); }
        if (character.y+character.h>cH) {end(); }
        }

        function renderPole() {
            for (var i=0; i<Pole.length; i++) {
                var p=Pole[i];
                ctx.drawImage(pole, p.x--, p.y);
                ctx.drawImage(pole, p.x--, p.y+p.h+ 220);
                if (p.x+p.w<0) {
                    Pole.splice(i,1);
                    addnum = true;
                }
            }
            count++
            if (count==150){
                addPole();
                count = 0;
            }
        }
        function Animation () {
            ctx.save();
            ctx.clearRect(0,0,cW,cH);

            background.render ();

            character.render ();
            renderPole();

            ctx.font = "Normal 30px Arial";
            ctx.fillText('Score : '+score , 20, 60);

            hit();

            ctx.restore(); 
        }
        var interval = setInterval(Animation,30);

        ctx.canvas.addEventListener('click', function (event) {
            character.y -= 70;
            imagechange = true;
        })
    }
}

window.addEventListener('load', function (event) {
    startcanvas();
});
