const Hour = document.getElementById("hour");
const Min = document.getElementById("min");
const Sec = document.getElementById("sec");
const PmAm = document.getElementById("ampm");

function updateClock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm = "AM";
    
    if(h > 12){
        h = h-12;
        AmPm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    Hour.innerText = h;
    Min.innerText = m;
    Sec.innerText = s;
    PmAm.innerText = AmPm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();