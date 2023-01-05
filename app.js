let password = document.getElementById('password')
let repassword = document.getElementById('repassword')
let submitButton = document.getElementById('submit')
let failedText = document.getElementById('failedtext')


submitButton.addEventListener('click', passwordCheck)

function passwordCheck(){
    if(password.value !== repassword.value){
        document.getElementById('passLabel1').classList.add('failedtext')
        document.getElementById('passLabel2').classList.add('failedtext')
        failedText.innerText = "Passwords do not match"
        event.preventDefault()
    }else if(password.value == ""){
        document.getElementById('passLabel1').classList.add('failedtext')
        document.getElementById('passLabel2').classList.add('failedtext')
        failedText.innerText = "Enter a password"
        event.preventDefault()
    }else{alert('You have signed up!')}
}