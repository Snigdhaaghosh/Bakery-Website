/* Search-bar active */
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchBox = document.querySelector('.search-box');

/* Toggle */
menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  searchBox.classList.remove('active');
};

/* Toggle search */
searchIcon.onclick = () => {
  searchBox.classList.toggle('active');
  navbar.classList.remove('active');
};

/* Close on scroll */
window.onscroll = () => {
  navbar.classList.remove('active');
  searchBox.classList.remove('active');
};
