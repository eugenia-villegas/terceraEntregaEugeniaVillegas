//Titulo
$("form").prepend('<h2 class="formTitle">Leave us a comment!</h2>');
$(".formTitle").css("color", "#5db8cc")
               .slideUp(2000)
               .slideDown(2000);


//Datos
//Defino en const los elementos que uso en el formulario
const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const comments = document.getElementById('comments');




form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();

    form.reset()
});

//Ocultar el mensaje de error cuando no hay error
$("#smallName").hide();
$("#smallLastName").hide();
$("#smallEmail").hide();
$("#smallComment").hide();

function checkInputs() {
    //Obtener valores de los input
    const usernameValue = username.value;
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const commentsValue = comments.value.trim();
    
    
    let usernameCorrect = false;
    let lastnameCorrect = false;
    let emailCorrect = false;
    let commentsCorrect = false;
    


    if(usernameValue === '') {
        //mostrar error nombre
        $("#smallName").show().css("color", "#ec87b2");
    } else {
            //mostrar exito nombre
            $("#smallName").hide();
            usernameCorrect = true;
            localStorage.setItem("nombre", usernameValue)
            
    }

    if(lastnameValue === '') {
        //mostrar error apellido
        $("#smallLastName").show().css("color", "#ec87b2");        
    } else {
            //mostrar exito apellido
            $("#smallLastName").hide();
            lastnameCorrect = true;
            /*const enJSON = JSON.stringify(lastnameValue);
            localStorage.setItem("lastname", enJSON);
            console.log("El apellido es: " + enJSON);*/
            localStorage.setItem("apellido", lastnameValue);
        }    

    if(emailValue === '') {
        $("#smallEmail").show().css("color", "#ec87b2");
    } else {
        $("#smallEmail").hide();
        emailCorrect = true;
        /*const enJSON = JSON.stringify(emailValue);
        localStorage.setItem("email", enJSON);
        console.log("Email: " + enJSON);*/
        localStorage.setItem("email", emailValue);
    }

    if(commentsValue === '') {
        //mostrar error comentarios
        $("#smallComment").show().css("color", "#ec87b2");
    } else {
            //mostrar exito comentarios
            $("#smallComment").hide();
            commentsCorrect = true;
            /*const enJSON = JSON.stringify(commentsValue);
            localStorage.setItem("comments", enJSON);
            console.log("Comments: " + enJSON);*/
            localStorage.setItem("comments", commentsValue);
    }
    
    if (usernameCorrect == true && lastnameCorrect == true && emailCorrect == true && commentsCorrect == true){
        $(".thanks").prepend('<h6>Thanks for your message!</h6>');
        $(".thansk").css("color", "#5db8cc");
        localStorage.getItem(usernameValue);
        localStorage.getItem(lastnameValue);
        localStorage.getItem(emailValue);
        localStorage.getItem(commentsValue);
        console.log("Nombre: " + usernameValue);
        console.log("Apellido: " + lastnameValue);
        console.log("Email: " + emailValue);
        console.log("Comentarios: " + commentsValue);
    }
}


