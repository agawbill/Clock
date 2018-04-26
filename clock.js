// var hour= new Date()
var clock=document.getElementsByClassName('clock')[0];
// var body=document.getElementsByClassName('body')[0]


// setInterval(function(){
// }, 1000)


// var information=



function digital(){
  var date= new Date()
  var a=date.getHours()
  var b=date.getMinutes()
  var c=date.getSeconds()
  if(b<10 && c<10){
    return clock.innerHTML=a+":0"+b+":0"+c
  }
  else if(b<10 && c>9){
    return clock.innerHTML=a+":0"+b+":"+c
  }
  else if(b>9 && c<10){
    return clock.innerHTML=a+":"+b+":0"+c
  }
  else{
  return clock.innerHTML=a+":"+b+":"+c
}
}
setInterval(digital, 1000)



function digital2(){
  var date= new Date()
  var a=date.getHours()
  var b=date.getMinutes()
  var c=date.getSeconds()
  if(b<10 && c<10){
    return document.body.style.backgroundColor="#"+a+"0"+b+"0"+c
  }
  else if(b<10 && c>9){
    return document.body.style.backgroundColor="#"+a+"0"+b+c
  }
  else if(b>9 && c<10){
    return document.body.style.backgroundColor="#"+a+b+"0"+c
  }
  else{
  return document.body.style.backgroundColor="#"+a+b+c
}
}
setInterval(digital2, 1000)
// clock.innerHTML=+setInterval(digital, 1000)
//
//
// function clock(){
//   var a=date.getHours()
//   var b=date.getMinutes()
//   var c=date.getSeconds()
//   if(c<10){
//     console.log(a,b,0+c)
//   }
//   else{
//   console.log(a,b,c)
// }
// }
//
// =setInterval(c, 1000)




// when you do a set interval it executes something every interval (as opposed to setTimeout which does it once)



// var minute = date.getMinutes()

// in every second have date get hours, date get minutes, date get getSeconds


// date.getHours()
// date.getSeconds()
//
//
// hh:mm:ss
// #hhmmss
