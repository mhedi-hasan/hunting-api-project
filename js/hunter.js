const loadPhone = async (searchText='13',isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones,isShowAll);
}

const displayPhones = (phones,isShowAll) => {
  // console.log(phones);

  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  // show all container
  const showAllContainer=document.getElementById('show-all-container');
  if(phones.length>12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
  }else{
    showAllContainer.classList.add('hidden');
  }
  // console.log("is show all is:",isShowAll);
  // 12ta. koyta phone dekhabo ta likha holo
  if(!isShowAll){
    phones=phones.splice(0,12);
  }
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
      
      <div class="card-actions justify-center">
        <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `;
    //step-5: append child
    phoneContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};
//handleShowDetail
const handleShowDetail = async (id) =>{
  // console.log('Id is clicked',id);
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data= await res.json();
  const phone=data.data;
  // console.log(data);
showPhoneDetails(phone);
}
const showPhoneDetails = (phone) =>{
  console.log(phone);
  const phoneName=document.getElementById('show-detail-phone-name');
  phoneName.innerText=phone.name;
  const showDetailContainer=document.getElementById('show-details-container');
  showDetailContainer.innerHTML=`
  <img class='py-2' src="${phone.image}" alt="Phone Image">
  <p class='text-[20px] font-semibold'><span class='text-xl font-bold'>Brand:</span> ${phone.brand}</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Storage:</span> ${phone.mainFeatures.storage}</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Memory:</span> ${phone.mainFeatures.memory}</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Display Size:</span> ${phone.mainFeatures.displaySize
  }</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Slug:</span> ${phone.slug}</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Sensors:</span> ${phone.mainFeatures.sensors}</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Release Date:</span> ${phone.releaseDate}</p>
  <p class='text-[16px] font-semibold'><span class='text-xl font-bold'>Chip Set:</span> ${phone.mainFeatures.chipSet}</p>
  `;

  show_details_modal.showModal()
}

// handle search
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText,isShowAll);
}
// ------ 2nd input field--------
// const handleSearch2 = () =>{
//   toggleLoadingSpinner(true)
//   const searchField=document.getElementById('search-field2')
//   const searchTexts2=searchField.value;
//   loadPhone(searchTexts2);
// }
const toggleLoadingSpinner=(isLoading)=>{
    const loadingSpinner=document.getElementById('loading-spinner');
    if(isLoading){
      loadingSpinner.classList.remove('hidden')
    }else{
      loadingSpinner.classList.add('hidden')
    }
}

const handleShowAll = (isShowAll) =>{
handleSearch(true);
}

loadPhone();


{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}