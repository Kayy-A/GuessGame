var UserNumber = 2
var counter = 0; 
var MaxTries = 1;
var RandomNumber = Math.floor(Math.random() * UserNumber) +1;
while (Attempts !=RandomNumber) {
    var Attempts = prompt("Please pick a number between 1 and " + UserNumber);
  counter += 1;
  if (counter > MaxTries) (
    document.write("Game Over")
  )
 if (Attempts == RandomNumber) (
   document.write("Congratulations. Move to Stage 2!")
 )
}