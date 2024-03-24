// for (let i = 2; i < 10; i ++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }


// for (let i = 2; i <= 10; i++) {
//   if (i % 2 != 0 ) {
//     console.log(i)
//   }
// }

// let num = 10

// nextPtime:
// for (let i = 2; i < 10; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j ==0) continue nextPtime
//   }
//   console.log(i)
// } 

// let text = "Ybrobrubr brabrrbrebr brtbrhbrebr"

// let textRes = text.split('br').join('')
// console.log(textRes)

let arr = [`(`, `)`, `(`, `)`]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != arr[i+1]) {
    console.log(`У позиции по индексом ${arr[i]} нет пары`)
  
  }
}