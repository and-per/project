const btnShowModal = document.querySelectorAll(".login")
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const menulink = document.querySelector(".menu")
const maplink = document.querySelector(".map")
const feedbackslink = document.querySelector(".feedbacks")
const welcome = document.querySelector(".welcome-text")
const welcomebtn = document.querySelector(".login")
const welcomeaft = document.querySelector(".welcome-text-after")
const usernameanim = document.querySelector(".user-name")

const closemodal = () => {
    modal.classList.add("hidden")
}

btnShowModal.forEach((btn) => {
    
    btn.addEventListener("click", function() {
        modal.classList.remove("hidden")
    })
})

close.addEventListener("click", closemodal)

const loginbtn = document.querySelector(".login-modal")




const logiin = () => {
        let pass = document.querySelector(".pass-input").value
        let user = document.querySelector(".login-input").value
         if (pass == 123123123, user == "guest") {
            console.log(user)
            menulink.classList.remove("hidden")
            maplink.classList.remove("hidden")
            feedbackslink.classList.remove("hidden")
            document.querySelector(".user-name").innerHTML = user
            welcome.classList.add("hidden")
            welcomebtn.classList.add("hidden")
            welcomeaft.classList.remove("hidden")
            closemodal()
            setTimeout()
            
         }else{
            
         }
    }

usernameanim.classList.add("name-anim")

loginbtn.addEventListener("click", function() {
    logiin()
})