// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }


// anonymous function
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });


// document.querySelector(".w").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }


// document.querySelector(".a").addEventListener("click",function(){
//     alert("I got clicked");
// });
// document.querySelector(".s").addEventListener("click",function(){
//     alert("I got clicked");
// });
// document.querySelector(".d").addEventListener("click",function(){
//     alert("I got clicked");
// });
// document.querySelector(".j").addEventListener("click",function(){
//     alert("I got clicked");
// });
// document.querySelector(".k").addEventListener("click",function(){
//     alert("I got clicked");
// });
// document.querySelector(".l").addEventListener("click",function(){
//     alert("I got clicked");
// });

// for(let i=0;i<document.querySelectorAll(".drum").length;i++){

// document.querySelectorAll("button")[i].addEventListener("click", function(){ 
//     alert("I got clicked");
// });

// }



// let i = 0;
// while (i < document.querySelectorAll(".drum").length) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
//   i++; // Don't forget to increment i
// }

for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      // this.style.color="green";

      let buttonInnerHTML = this.innerText;
      buttonAnimation(buttonInnerHTML);

      switch(buttonInnerHTML){
        case "w":
          let tom1= new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          let tom2= new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          let tom3= new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          let tom4= new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          let snare= new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "k":
          let crash= new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "l":
          let kick= new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
        
        default : console.log(buttonInnerHTML); 
        
      }

          });
}

// let audio= new Audio("sounds/tom-1.mp3");
//       audio.play();


document.addEventListener("keypress", function(event){
  soundPlay(event.key);
  buttonAnimation(event.key);
});
 
function soundPlay(key){

  switch(key){
    case "w":
      let tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare= new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash= new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    
    default : console.log(buttonInnerHTML); 
    
  }
}



// document.addEventListener("keypress", makesound);

//   function makesound(event){
//     // let key=event.key;
//     // console.log(event);
//     soundPlay(event.key); 
//    }
// function soundPlay(key){

//   switch(key){
//     case "w":
//       let tom1= new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       let tom2= new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       let tom3= new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       let tom4= new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       let snare= new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       let crash= new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       let kick= new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
    
//     default : console.log(buttonInnerHTML); 
    
//   }
// }


function buttonAnimation(currentkey){

  let activebutton=document.querySelector("."+currentkey);  
  activebutton.classList.add("pressed");

  setTimeout(function(){
    activebutton.classList.remove("pressed");
}, 100);

  // setTimeout(time, 100); 
  // function time(){
  //   activebutton.classList.remove("pressed");
  // }

  
}

