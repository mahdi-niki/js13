/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:


const num1=Math.floor(Math.random()*14+1)
const num2=Math.floor(Math.random()*14+1)
console.log(num1,num2)
function idk(){
  let arr=[num1,num2]
  for(let i=0;i<9;i++){
    arr.push((arr[i]+arr[i+1])*2)

  }
  return arr.join()
}
idk()
console.log(idk())