//lay form
var formSearch = document.querySelector('.form_search');

var formNav = document.querySelector('.nav_choose--list');

var formCart = document.querySelector('.form_cart');

var btnSearch = document.querySelector('#nav_icon--btn');

btnSearch.onclick = ()=>{
    formSearch.classList.toggle('form_search--active');
    formCart.classList.remove('form_cart--active');
}

window.onscroll = ()=>{
    formSearch.classList.remove('form_search--active');
    formCart.classList.remove('form_cart--active');
}

var btnCart = document.querySelector('.nav_icon--cartLabel');
btnCart.onclick = ()=>{
    formCart.classList.toggle('form_cart--active');
    formSearch.classList.remove('form_search--active');
}