
const searchInput = document.getElementById('search-input');
const showAll = document.getElementById('show-all');
const btnShowAll = document.getElementById('btn-show-all')
const searchBtn = document.getElementById('search-btn');



const loadPhoneHunter = async(search,limit ) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    dispalyphoneHunter(data.data,limit) 
}



const dispalyphoneHunter = (phones, limit) =>{
    console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';



    if(limit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    }else{
        showAll.classList.add('d-none')
    }


    // notFound message
    const notFoundMsg = document.getElementById('not-found');
    if(phones.length === 0){
        notFoundMsg.classList.remove('d-none')
    }else{

        notFoundMsg.classList.add('d-none')
    }

    phones && phones.forEach(phone => {
        console.log(phone)
        const {brand, image, phone_name, slug} = phone;

        const divElement = document.createElement('div');
        divElement.classList.add('col');
        divElement.innerHTML = `
        <div class="card p-4">
            <img src="${image? image: "N/F"}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone_name? phone_name : "N/F"}</h5>
                <p class="card-text">${brand?brand : "N/F"}</p>
            </div>
        </div>
        `;
        phoneContainer.appendChild(divElement);
        
    })
    // loaderSpinner stop
     toggleSpinner(false)
}


// process
const process = (limit) =>{
    // loaderSpinner Start
    toggleSpinner(true)
    const searchInputString = searchInput.value;
    loadPhoneHunter(searchInputString, limit)
}




searchBtn.addEventListener('click', function(){
    process(10)
    
})


//enter key press input field 
searchInput.addEventListener('keypress', function(e){
    // console.log(e.key)
    if(e.key === 'Enter'){
        process(10)
    }
})

// load spinner
const toggleSpinner = isLoading =>{
    const loadSpinner = document.getElementById('load-spinner')
    console.log(loadSpinner)
    if(isLoading){
        loadSpinner.classList.remove('d-none')
    }else{
        loadSpinner.classList.add('d-none')
    }
}

// click btn show all

btnShowAll.addEventListener('click', function(){
    process()

})






loadPhoneHunter('iphone')
