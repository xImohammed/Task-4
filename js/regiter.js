const userName = document.getElementById(`userName`)
const userEmail = document.getElementById(`userEmail`)
const userPass = document.getElementById(`userPass`)
const signUp = document.getElementById(`signUp`)
const login = document.getElementById(`login`)
const successALert= document.getElementById(`successALert`)
const dangerAlert = document.getElementById(`dangerAlert`)


let users = []
if(localStorage.getItem(`users`)!== null)
{
    users = JSON.parse(localStorage.getItem(`users`))
}
function addUser()
{
    let registered = validation(userName)&&validation(userPass)&&validation(userEmail)
    if(registered)
        {
            let user = {
                name:userName.value,
                pass:userPass.value,
                email:userEmail.value
            }
            if(users.find((existedEmail)=>{return existedEmail.email === user.email}))
            {
             return dangerAlert.classList.remove(`d-none`)
            }
            else
            {
                dangerAlert.classList.add(`d-none`)
            }
            users.push(user)
            localStorage.setItem('users',JSON.stringify(users))
            addSuccessAlert()
            clearValues()

        return registered
        
}
}
function addSuccessAlert()
{
    return  successALert.classList.remove('d-none')
    
}
function clearValues()
{
    userName.value=null,
    userEmail.value=null,
    userPass.value=null,
    document.querySelectorAll("input").forEach(input=>{
        input.classList.remove(`is-valid`)
        input.classList.remove(`is-invalid`)
    })
}
signUp.addEventListener('click',()=>{
    let navigate = addUser()
    if(navigate)
    {
setTimeout(()=> location.href='../html/login.html',1000)
    }
})
login.addEventListener('click',()=>{
    location.href='../html/login.html'
}
)
function validation(element)
{
let regex = {
    userName:/[a-z]{3,12}/,
    userEmail:/^[a-zA-z1-9]{3,}@(gmail|yahoo).com/,
    userPass:/[a-zA-z1-9]{4,}/
}
if(regex[element.id].test(element.value))
{
element.classList.add('is-valid')
element.classList.remove('is-invalid')
return true
}
else
{
element.classList.remove('is-valid')
element.classList.add('is-invalid')
return false
}
}

userName.addEventListener('input', () => validation(userName));
userEmail.addEventListener('input', () => validation(userEmail));
userPass.addEventListener('input', () => validation(userPass))