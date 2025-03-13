// fetchd datas from api

function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data)=> displayCategories(data.categories));
}


loadCategories();

// displayed data

function displayCategories(categories){
    // console.log(categories);

    const categoryContainer = document.getElementById("category-container");

    // loop operation on an array of object
    for(let name of categories){

        // create an element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML =`
        <button class="btn btn-soft btn-sm font-semibold text-lg px-5 py-5 hover:bg-[#FF1F3D] hover:text-white">${name.category}</button>`;

        // appned the elemnet
        categoryContainer.append(categoryDiv);
    }
}