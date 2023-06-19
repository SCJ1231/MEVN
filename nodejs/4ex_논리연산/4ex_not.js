
// not은 ! 와 같은 의미이다.
const log = console.log
log(!true)
log(!true && true)
log(true || console.log('내가 누구게') && false) 

//-> || 와 && 같이 있으면 && 먼저 연산된다. 
//우선순위  ! > && >||
