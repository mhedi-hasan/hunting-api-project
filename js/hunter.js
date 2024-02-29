const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones);
}

const displayPhones = phones => {
  console.log(phones);

  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  // show all container
  const showAllContainer=document.getElementById('show-all-container');
  if(phones.length>12){
    showAllContainer.classList.remove('hidden');
  }else{
    showAllContainer.classList.add('hidden');
  }
  // 12ta. koyta phone dekhabo ta likha holo
  phones=phones.splice(0,12)
  phones.forEach(phone => {
    // console.log(phone);
    // step-2: create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card w-80 px-3 pb-2 pt-10 bg-base-100 shadow-xl`;
    //step-3: set innerHTML
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Phone" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <h5 class='text-xl'>Brand : ${phone.brand}</h5>
      
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    //step-5: append child
    phoneContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

// handle search
const handleSearch = () => {
  toggleLoadingSpinner(true)
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}
// ------ 2nd input field--------
const handleSearch2 = () =>{
  toggleLoadingSpinner(true)
  const searchField=document.getElementById('search-field2')
  const searchTexts2=searchField.value;
  loadPhone(searchTexts2);
}
const toggleLoadingSpinner=(isLoading)=>{
    const loadingSpinner=document.getElementById('loading-spinner');
    if(isLoading){
      loadingSpinner.classList.remove('hidden')
    }else{
      loadingSpinner.classList.add('hidden')
    }
}

// loadPhon();


{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}