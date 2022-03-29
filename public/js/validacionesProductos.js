window.addEventListener("load", function() {
    let formulario = document.querySelector("form.form-articulo");
    let fields = document.querySelectorAll(".item");
    console.log("Soy la validacion de la edicion del producto");

    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
        let errores = [];
    
        for (let e = 0; e < fields.length; e++) {
          console.log(fields[e]);
          if (fields[e].value == "") {
            errores.push(`El campo ${fields[e].id} no debe estar vacio`);
          }
        }
        console.log(errores)

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