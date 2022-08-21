
const contentHolder = document.querySelector('.menu-content')
const backdropHolder = document.querySelector('.backdrop')
const menu = document.querySelector('.fa-list')
const searchIcon = document.querySelector('.searchIcon')
const search = document.querySelector('.search')
const logins = document.querySelectorAll('.login')
const closeSearch = document.querySelector('.closeSearch')
const inputs = document.querySelectorAll('.field input')
const togglePasswords = document.querySelectorAll('.toggle-password')
const forgottenpasswords = document.querySelectorAll('.forgotten')
const forgottenPasswordModal = document.querySelector('#forgotten-password-modal')
const loginModal = document.querySelector('#login-password-modal')
const closeModals = document.querySelectorAll('.close-modal')

// validate
inputs.forEach(input=>{
  input.addEventListener('blur', validateForm)
  input.addEventListener('input', validateForm)
})

function validateForm(e){
  const alertCheck = e.target.parentElement.nextElementSibling.classList[0]
  let value = e.target.value
  let id = e.target.classList[0]
  e.target.nextElementSibling.classList.remove('valid');   
  e.target.classList.remove('input');
  if(value.length > 0){
    e.target.classList.add('input')
    e.target.nextElementSibling.classList.add('valid');
    if(alertCheck === 'alert'){
      e.target.parentElement.nextElementSibling.remove();    
    }
  }else{
    if(alertCheck !== 'alert'){
      const errorDiv = document.createElement('div')
      errorDiv.classList.add('alert')
      errorDiv.appendChild(document.createTextNode(id + ' is mandatry'))
      e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling)   
    }
  }
}
// validate end

// menu
menu.addEventListener('click', menuFunction)
function menuFunction(){
  backdropHolder.classList.remove('hidden')
  contentHolder.classList.remove('hidden')
}

backdropHolder.addEventListener('click', backdrop)
function backdrop(){
  backdropHolder.classList.add('hidden')
  contentHolder.classList.add('hidden')
}

searchIcon.addEventListener('click', showSearch)
function showSearch(){
  search.classList.remove('search')
  search.classList.add('mobile-search')
}

closeSearch.addEventListener('click', offSearch)
function offSearch(){
  search.classList.add('search')
  search.classList.remove('mobile-search')
}
// menu end

// toggle password show
togglePasswords.forEach(togglePassword=> togglePassword.addEventListener('click', passwordToggle));
function passwordToggle(e){
  if(e.target.classList.contains('show')){
    e.target.classList.remove('show')
    e.target.textContent='Hide'
    e.target.parentElement.firstElementChild.type = 'text'
  }else{
    e.target.textContent = 'Show'
    e.target.classList.add('show')
    e.target.parentElement.firstElementChild.type = 'password'
  }
}
// toggle password end

// modal 
forgottenpasswords.forEach(forgottenpassword=> displayModal(forgottenpassword, forgottenPasswordModal))
logins.forEach(login=> displayModal(login, loginModal))
function displayModal(actions, modal){
  function showModal(e){
    if(document.querySelector('.modal')){
      loginModal.classList.remove('modal')
    }
    modal.classList.add('modal')
  }
  actions.addEventListener('click', showModal)
  closeModals.forEach(closeModal=>closeModal.addEventListener('click', e=>modal.classList.remove('modal')))
}
//modal end

//slider

// const maleSliderContent = document.querySelector('.single-males');
// const femaleSliderContent = document.querySelector('.single-females');
// const weddings = document.querySelector('.weddings');
let sliderToShow = 0; 
const arrows = document.querySelectorAll('.single-males .arrow');
const maleSliderContentImages = document.querySelectorAll('.single-males .card-content');
function Slider(n){
  displayImage(sliderToShow += n)
}
function displayImage(n){
  if(sliderToShow > 0){
      arrows[0].classList.remove('hidden')
      arrows[0].classList.add('sliderArrowLeft')
  }
  if(sliderToShow <= maleSliderContentImages.length-1 ){
    arrows[1].classList.remove('hidden')
    arrows[1].classList.add('sliderArrowRight')
  }
  // maleSliderContentImages[sliderToShow-n].classList.add('hidden');
  maleSliderContentImages.forEach((e, index)=>{
    if(sliderToShow === index){
      e.classList.remove('hidden')
    }
  })
}