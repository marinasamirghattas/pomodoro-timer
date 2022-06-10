/*
1-workwatch->start timer for work+pause timer for break + disable resume
2-breakwatch->start timer for break + pause timer for work +enable resume
3-resumeWork->resume stopped timer for work(workWatch) + disable work timer
4-endWork->clear timer for work(0:0:0 =>for inner text of div)
*/



var wHours = 00,
    wMin = 00,
    wSec = 00,
    bHours = 00,
    bMin = 00,
    bSec = 00;
var bInterval, wInterval;


var workTimer = document.getElementById("work-time");
var breakTimer = document.getElementById("break-time");

workTimer.innerText = "work time" + " " + " " + wHours + " : " + wMin + " : " + wSec;
breakTimer.innerText = "break time" + " " + " " + bHours + " : " + bMin + " : " + bSec;

function workWatch(x) {
    if (x == "start") {
        document.getElementById("resume-work").removeAttribute("disabled");
        document.getElementById("start-work").setAttribute("disabled", "true");
        document.getElementById("start-break").removeAttribute("disabled");
    }


    clearInterval(wInterval);
    clearInterval(bInterval);


    wInterval = setInterval(function () {

        wSec++;
        workTimer.innerText = "work time" + " " + " " + wHours + " : " + wMin + " : " + wSec;
        if (wSec == 59) {
            wMin++;
            wSec = 00;
            workTimer.innerText = "work time" + " " + " " + wHours + " : " + wMin + " : " + wSec;
        }
        if (wMin == 59) {
            wHours++;
            wMin = 00;
            workTimer.innerText = "work time" + " " + " " + wHours + " : " + wMin + " : " + wSec;
        }
    }, 1000)

}


function breakWatch() {

    document.getElementById("start-break").removeAttribute("disabled");
    document.getElementById("start-work").setAttribute("disabled", "true");
    document.getElementById("resume-work").removeAttribute("disabled");

    clearInterval(wInterval);
    clearInterval(bInterval);
    bInterval = setInterval(function () {
        bSec++;
        breakTimer.innerText = "break time" + " " + " " + bHours + " : " + bMin + " : " + bSec;
        if (bSec == 59) {
            bMin++;
            bSec = 00;
            breakTimer.innerText = "break time" + " " + " " + bHours + " : " + bMin + " : " + bSec;
        }
        if (bMin == 59) {
            bHours++;
            bMin = 00;
            breakTimer.innerText = "break time" + " " + " " + bHours + " : " + bMin + " : " + bSec;
        }
    }, 1000)
}

function endWork() {

    document.getElementById("resume-work").setAttribute("disabled", "true");
    document.getElementById("start-work").removeAttribute("disabled");
    document.getElementById("start-break").setAttribute("disabled", "true");


    clearInterval(wInterval);
    clearInterval(bInterval);

    wHours = 00;
    wMin = 00;
    wSec = 00;
    bHours = 00;
    bMin = 00;
    bSec = 00;

    workTimer.innerText = "work time" + " " + " " + wHours + " : " + wMin + " : " + wSec;
    breakTimer.innerText = "break time" + " " + " " + bHours + " : " + bMin + " : " + bSec;
}