let users = []
users =JSON.parse(localStorage.getItem(`users`))
const logout=document.getElementById(`logout`)
logout.addEventListener('click',function()
{
location.href=`../html/login.html`
localStorage.removeItem('userInfo')
localStorage.removeItem('userName')
})
let userInfo = JSON.parse(localStorage.getItem('userInfo')) 
document.getElementById(`message`).innerHTML = `hello ${userInfo}`