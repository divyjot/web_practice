var arr=['rock','paper','scissors'];

  var choice1
  var choice2
  function input()
{
  choice1=arr [Math.floor(Math.random()*arr.length)];
  console.log('computer '+choice1); 
  choice2=prompt("Choose")
  console.log(choice2)
  match(choice2,choice2
}

function match(choice1,choice2)
{
  while(choice1==choice2)
    {
      alert("It's a TIE")
      input(choice1,choice2)
    }
  compare(choice1,choice2)
}
function compare(choice1,choice2)
{
  if(choice1=='rock' && choice2=='scissors')
    console.log('YOU LOST')
  else if(choice1=='paper' && choice2=='rock')
    console.log('YOU LOST')
  else if(choice1=='scissors' && choice2=='paper')
    console.log('YOU LOST')
  else
    console.log('YOU WIN')
}
input(choice1,choice2)
