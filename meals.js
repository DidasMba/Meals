let p = 1;
let paginationEl = document.getElementById("pagination");


//the both buttons
let pBtns = paginationEl.getElementsByTagName("button");

pBtns[0].addEventListener('click', goBack);
pBtns[1].addEventListener('click', goNext);

function goBack(){
   console.log("Back");
   if(p == 1){
    return; // we can use return to exit a function
   }
   p = p - 1;
   PageUpdate();

}

function goNext(){
    console.log("Next")
    p = p + 1;

    PageUpdate();
    getFood();
}


// uptating the current function
function PageUpdate(){

    let span=paginationEl.getElementsByTagName("span")[0];
    span.innerText = p;
}


function displayFood(data){

    let divEl=document.getElementById("all-food");

    let foods = "";

    for (let i=0; i<data.length;i++){
        let food = data[i];
        foods = 
        foods + 
        `div class="a-food">

        <div>
            <img src="${food.image_url}"/>

            <div>Name : <span>${food.name}</span></div>
            <button>More</button>
        </div>
    </div>`;

    }
    divEl.innerHTML=foods;
}

function getFood(){

    fetch(
        `www.themealdb.com/api/json/v1/1/categories.php`,
        {
            method:"GET",
            contentType:"application/json",
        })
        .then((response) => response.json()) 
        .then(function(data) {
            console.log(data);
            displayFood(data.data); // Correction 2 : Utilisez data.categories pour accéder aux catégories
        })

        
}