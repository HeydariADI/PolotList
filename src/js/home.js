let categoryMenu = document.querySelector('.categories-menu__left');
categoryMenu.addEventListener('click', (e) => {
    let target = e.target;
    document.querySelector('.menu-active').classList.remove('menu-active');
    target.closest('.equipment-category').classList.add('menu-active');
    let selectedCategory = target.closest('.equipment-category').id;
    document.querySelector('.image-active').classList.remove('image-active')
    document.getElementById(`${selectedCategory}-img`).classList.add('image-active');
    document.querySelector('.active-category').classList.remove('active-category');
    document.getElementById(`${selectedCategory}-box`).classList.add('active-category')
})
document.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault()
}))
//menu
let menuResponsive=document.querySelector('.menu-responsive');
menuResponsive.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('hide-class')
})