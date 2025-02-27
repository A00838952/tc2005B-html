window.onload= () => {
    if(!sessionStorage.name){
        window.location="../login.html";
    }
}

const pag= ()=>{
    window.location="Pag.html"
}
const pagbutton=document.getElementById("PagButton");

pagbutton.addEventListener("click",pag) ;
const h1=document.getElementById("h1")
h1.innerHTML="Hola " + sessionStorage.name;

const logout=document.getElementById("Logout");
logout.addEventListener("click",()=>{sessionStorage.removeItem("name")})
        