
// A

let x =10
let y ="a"
y==="b" || x >= 10   // FALSE

// B

let x2=3
let y2=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) // FALSE

// C

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)  // FALSE