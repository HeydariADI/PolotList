



//  btn
// const contactBtn = document.querySelector('.contact-now');
// const slideImage = document.querySelector('.slide-image');

// slideImage.addEventListener('mouseover',()=>{
//     contactBtn.Style.display = "flex";
// })


// const menuItem = document.querySelector('.menu-item');
// menuItem.addEventListener('click',()=>{
//     menuItem.style.backgroundColor = "#2b2d42";
// })




const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 400,
  spaceBetween: 30,
  centeredSlides:true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },

  
});
  
  const items = [
    {
        "id": 1,
        "title":"Third Page Apartment",
        "class": "Apartment",
        "price": 600,
        "imageUrl":"./assets/images/listing-01.jpg"
    },
    {
        "id": 2,
        "title":"Sunshine Paradise Apartment",
        "class": "Apartment",
        "price": 600,
        "imageUrl":"./assets/images/listing-02.jpg"
    },
    {
        "id": 3,
        "title":"Sunshine Villa Condo",
        "class": "Apartment",
        "price": 600,
        "imageUrl":"./assets/images/listing-03.jpg"
    },
    {
        "id": 4,
        "title":"FOOD first Page",
        "class": " Food & Life ",
        "price": 600,
        "imageUrl":"./assets/images/listing-04.jpg"
    },
    {
        "id": 5,
        "title":"FOOD Second Page",
        "class": " Food & Life ",
        "price": 600,
        "imageUrl":"./assets/images/listing-05.jpg"
    },
    {
        "id": 6,
        "title":"Third Category Second Page",
        "class": " cars ",
        "price": 600,
        "imageUrl":"./assets/images/listing-06.jpg"
    },
    {
        "id": 7,
        "title":"Third Category Second Page",
        "class": " cars ",
        "price": 600,
        "imageUrl":"./assets/images/listing-06.jpg"
    }
  
    
  
  ]
  
  // const productsDOM = document.querySelector('.swiper-wrapper');
  
  // const showProducts = items.map((i) => {
   
  //   return `
  //   <div class="swiper-wrapper slides flex flex-col gap-10">
  //   <div class="swiper-slide w-[62rem] h-96 flex ">
  //  <div class="slide-image w-[31rem] h-[23.2rem] bg-[url('/assets/images/listing-01.jpg')] flex justify-center items-center rounded-lg">
  //    <button class="contact-now w-46 h-10 hidden justify-center items-center bg-white hover:bg-slate-400 rounded-lg p-6">
  //      <p>Contact Now</p>
  //      <i class="fa fa-eye"></i>
  //    </button>
  //  </div>
  //  <div class="slide-desc w-[31rem] h-[23.2rem] bg-slate-50 flex flex-col gap-8 pl-16">
  //    <a href="#"><h4 class="font-bold text-2xl mt-6">${i.title}</h4></a>
  //    <h6 class="text-gray-400 text-lg">by: Real Estate Agent</h6>
  //    <span class="flex gap-2 mt-2">
  //      <img class="bg-gray-600 rounded-full w-8 h-8" src="/assets/images/listing-icon-01.png" alt="">
  //      <p> $600 to $950 / month included tax</p>
  //    </span>
  //    <span class="Details">
  //      <p class="text-gray-400">Details: <em>860 sq ft</em></p> 
  //    </span>
  //    <div class="flex flex-col gap-3 mt-4">
  //      <span class="info flex gap-4 ">
  //        <img src="/assets/images/listing-icon-02.png" alt=""> 3 Bathrooms
  //      </span>
  //      <span class="info flex gap-4 ">
  //        <img src="/assets/images/listing-icon-03.png" alt=""> 2 Bedrooms
  //      </span>
      
  //    </div>
    
     
  
  //  </div>
   
  
  //  </div> 
  
   
  // </div>
  //   `
   
  // })
  // productsDOM.innerHTML = showProducts;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  