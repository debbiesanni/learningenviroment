const inputs = document.querySelectorAll('form .field input');
inputs.forEach(input =>{
    input.addEventListener('blur', validateForm);
    input.addEventListener('input', validateForm)
})
function validateForm(e){
    let classesHolder = e.target.parentElement.nextElementSibling.classList[0];
    console.log()
    const state=['valid', 'not-valid'];
    let classes;

    if(e.target.value.length === 0){
        classes = state[1];
    }else{
        classes = state[0];
    }
    
    e.target.nextElementSibling.classList.remove(...state);
    e.target.nextElementSibling.classList.add(classes);
    
    if(classes === 'not-valid'){
        if(classesHolder !== 'alert'){
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode(e.target.id + ' is mandatory'));
            errorDiv.classList.add('alert');
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);

        }
    }else{
        if(classesHolder === 'alert'){
            e.target.parentElement.nextElementSibling.remove();
        }
        
    }
}

const togglePassword = document.querySelector('.toggle-password');
togglePassword.addEventListener('click', e =>{
    
    if(e.target.classList.contains('show')){
        e.target.classList.remove('show')
        e.target.textContent = 'Hide';
        document.querySelector('#password').type ='text'
    }else{
        e.target.classList.add('show')
        e.target.textContent = 'Show'
        document.querySelector('#password').type ='password'

    }
})