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
 