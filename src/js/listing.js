const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });



//  btn
const contactBtn = document.querySelector('.contact-now');
const slideImage = document.querySelector('.slide-image');

slideImage.addEventListener('mouseover',()=>{
    contactBtn.Style.display = "flex";
})

//
const menuItem = document.querySelector('.menu-item');
menuItem.addEventListener('click',()=>{
    menuItem.style.backgroundColor = "#2b2d42";
})

//http://localhost:3000/items
const productsDOM = document.querySelector('.swiper-wrapper');

let allProductsdata =[];
const filters = {
  searchItems : "",
};

document.addEventListener('DOMContentLoaded',()=>{
  axios
  .get('http://localhost:3000/items')
  .then((res)=>{
    allProductsdata = res.data;
    //render products on DOM
    renderProducts(allProductsdata);

  })
  .catch(err =>console.log('error'));
})

function renderProducts (){
  allProductsdata.forEach((item,index) => {

    const productsDiv = document.createElement('div');
    productsDiv.classList.add('swiper-slide');
    productsDiv.innerHTML= `
    
    <div class="slide-image w-[31rem] h-[23.2rem] bg-${item.imageUrl} flex justify-center items-center rounded-lg">
      <button class="contact-now w-46 h-10 hidden justify-center items-center bg-white hover:bg-slate-400 rounded-lg p-6">
        <p>Contact Now</p>
        <i class="fa fa-eye"></i>
      </button>
    </div>
    <div class="slide-desc w-[31rem] h-[23.2rem] bg-slate-50 flex flex-col gap-8 pl-16">
      <a href="#"><h4 class="title font-bold text-2xl mt-6">${item.title} alt="p-${index}"</h4></a>
      <h6 class="text-gray-400 text-lg">by: Real Estate Agent</h6>
      <span class="flex gap-2 mt-2">
        <img class="bg-gray-600 rounded-full w-8 h-8" src="/assets/images/listing-icon-01.png" alt="">
        <p> $${item.price} to $950 / month included tax</p>
      </span>
      <span class="Details">
        <p class="text-gray-400">Details: <em>860 sq ft</em></p> 
      </span>
      <div class="flex flex-col gap-3 mt-4">
        <span class="info flex gap-4 ">
          <img src="/assets/images/listing-icon-02.png" alt=""> 3 Bathrooms
        </span>
        <span class="info flex gap-4 ">
          <img src="/assets/images/listing-icon-03.png" alt=""> 2 Bedrooms
        </span>
       
      </div>
     
      

    </div>
    

    
    `;
    //append to DOM
    productsDOM.appendChild(productsDiv);
    
  });
  
}



//filter based on groups:
const group = document.querySelectorAll(".menu-item");
group.forEach(btn => {
  btn.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter;
    console.log(filter);
    filters.searchItems = filter;
    renderProducts(allProductsdata,filters);

  });
});


