let formEl = document.getElementById("form");
let cookieEl = document.getElementById("TheCookie");
let BackgroundEl = document.getElementsByClassName("Background")
let ClickEl = document.getElementById("ClickOutput");
let CountdownEl = document.getElementById("CountdownOutput");
let formContainerEl = document.getElementById("FormContainer");

let clicks = 0;
let clickReg;
let timer;
let CountdownTime;

function setup(){
    clicks = 0;
    CountdownTime = 30;
    formEl.style.display = "none";
    formContainerEl.classList.add("hide");
    clickReg = cookieEl.addEventListener("click", Click);
}
function Click(){
    if (clicks == 0) {
        Countdown();
        timer = setTimeout(timeup, 30000);
    }
    console.log("Clicked")
    cookieEl.style.transform = "scale(1.025)"
    clicks += 1
    ClickEl.innerHTML = "Clicks: " + clicks;
    setTimeout(ClickAnimReset, 25);
}
function ClickAnimReset() {
    cookieEl.style.transform = "scale(1)"
}

function Countdown() {
    CountdownEl.innerHTML = "Countdown: 30"
 let IntervalThread = setInterval(function() {
        CountdownTime--
        if (CountdownTime < 1){
            clearInterval(IntervalThread)
        }
        CountdownEl.innerHTML = "Countdown: " + CountdownTime
        console.log(CountdownTime)
    }, 1000);
}

function timeup(){
    console.log("Timeup");
    formEl.style.display = "";
    formContainerEl.classList.remove("hide");
    cookieEl.removeEventListener("click", Click);
}
formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    sendData(formEl, 1, clicks);
    setup();
});

setup();