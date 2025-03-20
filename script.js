// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis)
// {
//     li.addEventListener("click", function (){
//         console.log("li was clicked");
//     });
// }



// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;
 
//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");

//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     console.log(inp.value);
//     inp.value = "";

// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("delete");
//     }
     
// });





// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//       delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//       });
// }







//simon says Game

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"]; // Fixed typo

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp(); // Moved inside to avoid starting levelUp too soon
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    // Random button choose
    let randIdx = Math.floor(Math.random() * 3); // Corrected array indexing
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(){
    console.log("curr level :", level);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn); // Assuming you meant userFlash here

    userColor = btn.getAttribute("id");
   userSeq.push(userColor);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { // Used 'let' for scope correction
    btn.addEventListener("click", btnPress);
}
