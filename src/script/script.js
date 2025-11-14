// referênccia de cada id

const form = document.getElementById("form");
const username = document.getElementById("name");
// const lastname = document.getElementById("lastname");
const telefone = document.getElementById("phone");
// const email = document.getElementById("email");
const scriptURL = 'https://script.google.com/macros/s/AKfycbyvIo_J-3im-4nnCGZQreSqKEJU4g5lji4vxv0MwRrqJj4vsKlo1DjMEGYJUliRrksAmQ/exec';
// google sheets -> App Script




//  ENVIO DO FORMULARIO

form.addEventListener("submit", (event) => {
    event.preventDefault();
    

    checkForm();
})  

// RETIRANDO MENSAGEM E OUTLINE DE ERRO

username.addEventListener("blur", () => {
    CheckUsername();
})

telefone.addEventListener("blur", ()=> {
    CheckTelefone();
})

// VALIDAÇÃO DO NOME

function CheckUsername() {
    const usernameValue = username.value;
    
    
    if(usernameValue === ""){
        errorInput(username, "O nome é obrigatório");
    } else {
        const formItem = username.parentElement;
        formItem.className = "input-field";
    }
}

// VALIDAÇÃO DO TELEFONE 

function CheckTelefone() {
    const telefoneValue = telefone.value;
    
    if(telefoneValue === ""){
        errorInput(telefone, "O telefone é obrigatório");
    } else {
        const formItem = telefone.parentElement;
        formItem.className = "input-field";
    }
}


// OUTLINE DE ERRO + MENSAGEM

function errorInput(input, message){
    
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    
    textMessage.innerText = message;
    formItem.className = "input-field error";
}

// CHECK DO FORMULÁRIO ANTES DO ENVIO

function checkForm(){

        CheckUsername();
        CheckTelefone();
    
        const formItems = form.querySelectorAll(".input-field");

        const isValid = [...formItems].every((item) => {
            return item.className === "input-field";
        });

        if(isValid){

            // mostra confirmação imediata pro usuário
            alert("Formulário enviado com sucesso!");

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            // .then(response => alert("Thank you! Form is submitted" ))
            .then(() => { window.location.reload(); })
            // .catch(error => .error('Error!', error.message))
        }
        
        // console.log(isValid);
    }