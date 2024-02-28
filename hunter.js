const loadPhon = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phone);
  displayPhon(phones);
};

const displayPhon = (phones) => {
    const phoneContainer=document.getElementById('card-container');

  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card card-compact w-96 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Phone" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <h5 class='text-xl'>Brand : ${phone.brand}</h5>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    phoneContainer.appendChild(phoneCard)
  });
};

loadPhon();
