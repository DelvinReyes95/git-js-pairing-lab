//Code your solutions in this file
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++){
        console.log(i)
    }
}
console.log("Q---1")
 fiveToOneHundred()
 
 
 function multiplesOfThree() {
     for (let i = 1; i <= 100; i++) {
         if (i % 3 === 0) {
             console.log(i)
         }
     }
 }
 console.log("Q---2");
 multiplesOfThree()
 
 function multiplesOfThreeOrFive(){
     for (let i = 1; i <= 100; i++){
         if (i % 3 === 0 || i % 5 === 0){
             console.log(i)
     }
 }
 }
 console.log("Q---3")
 multiplesOfThreeOrFive()
 
 function untilNum(num) {
     for (let i = 1; i <= num; i++) {
         console.log(i);
     }
 }
 console.log("Q---4")
 untilNum(3)
 
 function multiply(a, b){
     let results = a * b;
     console.log(results);
     
 }
 console.log("Q---5")
 multiply(5, 5)
 
 function add(a,b) {
     let results = a+b
     if (a === b) {
         return results * 3
     } else {
         return results
     }
 }
 console.log("Q---6")
 console.log(add(7,7))
 
 function isNegative(num){
     if (num <= 0){
         return true 
     } else {
         return false
     }
 }
 console.log("Q---7")
 console.log(isNegative(-4))
 
 function triangleArea(a,b) {
     let results = a * b / 2
     return results
 }
 console.log("Q---8");
 console.log(triangleArea(5,7))
 
 function betweenTwentyAndFourty(num){
     if (num < 20){
         return false
     } else if (num > 100){
         return false
     } else {
         return true
     }
 }
 console.log("Q---9")
 console.log(betweenTwentyAndFourty(50))
 
 function largest(a,b,c) {
     let max = Math.max(a,b,c);
     return max
 }
 console.log("Q---10")
 console.log(largest(30,22,17))