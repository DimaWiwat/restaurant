// SLIDER

$(document).ready(function() {
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      autoplay: true,
      // slidesToShow:3,
      // slidesToScroll:3,
      // speed:100,
      // easing: 'linear',
      // infinite: true,
      
   });
});


// TABS


let tabs = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabsWrap = document.querySelector(".tab-title-items")

function hideTabContent() {
   tabContent.forEach(tab => {
      tab.classList.add("hide");
      tab.classList.remove("show");
   })

   tabs.forEach(item => {
      item.classList.remove("tab-active");
   })
}

function showTabContent(item = 0) {
   tabContent[item].classList.add("show");
   tabContent[item].classList.remove("hide");
   tabs[item].classList.add("tab-active");
}

hideTabContent()
showTabContent()

tabsWrap.addEventListener("click",function(e) {
   let target = e.target

   if(target && target.classList.contains("tab-title-item")) {
      tabs.forEach((item,i) => {
         if (target === item) {
            hideTabContent();
            showTabContent(i);
         }
      })
   }
})


// MODAL

let moreDetailsBtns = document.querySelectorAll(".details-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide")
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click",function(e) {
        e.preventDefault();
        openModal()
    })
})

closeBtn.addEventListener("click",closeModal)



modal.addEventListener('click', function(e) {
   if(e.target === modal) {
       closeModal()
   }
})



// function showModalByScroll() {
//    if (window.pageYOffset > document.documentElement.scrollHeight/2) {
//        openModal();
//        window.removeEventListener("scroll", showModalByScroll)
//    }
// }

// window.addEventListener("scroll",showModalByScroll)