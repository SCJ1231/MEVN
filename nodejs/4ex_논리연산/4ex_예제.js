const log = console.log

// 1. 문제
log(null || 13 || undefined) // 13

// 2. 문제 
log(log(7) || 13 || log(0)) // 7 , 13

// 3. 문제
log(-1 && null && true) // null

// 4.문제 
log(null || 13 && 6 || 2) // 6

// 5. 문제
log(null || 13 && log(false) || 2) // false , 2 