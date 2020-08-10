var Players = {
	player1:"X",
	player2:"O"
}
var count=0;

var tictactoe=[
 ["","",""],
 ["","",""],
 ["","",""]
]

var currentPlayer=Players.player1;

function clicked(element,row,col)
{
  tictactoe[row][col]=currentPlayer;
  element.innerHTML=currentPlayer;
  console.log(count);
    if(updateWinner())
 	    {
 		    document.getElementById("winner").innerHTML=currentPlayer+" wins";
 	  }
 	  else if(count===8)
     {
      document.getElementById("winner").innerHTML="It's a draw";
     } 
  currentPlayer=currentPlayer===Players.player1?Players.player2:Players.player1;
  count++;
   
}

function resetGame(){
	
	for(var i=0;i<=8;i++)
	{
    document.querySelectorAll("td")[i].innerHTML="";
  }
  document.getElementById("winner").innerHTML="";
  tictactoe=[
               ["","",""],
               ["","",""],
               ["","",""]
                         ];
  currentPlayer=Players.player1;
  count=0;


}


function updateWinner()
{
  if((tictactoe[0][0]===currentPlayer && tictactoe[0][1]===currentPlayer  && tictactoe[0][2]===currentPlayer )||
     (tictactoe[1][0]===currentPlayer && tictactoe[1][1]===currentPlayer  && tictactoe[1][2]===currentPlayer )||
     (tictactoe[2][0]===currentPlayer && tictactoe[2][1]===currentPlayer  && tictactoe[2][2]===currentPlayer )||
     (tictactoe[0][0]===currentPlayer && tictactoe[1][0]===currentPlayer  && tictactoe[2][0]===currentPlayer )||
     (tictactoe[0][1]===currentPlayer && tictactoe[1][1]===currentPlayer  && tictactoe[2][1]===currentPlayer )||
     (tictactoe[0][2]===currentPlayer && tictactoe[1][2]===currentPlayer  && tictactoe[2][2]===currentPlayer )||
     (tictactoe[0][0]===currentPlayer && tictactoe[1][1]===currentPlayer  && tictactoe[2][2]===currentPlayer )||
     (tictactoe[0][2]===currentPlayer && tictactoe[1][1]===currentPlayer  && tictactoe[2][0]===currentPlayer ))
  	{
 			return true;
  	}
  	else return false;
  
}