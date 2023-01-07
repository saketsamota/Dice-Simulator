function simulate(){
    let random = ((Math.floor(Math.random()*6))+1)
    if (random == 1){
        document.getElementById("change").src = "Images/Dice1.jpeg";
    }
    else if (random == 2){
        document.getElementById("change").src = "Images/Dice2.jpeg";
    }

    else if (random == 3){
        document.getElementById("change").src = "Images/Dice3.jpeg";
    }    
    else if (random == 4){
        document.getElementById("change").src = "Images/Dice4.jpeg";
    }    
    else if (random == 5){
        document.getElementById("change").src = "Images/Dice5.jpeg";
    
    }

    else {
        document.getElementById("change").src = "Images/Dice6.jpeg";
    }
}