const num1 = Math.ceil(Math.random()*10);
//const num2 = Math.ceil(Math.random()*10);

const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");
const scoreE1  = document.getElementById("score");
const MsgE1 = document.getElementById("Msg");
const MsgE2 = document.getElementById("Info");



var score = JSON.parse(localStorage.getItem("score"));
var temp = JSON.parse(localStorage.getItem("temp"));
var curr = JSON.parse(localStorage.getItem("curr"));

if(!score){
    score  = 0;
    MsgE1.innerText="";
}
if(!temp){
    temp  = 0;
}
if(!curr){
    curr  = 0;
}

    if(curr>0 && temp==0){
        MsgE1.innerText = "Oops !! Wrong Answer !! lost -1";
        MsgE1.style.color = "red";
    }
    if(score<0){
        MsgE2.innerText = "LOL !! U R IN NEGATIVE";
        MsgE2.style.color = "tomato";
    }
    if(temp>0 && curr==0){
        MsgE1.innerText = "Woo! Hoo Earned +1";
    }
    

scoreE1.innerText = `score: ${score}`;

questionE1.innerText = `What is cube of ${num1} ?`;

const correctAns = num1 * num1 * num1;

formE1.addEventListener("submit",()=>{
    const userAns = +inputE1.value;
    if(userAns == "" || userAns == null){
        alert("Please Enter Any Value");
    }
    else if(isNaN(inputE1.value)){
        alert("Please Enter The Integer Data");
    }
    else{
        
    if(userAns === correctAns){
        score++;
        temp++;
        curr = 0;
        updateLocalStorage();
        }
        else{
          score--;
          curr++;
          temp = 0;
          updateLocalStorage();
    }
  }
})
console.log(typeof userAns);

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
    localStorage.setItem("temp",JSON.stringify(temp));
    localStorage.setItem("curr",JSON.stringify(curr));
}


function Reset(){
    localStorage.setItem("score",JSON.stringify(0));
    localStorage.setItem("temp",JSON.stringify(0));
    localStorage.setItem("curr",JSON.stringify(0));
    scoreE1.innerText = `score: ${score = 0}`;
    //localStorage.clear();
    MsgE1.innerText = "";
    MsgE2.innerText = "";
}