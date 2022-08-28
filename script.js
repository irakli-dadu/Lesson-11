const form = document.querySelector("form")

form.addEventListener("submit", event => {
    event.preventDefault()

    const username = document.querySelector("[name = 'username']").value.trim()
    const email = document.querySelector("[name = 'email']").value.trim()
    const password = document.querySelector("[name = 'mypassword']").value.trim()
    const confirmPas = document.querySelector("[name = 'confpassword']").value.trim()


    const errors = []

    if(username === '') {
        errors.push("Username can't be blank")
    }
    if(email === '') {
        errors.push("Email can't be blank")
    }
    if(password === '') {
        errors.push("password can't be blank")
    }
    if(password !== confirmPas ) {
        errors.push("Passwords must match!")
    }

    if(errors.length > 0) {
        for(let i = 0; i < errors.length; i++) {
            Toastify({
                text: errors[i],
                duration: 4000,
                gravity: "top",
                position: "center",
                style: {
                    background: "#DF1C24",
                }
            }).showToast()
        }
    }else {
        Toastify({
            text: "Success!",
            duration: 4000,
            gravity: "top",
            position: "center",
            style: {
                background: "#4bab4e"
            }
        }).showToast()
    }
})




