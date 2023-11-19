const row = document.querySelector(".row")
const searchLabel = document.querySelector("#searchLabel")
const all = document.querySelector("#all")
const allBox = document.querySelector(".inner-container")
const searchInput = document.querySelector("#searchInput")
const searchButton = document.querySelector("#searchButton")
const imgMenu= document.querySelector("#imgMenu")
const textMenu = document.querySelector("#textMenu")
const categorMenu = document.querySelector("#categorMenu")
const receptMenu = document.querySelector("#receptMenu")
const menuBtn = document.querySelector("#menuBtn")
const searchBtn = document.querySelector("#searchBtn")



const myFunction=()=>{
    fetch('https://www.themealdb.com/api/json/v2/1/randomselection.php')
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(meal => {
                row.innerHTML += `
<div class="col-3">
<div class="card">
<img src="${meal.strMealThumb}" alt="" class="card-img">
<div class="card-body">
<h5 class="title">${meal.strMeal}</h5>
<p class="text">${meal.strCategory}</p>
</div>
</div>
</div>

`
                console.log(data)
            })
        })
}
myFunction()

searchButton.addEventListener('click',()=>{
    const value = searchInput.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res=>res.json())
        .then(json=>{
            const menu = json.meals[0]
            console.log(json.meals)
            imgMenu.src=menu.strMealThumb
            textMenu.innerHTML=menu.strMeal
            categorMenu.innerHTML=menu.strCategory
            receptMenu.innerHTML=menu.strInstructions
            innerCol.innerHTML=`
<div>
     <img src="https://www.themealdb.com/images/ingredients/${menu.strIngredient1}.png"/>
     <p>${menu.strIngredient1}</p>
</div>
<div>
   <img src="https://www.themealdb.com/images/ingredients/${menu.strIngredient2}.png"/>
   <p>${menu.strIngredient2}</p>
</div>

`
            boxCol.innerHTML=`
   <div>
     <img src="https://www.themealdb.com/images/ingredients/${menu.strIngredient3}.png"/>
     <p>${menu.strIngredient3}</p>
</div>
<div>
  <img src="https://www.themealdb.com/images/ingredients/${menu.strIngredient4}.png"/>
  <p>${menu.strIngredient4}</p>
</div>
            `

        })
})

all.addEventListener('click',()=>{
    if(all.checked){
        row.classList.remove('hidden')
        searchLabel.classList.remove('hidden')
        allBox.classList.add('hidden')
    }
})

searchLabel.addEventListener('click', ()=>{
    if(searchLabel.checked){
        row.classList.add('hidden')
        allBox.classList.remove('hidden')
    }
})

menuBtn.addEventListener('click',()=>{
    if(menuBtn.click){
        row.classList.remove('hidden')
        searchLabel.classList.remove('hidden')
        allBox.classList.add('hidden')
    }
})

searchBtn.addEventListener('click',()=>{
    if(searchBtn.click){
        row.classList.add('hidden')
        allBox.classList.remove('hidden')
    }
})