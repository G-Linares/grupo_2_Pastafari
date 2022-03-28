window.addEventListener("load", function() {
    let login = document.querySelector("form.form");

    login.addEventListener("submit", function(e) {
        e.preventDefault();

        let userName = document.querySelector("#username");

        if (userName.value == "") {
            alert("El campo de username tiene que estar lleno")
        }

        let campoPassword = document.querySelector("#password");

        if (campoPassword.value == "") {
            alert("El campo de Password tiene que estar completo");
        }

    });
})