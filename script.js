const nameSource = document.querySelectorAll('.name')

function validateName() {
    for (i = 0; i < nameSources.length; i++) {
        const regexpname = /a-zA-Z/
        nameSources[i].onchange = function(){

            if (regexpname.test(nameSources[i].value)) {
                nameSources[i].classList.add('valid')

            } else {
                nameSources[i].classList.add('invalid')
            }
        }
    }
}
validateName()
console.log(nameSources.classList)