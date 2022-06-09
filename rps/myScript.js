var list =[];
var r = 0;
var p = 0;
var s = 0;
var player = 0;
var computer = 0;
var over = 0;


function Reset() {
    document.getElementById("pic0").src = "Question.jpg";
    document.getElementById("p0").innerHTML = "<b> Player </b>";

    document.getElementById("pic1").src = "Question.jpg";
    document.getElementById("p1").innerHTML = "<b> Computer </b>";

    document.getElementById("winner").innerHTML = "Who will win?";

    list = [];
    r = 0;
    p = 0;
    s = 0;
    player = 0;
    computer = 0;
    over = 0;
}



function RPS(chosen) {
    
    if(over == 0) {

        //var random1 = Math.floor(Math.random() * 3);
        var random2 = Math.floor(Math.random() * 3);
        console.log(random2);

        var rock = 0;
        var paper = 1;
        var scissors = 2;

        if(list[list.length-1]==list[list.length-2] && list[list.length-1] == 0) {
            p=2;
            document.getElementById("pic1").src = "Paper.jpg";
            document.getElementById("p1").innerHTML = "<b> Computer: paper! </b>";

        } else {
            p=0;
        }

        if(list[list.length-1]==list[list.length-2] && list[list.length-1] == 1) {
            s=2;
            document.getElementById("pic1").src = "Scissors.jpg";
            document.getElementById("p1").innerHTML = "<b> Computer: scissors! </b>";

        } else {
            s=0;
        }

        if(list[list.length-1]==list[list.length-2] && list[list.length-1] == 2) {
            r=2;
            document.getElementById("pic1").src = "Rock.jpg";
            document.getElementById("p1").innerHTML = "<b> Computer: rock! </b>";

        } else {
            r=0;
        }
        
        if(r>=2) {
            random2 = 0;
            console.log("r=3")
        }
        
        else if (p>=2) {
            random2 = 1;
            console.log("p=3")
        } 

        else if (s>=2) {
            random2 = 2;
            console.log("s=3")
        }
        
        
        else {
            if(random2 == rock) {
                document.getElementById("pic1").src = "Rock.jpg";
                document.getElementById("p1").innerHTML = "<b> Computer: rock! </b>";		
            }
        
            if(random2 == paper) {
                document.getElementById("pic1").src = "Paper.jpg";
                document.getElementById("p1").innerHTML = "<b> Computer: paper! </b>";		
            }
        
            if(random2 == scissors) {
                document.getElementById("pic1").src = "Scissors.jpg";
                document.getElementById("p1").innerHTML = "<b> Computer: scissors! </b>";		
            }

        }

        if(chosen == rock) {
            document.getElementById("pic0").src = "Rock.jpg";
            document.getElementById("p0").innerHTML = "<b> Player: rock! </b>" ;	
        }

        if(chosen == paper) {
            document.getElementById("pic0").src = "Paper.jpg";
            document.getElementById("p0").innerHTML = "<b> Player: paper! </b>";		
        }

        if(chosen == scissors) {
            document.getElementById("pic0").src = "Scissors.jpg";
            document.getElementById("p0").innerHTML = "<b> Player: scissors! </b>";		
        }

        list.push(chosen);

        if(chosen==0 && random2==1) {
            document.getElementById("winner").innerHTML = "Computer won with paper!";
            computer++;
        }

        else if(chosen==0 && random2==2) {
            document.getElementById("winner").innerHTML = "Player won with rock!";
            player++;
        }

        else if(chosen==1 && random2==0) {
            document.getElementById("winner").innerHTML = "Player won with paper!";
            player++;
        }

        else if(chosen==1 && random2==2) {
            document.getElementById("winner").innerHTML = "Computer won with scissors!";
            computer++;
        }

        else if(chosen==2 && random2==0) {
            document.getElementById("winner").innerHTML = "Computer won with rock!";
            computer++;
        }

        else if(chosen==2 && random2==1) {
            document.getElementById("winner").innerHTML = "Player won with scissors!";
            player++;
        }

        else {
            document.getElementById("winner").innerHTML = "Is a tie!";
        }

        console.log(random2);

        if(computer>=10) {
            document.getElementById("winner").innerHTML = "Computer won the game!";
            document.getElementById("pic1").src = "Winner.gif";
            document.getElementById("p1").innerHTML = "<b> Computer: I won! </b>";
            document.getElementById("pic0").src = "Loser.jpg";
            document.getElementById("p0").innerHTML = "<b> Player: I am a loser =( </b>";	
            over = 1;
        }

        if(player>=10) {
            document.getElementById("winner").innerHTML = "Player won the game!";
            document.getElementById("pic0").src = "Winner.gif";
            document.getElementById("p0").innerHTML = "<b> Player: I won! </b>";
            document.getElementById("pic1").src = "Loser.jpg";
            document.getElementById("p1").innerHTML = "<b> Computer: I am a loser =( </b>";
            over = 1;
        }

        document.getElementById("Score").innerHTML = "<b> Best of 10 games </b> <br> Player: " + player + "<br>	Computer: " + computer + " <br></br> ";
    
    } 
    
    else {

    }

	
}