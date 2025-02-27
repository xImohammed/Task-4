
const userEmail = document.getElementById(`userEmail`)
const userPass = document.getElementById(`userPass`)
const signUp = document.getElementById(`signUp`)
const login = document.getElementById(`login`)
const successALert = document.getElementById(`successALert`)
const dangerAlert = document.getElementById(`dangerAlert`)
let users = []
if(localStorage.getItem(`users`)!==null)
{ 
    users= JSON.parse(localStorage.getItem(`users`))
}
signUp.addEventListener('click',()=>{
    location.href='../index.html'
}
)
login.addEventListener('click',function()
{
    let user = {
        email:userEmail.value,
        pass:userPass.value
    }
    let login = users.find(function(ourUser){return ourUser.email===user.email && ourUser.pass === user.pass})
if(login)
{
localStorage.setItem('userInfo',JSON.stringify(login.name))
setTimeout(()=> location.href='../html/profile.html',1000)
successALert.classList.remove(`d-none`)
dangerAlert.classList.add(`d-none`)
}
else{
    dangerAlert.classList.remove(`d-none`)
    successALert.classList.add(`d-none`)
}
}
)
