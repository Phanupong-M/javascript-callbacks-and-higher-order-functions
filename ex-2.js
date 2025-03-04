//Exercise #2: At Least Five Function

function atLeastFive(array ,room, operation) {
  return operation(array,room)
}

const checkScore = (score,room) => {
   let count = 0
   for (let num of score){
      if (num>70){count++}
   }

   if (count >= 5){
    return `นักเรียนห้องที่ ${room} ผ่านเกณฑ์ ✅`
   }else{
    return `นักเรียนห้องที่ ${room} ไม่ผ่านเกณฑ์ ❌`
   }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,1,checkScore)
let scoreRoom2Result = atLeastFive(studentScoresRoom2,2,checkScore)
let scoreRoom3Result = atLeastFive(studentScoresRoom3,3,checkScore)

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)