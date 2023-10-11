let p = 1;
let paginationEl = document.getElementById("pagination");


//the both buttons
let pBtns = paginationEl.getElementsByTagName("button");

pBtns[0].addEventListener('click', goBack);
pBtns[1].addEventListener('click', goNext);

function goBack(){
   console.log("Back");
   if(p == 1){
    return;
   }
   p = p - 1;
   PageUpdate();

}

function goNext(){
    console.log("Next")
    p = p + 1;

    PageUpdate();
}


// uptating the current function
function PageUpdate(){

    let span=paginationEl.getElementsByTagName("span")[0];
    span.innerText = p;
}