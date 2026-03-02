var A = 10
var B = 20
var linebreak = "<br/>"
/* const div = "<div>add<div/>" */

// document.write("<h1>Arithmetic Operator</h1>")
// let result
// document.write(linebreak)
// document.write("A + B =")
// result = A + B 
// document.write(result + "litre")

// document.write(linebreak)
// document.write("B - A =")
// result = B - A
// document.write(result + "litre")
// result = B/A
// document.write(linebreak)
// document.write("B / A = ")
// document.write(result + "litre")
// result = B*A
// document.write(linebreak)
// document.write("B * A = ")
// document.write(result + "litre")


// //const input = document.write("<input value='3' type='text'>")
// const input = document.getElementById('inp')

// document.write(linebreak)
// //let Number = input
// let Number 
// Number = 4


//     if (Number % 2 == 0) {
//         document.write(Number + 'is Even')
//     }

//     else {
//          document.write(Number + 'is odd')
//     }

// document.write(linebreak)

// //Modulus

// /* const userNumber = prompt("Enter a message");
// document.write("you entered " + userNumber);
// const isEven = userNumber % 2
// document.write(isEven==0) */


// //Comparison operator
// document.write("<h1>Comparison Operator</h1>")
// document.write(A == B)
// document.write(linebreak)
// document.write(A != B)
// document.write(linebreak)
// document.write(A > B)
// document.write(linebreak)
// document.write(A < B)
// document.write(linebreak)
// document.write(A >= B)
// document.write(linebreak)
// document.write(A <= B)

// document.write(linebreak)
// document.write('this is ' + (A > B && A == B))


// document.write(linebreak)
// /* let score = prompt("Enter your score")
// let name = prompt("Enter your name")

// if (score > 60 && name.length > 0) {
//     document.write(name + " you pass")
// } else {
//     document.write(name + " you fail")
// }
//  */  


// B += A
// // B -= A
// // B *= A
// // B %= A
// document.writeln(B)
// document.write(linebreak)

// //const remark = (B >= 60) ? "pass" : "fail"
// const remark = (B >= 60) ? "pass" : (B >= 20) ? "bad performance" : "fail"
// document.write(remark)

// const time = Date.now()
// const hour = new Date().getHours()
// document.write(linebreak)
// document.write(time)
// document.write(linebreak)
// document.write(hour)

// //Greeting system

// const greeting = (hour < 12) ? "Good morning" : (hour >= 12 && hour < 16) ? "Good afternoon" : "Good evening"
// document.write(linebreak)
// document.write(greeting)


// //Grading system
// // 0-40 -> F, 41-48 -> D, 49-60 -> C, 61-75 -> B, 76-100 -> A
// let score = 67
// let grade = (score >= 76) ? "A" : (score >= 61) ? "B" : (score >= 49) ? "C" : (score >= 41) ? "D" : "F"
// document.writeln(linebreak)
// document.writeln("Your grade is: " + grade)
// document.write(linebreak)

// Math.floor(Math.random() * 10) + 1

//  const day = Math.floor(Math.random() * 8) + 1
//  switch (day) {
//  case 1:
//      document.write("Monday")
//      break;
//  case 2:
//      document.write("Tuesday")
//      break;
//  case 3:
//      document.write("Wednesday")
//      break;
//  case 4:
//      document.write("Thursday")
//      break;
//  case 5:
//      document.write("Friday")
//      break;
//  case 6:
//      document.write("Saturday")
//      break;
//  case 7:
//      document.write("Sunday")
//      break;
//  default:
//      document.write("Invalid day")
//  }

console.log("yokuso, watashi no Soul society")

// const candidateScore = document.getElementById("score")
// const button = document.getElementById("btn")



// button.addEventListener("click", () => {
//     console.log('this is the score: ', candidateScore.value)
// })

//simple interest 
const principalInput = document.getElementById("principal")
const rateInput = document.getElementById("rate")
const timeInput = document.getElementById("time")
const calculateBtn = document.getElementById("calculateBtn")
const display = document.getElementById("result")




/* function calculateSimpleInterest() {
     let result = principal * time * rate
} */
const principal = principalInput.value 
const rate = timeInput.value

 

calculateBtn.addEventListener('click', () => {
    let p =  Number(principalInput.value)
    let r = Number(rateInput.value/100)
    let t = Number(timeInput.value)
    let interest = p * r * t

    let totalAmount = interest + p
    console.log(`results = ${totalAmount}`)

    display.textContent = `After two years with a principal of ${p} and Rate of ${r} your Total Amount will be  ${totalAmount}`
})

