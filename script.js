const btnPlay = document.querySelector('.btnTwo'); 
let myAudio = document.querySelector('#myAudio'); 

btnPlay.addEventListener('click', btnDate); 
function btnDate(){ 
    const now = new Date(); 
    const dayInput = document.querySelector('#inputDate').value; 
    let date = new Date(dayInput); 
    let diff = date - now; 

    if (diff <= 0) { 
        document.querySelector('.days').textContent = 0; 
        document.querySelector('.hours').textContent = 0; 
        document.querySelector('.minuts').textContent = 0; 
        document.querySelector('.seconds').textContent = 0; 
//myAudio.pause(); 
myAudio.play()
        myAudio.currentTime = 0; 
    } 
    else { 
        const msInSecond = 1000; 
        const msInMinut = 60*1000; 
        const msInHour = 60*60*1000; 
        const msInDate = 24*60*60*1000; 

        const displayDate = Math.floor(diff/msInDate); 
        document.querySelector('.days').textContent = displayDate; 

        const displayHours = Math.floor((diff%msInDate)/msInHour); 
        document.querySelector('.hours').textContent = displayHours; 

        const displayMinuts = Math.floor((diff%msInHour)/msInMinut); 
        document.querySelector('.minuts').textContent = displayMinuts; 
        const displaySeconds = Math.floor((diff%msInMinut)/msInSecond); 
        document.querySelector('.seconds').textContent = displaySeconds; 

       // myAudio.play(); 
        setTimeout(btnDate, 1000); 
    } 
} 

const btnStop = document.querySelector('#btnThree'); 
btnStop.addEventListener('click', stopDate);
function stopDate() { 
    myAudio.pause(); 
    myAudio.currentTime = 0; 
    document.querySelector('#inputDate').value = "2022-01-01T00:00"; 
    document.querySelector('.days').textContent = 0; 
    document.querySelector('.hours').textContent = 0; 
    document.querySelector('.minuts').textContent = 0; 
    document.querySelector('.seconds').textContent = 0; 
} 
setInterval(()=>{ 
    const clock = document.querySelector(".clock"); 
    let date = new Date(); 
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    let day_night = "AM"; 
    if(hours > 12){ 
    day_night = "PM"; 
    hours = hours - 12; 
    } 
    if(seconds < 10){ 
    seconds = "0" + seconds; 
    } 
    if(minutes < 10){ 
    minutes = "0" + minutes; 
    } 
    if(hours < 10){ 
        hours = "0" + hours; 
        } 
        clock.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night; 
        }); 
    
    gsap.from('h1', { 
        x: -500, 
        opacity:0, 
        duration:1.5, 
        delay:.5 
    }) 
    gsap.from('#inputDate', { 
        x: 500, 
        opacity:0, 
        duration:1.5, 
        delay: .8 
    }) 
    gsap.from('.box', { 
        y: 200, 
        duration:2.5, 
        delay:1, 
        stagger:.4, 
        opacity:0 
    }) 
    gsap.from('.btnTwo, #btnThree', { 
        opacity:0, 
        delay:2, 
        duration:1.2, 
        rotation:360, 
        stagger:.7 
    }) 
    gsap.from('.clock', { 
        opacity:0, 
        duration:5, 
        delay:2.5 
    })