window.addEventListener("load", function() {
    let formulario = document.querySelector("form");
    let fields = document.querySelectorAll(".invalid");
    console.log("Soy la validacion del registro");

    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
        let errors = [];
    
        for (let e = 0; e < fields.length; e++) {
          console.log(fields[e]);
          if (fields[e].value == "") {
            errores.push(`El campo ${fields[e].id} no debe estar vacio`);
          }
        }
        console.log(errors)

        if (errores.length > 0) {
          let messageErrores = document.querySelector("div.errores ul");
          console.log("elemento que contiene errores");
          console.log(messageErrores);
          
          for (error of errores){
            messageErrores.innerHTML += "<li>" + error + "</li>";
          }
        }
    })
}) 