const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    // display 20 phones only
    phones = phones.slice(0,20);

    //display no phones found

    const noPhone = document.getElementById('no-found-message');
     if(phones.length === 0){
        noPhone.classList.remove('d-none');  
    }
    else{
        noPhone.classList.add('d-none');
    }
    //display all phones
    phones.forEach(phone=>{
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">this is a longer card with supporting to below</p>
            </div>
        </div>
    `;
    
        phonesContainer.appendChild(phoneDiv);
    })

}

document.getElementById('btn-search').addEventListener('click', function(){
    const  searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})

//loadPhones();