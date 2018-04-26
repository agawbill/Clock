var clock2=document.getElementsByClassName('clock2')[0];
var text=document.getElementsByClassName('text')[0];


function digital3(){
  var date= new Date()
  var a=date.getHours()
  var b=date.getMinutes()
  var c=date.getSeconds()
  if(b<10 && c<10){
    return clock2.innerHTML=a+":0"+b+":0"+c
  }
  else if(b<10 && c>9){
    return clock2.innerHTML=a+":0"+b+":"+c
  }
  else if(b>9 && c<10){
    return clock2.innerHTML=a+":"+b+":0"+c
  }
  else{
  return clock2.innerHTML=a+":"+b+":"+c
}
}
setInterval(digital3, 1000)


function digital4(){
  var date= new Date()
  var a=date.getHours()
  var b=date.getMinutes()
  var c=date.getSeconds()
  if(a>5 && a<12){
    clock2.style.backgroundImage="url(morning.jpeg)"
    clock2.style.color="white"
    clock2.innerHTML=digital3()+"<br>Good morning!"
  }
  else if(a>12 && a<18){
    clock2.style.backgroundImage="url(afternoon.jpeg)"
    clock2.style.color="white"
    clock2.innerHTML=digital3()+"<br>Good afternoon!"
  }
  else if(a>18 && a<5){
    clock2.style.backgroundImage="url(night.jpeg"
    clock2.style.color="white"
    clock2.innerHTML=digital3()+"<br>Good night!"
  }
}
setInterval(digital4, 1000)
