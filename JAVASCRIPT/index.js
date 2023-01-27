let hamburger = document.querySelector(".hamburger"); 
let navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


let list = document.querySelectorAll('.list');
let galleryItem = document.querySelectorAll('.gallery-item');

for(let i = 0; i<list.length; i++) {
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < galleryItem.length; k++) {
            galleryItem[k].classList.remove('active');
            galleryItem[k].classList.add('hide');
            
            if (galleryItem[k].getAttribute('data-item') == dataFilter || dataFilter == "All"){
                galleryItem[k].classList.remove('hide');
                galleryItem[k].classList.add('active');
            }
        }


    })
}