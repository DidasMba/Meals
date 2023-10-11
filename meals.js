let p = 1;
let paginationEl = document.getElementById("pagination");


//the both buttons
let pBtns = paginationEl.getElementsByTagName("button");

pBtns[0].addEventListener('click', goBack);
pBtns[1].addEventListener('click', goNext);

function goBack(){
   console.log("Back");
}

function goNext(){
    console.log("Next")
}