let categoryMenu = document.querySelector('.categories-menu__left');
categoryMenu.addEventListener('click', (e) => {
    let target = e.target;

    document.querySelector('.menu-active').classList.remove('menu-active');
    target.closest('.equipment-category').classList.add('menu-active');
    let selectedCategory = target.closest('.equipment-category').id;
    document.querySelector('.image-active').classList.remove('image-active')
    document.getElementById(`${selectedCategory}-img`).classList.add('image-active');
    

})
