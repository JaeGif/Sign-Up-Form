// simple validation that passwords are matching, no regex to see here.

const newPassword = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

confirmPassword.addEventListener('keyup', validatePasswords)    // actively checks as user types for more responsive UX

function validatePasswords() {
    if (newPassword.value !== '' && confirmPassword.value !== '') {
        if (newPassword.value === confirmPassword.value) {
            confirmPassword.classList.remove('invalid')
            confirmPassword.classList.add('valid')
        } else {
            confirmPassword.classList.remove('valid')
            confirmPassword.classList.add('invalid')
        }
    } 
}
