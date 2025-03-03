const username=document.getElementById("username");
const password=document.getElementById("password");

const login=()=>{
    if (username.value==="ro" && password.value==="123"){
        sessionStorage.setItem("name", "Rodrigo González")
        window.location="/index.html";
    }else{
        alert("credenciales incorrectas");
    }
}

const btnLogin=document.getElementById("btnLogin");
btnLogin.addEventListener("click",login);
password.addEventListener("keydown",(e)=>{if(e.key==="Enter"){
    login()
}})