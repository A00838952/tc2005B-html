console.log("Hello world");
const colores=["red","blue"];
colores[0]=523;
console.log(colores[0]);
colores[2]=8;
let alumno={
    nombre:"luis",
    edad:20,
    imprime(){
        console.log(this.nombre+" "+ this.edad);
    },
}
alumno.imprime();
function fun2(){
    onslotchange.log("hola 2");
}
alumno["edad"]++;
const funcion =(name)=>{
    console.log("hola "+ name);
}
funcion("luis");