   
function moveRed()
{   
    var redSquare = document.getElementById("redSq");   
     var redPos = 0;
     //gets the value from the drop down menu
     var speedR = document.getElementById("redSpeed").value;
     //check to make sure that worked
     console.log(speedR);
     //set the frequency of stepRed using the speed var
     var stepRedId = setInterval(stepRed, speedR);

function stepRed() {
    if (redPos == 350) {
        clearInterval(stepRedId);
    } else {
        //update the position of the red square
        redPos++; 
        redSquare.style.top = redPos + 'px'; 
        redSquare.style.left = redPos + 'px';
    }
 }
}

function moveBlue()
{   
    var blueSquare = document.getElementById("blueSq");   
     var bluePos = 350;
     //gets the value from the drop down menu
     var speedB = document.getElementById("blueSpeed").value;
     //check to make sure that worked
     console.log(speedB);
     //set the frequency of stepBlue using the speed var
     var stepRedId = setInterval(stepBlue, speedB);

function stepBlue() {
    if (bluePos == 0) {
        clearInterval(stepBlueId);
    } else {
        //update the position of the blue square from the bottom right corner
        bluePos--; 
        blueSquare.style.top = bluePos + 'px'; 
        blueSquare.style.left = bluePos + 'px';
    }
 }
}
