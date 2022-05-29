
// const btn = document.querySelector('.btn');
// const output = document.querySelector('.output');
// const back = document.querySelector('.back');
// const sound = document.querySelector('.sound');
// const noti = document.querySelector('#noti');
// const noti1 = document.querySelector('#noti1');
// const noti2 = document.querySelector('#noti2');
// const al = document.querySelector('.al');




//     let count = '';
//   btn.onclick = () => {
//     count++;
   

//     if(count <= 10){
//         output.innerHTML = count;
//         al.innerHTML = '';
//     }else{
//         count = 10;
//         noti1.play();
//         al.innerHTML ='بسم الله الرحمن الرحيم منير رحيم থামুন।। আপনি আর সামনে যেতে পারবেননা।।'
//     }
   
// }
    



// back.onclick = () => {
//     count--;
    
  
//     if(count >= 0){
//         output.innerHTML = count;
//     }else{
//         count = 0;
//         noti2.play();
//         al.innerHTML ='থামুন।। আপনি আর নিচে নামতে পারবেননা।।';
//     }
   
// }



// sound.onclick = () => {
//     noti.play();

// }



// stop watch==========================>




// let  count = '0';
// let stop = '';
// btn.onclick = () => {
    
//    stop = setInterval (() =>{
//     count++;
//     output.innerHTML = count;
//    }, 1000)

  

// }


// back.onclick = () => {
//     clearInterval(stop);
//     count = 0;
//     output.innerHTML = count;
// }




// form============================>

const text = document.querySelector('input[type = "text"]');
const email = document.querySelector('input[type = "email"]');
const password = document.querySelector('input[type = "password"]');
const output = document.querySelector('#output');
const output2 = document.querySelector('#email');
const output3 = document.querySelector('#pass');
const button = document.querySelector('.button');
const button2 = document.querySelector('#btn');
const noti5 = document.querySelector('#noti5');
const img = document.querySelector('.img');
const img5 = document.querySelector('#img5');
const image = document.querySelector('.image');
const noti6 = document.querySelector('#noti6');
const sound = document.querySelector('#sound');

text.onclick = () => {

    output.innerHTML = 'Please Enter your name!!'




}


email.onclick = () => {
    output2.innerHTML = 'Please Enter your valid Eamil'

}

password.onclick = () => {
    output3.innerHTML = 'Use special caracter,capital letter,small letter and number!!'

}

button.onclick = () => {
    noti5.play();

    btn.innerHTML = 'Thanks for Contacting us...';
   

    if(output.value = ''|| output2.value == ''||  text.value == '' || password.value == ''  ){
        btn.innerHTML = 'All fields are required!!'
    }


    output.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    text.value = '';
    email.value = '';
    password.value = '';


    img5.src = ` young-woman-board-contact-us-portrait-34236681.jpg`

    
    
  

}

img.onclick = () => {
    noti6.play();
}

img.onmouseenter = () =>{
    sound.innerHTML = 'Click Me for sound..'

}
img.onmouseleave = () =>{
    sound.innerHTML = ''

}



//  Counter ====================>

const startcount = document.querySelector('.count');
const back = document.querySelector('.counts');
const reset = document.querySelector('.countss');
const countOutput = document.querySelector('.countOutput');
const countpro = document.querySelector('.countpro');
const p = document.querySelector('.p');
const ps = document.querySelector('.ps');
const noti2 = document.querySelector('#noti2');
const noti7 = document.querySelector('#noti7');
const start = document.querySelector('.start');
const  stop = document.querySelector('.stop');
const  remove = document.querySelector('.remove');

let load = 0;
startcount.onclick = () =>{
    load++;
    if( load <= 10){
        countOutput.innerHTML = load;

    }else{
        p.innerHTML = 'You can no longer move forward!!';
        noti5.play();

    }
    

}

back.onclick = () =>{
    load--;
    if( load >= 0){
        countOutput.innerHTML = load;

    }else{
        p.innerHTML = 'You can\'t go back anymore!!';
        noti5.play();

    }

}

reset.onclick = () =>{
    countOutput.innerHTML = 0;
    p.innerHTML = '';
}



// Stop Watch=============>

let watchcount = 0;
let slow = '';
start.onclick = () =>{
    
    slow =  setInterval(() => {
        if(watchcount <= 19){
            watchcount++;
            noti7.play();
            countpro.innerHTML = watchcount;
           

        }else if(watchcount == 20){
            countpro.style.color = 'green';

        }else{
            ps.innerHTML = 'Complete..'
        }
       
             
         },1000);
    

}



stop.onclick = () => {
   clearInterval(slow);
   countpro.innerHTML = watchcount;
    
  

}

remove.onclick = () => {
    clearInterval(slow);
   watchcount = 0;
   countpro.innerHTML = 0;
  

}


























