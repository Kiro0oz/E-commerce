const productImage = document.querySelectorAll(".product-img img");
const productImageSlider = document.querySelector(".image-slider");

let activeImageSlider = 0;

productImage.forEach((item, i) => {
  item.addEventListener('click', () => {
    productImage[activeImageSlider].classList.remove('active');
    item.classList.add('active');
    productImageSlider.style.backgroundImage = `url('${item.src}')`;
    activeImageSlider = i;
  })
})

// toggle size btn

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  item.addEventListener('click', () => {
    sizeBtns[checkedBtn].classList.remove('check');
    item.classList.add('check');
    checkedBtn = i;
  })
})