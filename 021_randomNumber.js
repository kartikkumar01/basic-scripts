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

const rand4 = (min, max) => {
  return Math.round(Math.random() * (max-min)) + min
}

//15-20 = diff(5)
//0.01 * 5 = 0.05 = 0 = 0 +15 = 15
//0.25 * 5 = 1.25 = 1 = 1+ 15 = 16
//0.56 * 5 = 2.8 = 3 = 3+15 = 18
//0.98 * 5 = 4.9 = 5 = 5 + 15 = 20

for(let i = 0; i< 10 ; i++){
  console.log(rand4(15,20))
}
