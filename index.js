const button360 = document.querySelector('#image_360');
const buttonX = document.querySelector('#close');
const sofa = document.querySelector('#sofa_rotating');
button360.addEventListener("click",() =>{
    if(sofa.classList.contains("hide")){
        sofa.classList.remove("hide")
        buttonX.classList.remove('hide')
        button360.classList.add('hide')
    }
})
buttonX.addEventListener('click',() =>{
    buttonX.classList.add('hide')
    sofa.classList.add("hide")
    button360.classList.remove('hide')
})