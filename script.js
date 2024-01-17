// let gameSeq=[];
// let userSeq=[];
// let btns=["yellow","red","blue","green"]; 

// let started=false;
// let level=0;
// let h2=document.querySelector("h2");

// document.addEventListener("keypress",function()
// {
//     if(started==false)
//     {
//         alert("Game is Started");
//         started=true;

//         levelUp();
//     }
// });
// function btnflash(btn)
// {
//     btn.classList.add("flash");
//     setTimeout(function()
//     {
//         btn.classList.remove("flash");
//     },500);
// }
// function userflash(btn)
// {
//     btn.classList.add("userflash");
//     setTimeout(function()
//     {
//         btn.classList.remove("userflash");
//     },500);
// }

// function levelUp(){
//     userSeq=[];
//     level++;
//     h2.innerText=`Level ${level}`;
//     let randIdx = Math.floor(Math.random() * 4);

//     let randColor=btns[randIdx];
//     let randbtn=document.querySelector(`.${randColor}`);
    
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     btnflash(randbtn);
// }

// function checkAns(idx)
// {
//     console.log("current level ",level);
   
//         // let idx=level-1;
//         if(gameSeq[idx]===userSeq[idx])
//         {
//           if(userSeq.length==gameSeq.length)
//           {
//             setTimeout(levelUp,300);
//           }
//         }
//           else{
//             // setTimeout(redBackground,200);
//             h2.innerHTML=`Game over!!.Your score is<b> ${level}</b> <br>Press Any key to start`;

//             reset();
//           }
//         }
       
//     function btnPress()
// {
   
//     console.log(this);
//     let btn=this;
//     btnflash(btn);
//     userflash(btn);
//     userColor=btn.getAttribute("id");
//     console.log(userColor);
//     userSeq.push(userColor);
// checkAns(userSeq.length-1);
// }

// let allbtns=document.querySelectorAll(".btn");
// for(btn of allbtns)
// {
//     btn.addEventListener("click",btnPress);
// }

// function reset()
// {
//     started=false;
//     gameSeq=[];
//     userSeq=[];
//     level=0;
   
// }

//  function redBackground()
//  {
//     document.body.classList.add("redbg");
//  }

let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (!started) {
        alert("Game is Started");
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    updateScore();
    h2.innerText = `Level ${level}`;
   
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    btnflash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkAns(idx) {
    console.log("current level ", level);
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 700);
            updateScore();
            h3.innerText=`Your Score :${level}`;
        } else {
            setTimeout(redBackground, 200);
            h2.innerHTML = `Game over!!. Your score is <b>${level}</b><br>Press Any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(()=>
            {
                document.body.style.backgroundImage = 'url("game over.jpeg")';
               
            },400)
            updateScore();
            reset();
        }
    }
}

function btnPress() {
    // alert("hii");
    console.log(this);
    let btn = this;
    btnflash(btn);
    userflash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function redBackground() {
    document.body.classList.add("redbg");
}

function updateScore() {
    h3.innerText = `Your Score :${level}`;
}
