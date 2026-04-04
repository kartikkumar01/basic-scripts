// generating a random number

// generate between two numbers 5-20

//only generates between 5-6
//can be used where only one number needed out of two consecutive numbers
const rand1 = Math.round(Math.random() + 5) 
// 0.1 + 5  = 5.1 = 5
// 0.4 + 5  = 5.4 = 5
// 0.6 + 5 = 5.6 = 6
// 0.8 + 5 = 5.8 = 6


//generates between 0 - 10
//can be used where one number needed from 0 to max
const rand2 = Math.round(Math.random() * 20)
//0.04 * 20 = 0.8 = 1
// 0.23 * 20 = 4.6 = 5
// 0.56 * 20 = 11.2 = 11
// 0.99 * 20 = 19.8 = 20

//can be used to generate one number between range
const rand3 = (min, max) => {
  const rand = Math.round(Math.random() * max)
  if(rand < min){
    return rand + min 
  }
  return rand
}

for(let i = 0; i < 10; i++ ){
  console.log(rand3(5,50))
}
