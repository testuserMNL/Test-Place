var Player = "X"
var suaraklik = new Audio();
suaraklik.src = "Audio/Coin.wav";

var suarawin = new Audio();
suarawin.src = "Audio/Win.wav";

function clickbutton(x) {
    document.getElementById("btn" + x + "F").style.transform = "perspective(600px)rotateY(-180deg)"
    document.getElementById("btn" + x + "B").style.transform = "perspective(600px)rotateY(0deg)"
    suaraklik.play();

    document.getElementById("btn"+ x +"B").innerHTML=Player;
    document.getElementById("btn"+ x +"B").value = Player;

    document.getElementById("btn" + x + 'B').disabled = "disabled";

    if (Player == "X") {
        document.getElementById("ket").innerHTML = "Giliran Player : O";
        winnercheck();
        Player = "O";
    } else {
        document.getElementById("ket").innerHTML = "Giliran Player : X";
        winnercheck();
        Player = "X";
    }
} 

{
    if (Player == "X") {
        winnercheck();
        Player = "O";
    } else {
        winnercheck();
        Player = "X";
    } 
}


function winnercheck() {
    if (
        document.getElementById('btn1B').value==Player &&
        document.getElementById('btn2B').value==Player &&
        document.getElementById('btn3B').value==Player 
    ) {
        Win(1, 2, 3);
    } else if (
        document.getElementById('btn4B').value==Player &&
        document.getElementById('btn5B').value==Player &&
        document.getElementById('btn6B').value==Player 
    ) {
        Win(4, 5, 6);
    } else if (
        document.getElementById('btn7B').value==Player &&
        document.getElementById('btn8B').value==Player &&
        document.getElementById('btn9B').value==Player 
    ) {
        Win(7, 8, 9);
    } else if (
        document.getElementById('btn1B').value==Player &&
        document.getElementById('btn4B').value==Player &&
        document.getElementById('btn7B').value==Player 
    ) {
        Win(1, 4, 7);
    } else if (
        document.getElementById('btn2B').value==Player &&
        document.getElementById('btn5B').value==Player &&
        document.getElementById('btn8B').value==Player 
    )
    {
        Win(2, 5, 8);
    } else if (
        document.getElementById('btn3B').value==Player &&
        document.getElementById('btn6B').value==Player &&
        document.getElementById('btn9B').value==Player 
    )
    {
        Win(3, 6, 9);
    } else if (
        document.getElementById('btn1B').value==Player &&
        document.getElementById('btn5B').value==Player &&
        document.getElementById('btn9B').value==Player 
    ) {
        Win(1, 5, 9);
    } else if (
        document.getElementById('btn3B').value==Player &&
        document.getElementById('btn5B').value==Player &&
        document.getElementById('btn7B').value==Player 
    ) {
        Win(3, 5, 7);
    }

    function Win(a,b,c) {
        suarawin.play();
    document.getElementById("ket").innerHTML="Pemenangnya adalah Pemain "+Player;

    for (i = 1; i <10; i++){
        document.getElementById("btn" + i + "F").disabled = "disabled";
    }

    var x = 1;
    function animasi() {
        if (x == 1) {
            document.getElementById("btn" + a + "B").style.background = "#ccc";
            document.getElementById("btn" + b + "B").style.background = "#999";
            document.getElementById("btn" + c + "B").style.background = "#777";
            x=2
        } else if (x == 2) {
            document.getElementById("btn" + c + "B").style.background = "#ccc";
            document.getElementById("btn" + a + "B").style.background = "#999";
            document.getElementById("btn" + b + "B").style.background = "#777";
            x=3
        } else if (x == 3) {
            document.getElementById("btn" + b + "B").style.background = "#ccc";
            document.getElementById("btn" + c + "B").style.background = "#999";
            document.getElementById("btn" + a + "B").style.background = "#777";
            x=1
        }
    }
    setInterval(animasi, 150);
}
}