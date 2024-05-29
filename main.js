let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let loginButton = document.getElementById('loginButton')
let logoutButton = document.getElementById('logoutButton')
let admin = document.getElementById('admin')
let user = document.getElementById('user')

admin.style.display = "none"
user.style.display = "none"
logoutButton.style.display = "none"

function whenLogin(){
    logoutButton.style.display = "block"
    console.log('loginButton has been clicked')
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    localStorage.setItem("username",usernameInput.value)

    if (usernameInput.value == "admin" && passwordInput.value == "admin123"){
        alert('login as admin')
        localStorage.setItem("role","admin")
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        user.style.display = "none" 
        admin.style.display = "block" 
    } else {
        alert('login as user') 
        localStorage.setItem("role","user")
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        admin.style.display = "none" 
        user.style.display = "block" 
    }
}
if (localStorage.getItem('username')){
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    loginButton.style.display = "none"
    logoutButton.style.display = "block"
    if (localStorage.getItem('role') == "admin"){ 
        user.style.display = "none"
        admin.style.display = "block"
    } else {
        admin.style.display = "none"
        user.style.display = "block"
    }
}

function whenLogout(){
    localStorage.clear()
    location.reload()
}