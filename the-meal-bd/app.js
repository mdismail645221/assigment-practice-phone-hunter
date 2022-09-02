const notFound = document.getElementById('not-found');
const inputFeild = document.getElementById('input-field');
const btnMeal = document.getElementById('btn-meal')
const loadDataMealBd = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayMeadBd(data.meals))

}

const displayMeadBd = (data) =>{
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.textContent = '';
    notFound.classList.remove('d-none')
    data && data.forEach(products => {
        // console.log(products)
        const {strMeal, strMealThumb, strInstructions} = products;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${strMeal}</h5>
        <p class="card-text">${strInstructions.slice(0, 150)}</p>
        </div>
        </div>
        `;
        mealsContainer.appendChild(div)
        notFound.classList.add('d-none')
    })
    
}

// input field 


inputFeild.addEventListener('keypress', function(event){
    console.log(event.key)

    if(event.key === "Enter"){
        const inputField = document.getElementById('input-field');
        const inputString = inputField.value;
        loadDataMealBd(inputString)
    }
})




loadDataMealBd('a')

