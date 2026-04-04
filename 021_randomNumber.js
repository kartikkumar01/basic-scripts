// generating a random number

// generate between two numbers 5-10

//only generates between 5-6
const rand1 = Math.round(Math.random() + 5) 
// 0.1 = 5.1 = 5
// 0.4 = 5.4 = 5
// 0.6 = 5.6 = 6
// 0.8 = 5.8 = 6


//generates between 0 - 10
const rand2 = Math.round(Math.random() * 10)
// 0.56 *10 = 5.6 = 6
// 0.23 * 10 = 2.3 = 2
//0.04 = 0.4 = 0
// 0.96 = 9.6 = 10

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
