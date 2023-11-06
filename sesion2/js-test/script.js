//Ejercicio 1 variables
/*let text="hola";
if (true){
    let text="mundo";
    console.log(text);
}
console.log(text);
*/

//Ejercicio2 variables (uso en ciclos)
/*const container= document.getElementById("container");
for (let i = 0; i<5; i++) {
    var div= document.createElement("div");
    div.style.width="100px";
    div.style.height="100px";
    div.style.margin="10px";
    div.style.backgroundColor="green";
    container.appendChild(div);
    div.addEventListener("click",()=>{
        alert("Soy el div numero "+i);
    });
}*/

//Ejercicio3 Template strings
/*const template=`Hola, 
este es un mensaje largo`;
let contado=6;
const templateContador=`El contador es ${contado}`;
console.log(template);
console.log(templateContador);*/

//Ejercicio4 Funciones declarativas
/*holaMundo("Christian");
function holaMundo(nombre){
    alert(`Hola ${nombre}`);
}*/

//Ejercicio5 Funnciones como expresión primero debe ser declarada y después llamarla
/*const holaMundo=function(nombre){
    alert(`Hola ${nombre}`);
}
holaMundo("Christian");*/

//Ejercicio6 Funciones arrow
/*const holaMundo=(nombre)=>alert(`Hola ${nombre}`);
holaMundo("Christian");*/

//Ejercicio7 Funciones arrow con contexto
/*const tahoe={
    name: "Montañas",
    getFormattedTitle:function(){
        alert( this.name.toUpperCase());
    },
    getFormattedTitleDelay:function(){
        setTimeout(()=>{
            alert(this.name.toUpperCase())
        },3000)
    }
};
//tahoe.getFormattedTitle();
//tahoe.getFormattedTitleDelay();
*/

//Ejercicio 8 Desestructuración de objetos
/*const {name,getFormattedTitle}=tahoe;
//alert(`Mi nombre es ${name}`)
tahoe.getFormattedTitle();
getFormattedTitle();
*/
/*const persona={
    name: 'Juan',
    city: 'León'
};
const {
    adress: {city},
}=persona;
alert(city);
*/

//Ejercicio 9 Desestructuración de arreglos


//Ejercicio 10 Operador de propagación (...)(propaga las caracteristicas de un objeto o arreglo dentro de otro)
/*const peaks=['Tallac','Rose'];
const canyons=['Ward','BalckWood'];
const tahoe=[...peaks,...canyons]
console.log(tahoe);

personalData={
    name: 'Joel',
    dir: 'Ejer 101'
};
personalData2={
    name: 'Juan',
    dir: 'Ejer 102'
};
const completeData={
    ...personalData,
    ...personalData2
};
console.log(completeData);
*/

//Ejercicio 11 Construcción de Promesas
/*fetch('http://api.randomuser.me/?nat=MX&results=10').then(res=>
    console.log(res.json())
);*/

//Ejercicio 12 Async/await
/*const getQuote=async()=>{
    let errorMessage="Ocurrió un error";
    try{
            const res=await fetch(
                "https://quote-garden.onrender.com/api/v3/quotes/random"
            ) ;
            if(res.status===404){
                errorMessage="No se encontró la frase"
            }            
            const data=await res.json();
            const p=document.getElementById("quote");
            p.innerText=data.data[0].quoteText;
        }catch(e){
            alert(errorMessage);
            console.log(e);
        }finally{
            console.log("Se terminó la ejecución")
        }
};
getQuote();*/

//Ejercicio 13 Filter
/*const names=["José","Christian","Eduardo","Jaime","Uriel","Alejandro"];
//const namesWithJ=names.filter((name)=>name[0]==="J");
const namesWithJ=names.filter((name)=>name.includes("Alej"));
console.log(names);
console.log(namesWithJ);*/

//Ejercicio 13.1 Filter()
/*const users=[{
    name:"Jose",
    age: 25
},
{
    name:"Christian",
    age: 18
},
{
    name:"Eduardo",
    age: 29
},
{
    name:"Jaime",
    age: 23
},
{
    name:"Uriel",
    age: 30
},
{
    name:"Alejandro",
    age: 35
},
];
const usersUnder25=users.filter((user)=>user.age<=25);
const userUriel=users.find((user)=>user.name==="Uriel");
const index=users.findIndex((user)=>user.name==="Uriel");
console.log(users);
console.log(usersUnder25);
console.log(userUriel);
console.log(index);*/

//Ejercicio 14 map()
/*const users=[{
    name:"Jose",
    age: 25
},
{
    name:"Christian",
    age: 18
},
{
    name:"Eduardo",
    age: 29
},
{
    name:"Jaime",
    age: 23
},
{
    name:"Uriel",
    age: 30
},
{
    name:"Alejandro",
    age: 35
},
];
const ages=users.map((user)=>user.age);
const container=document.getElementById("container");
const elements=users.map((user)=>{
    const div =document.createElement("div");
    div.innerText=`Nombre: ${user.name}, Edad: ${user.age}`;
    return div;
});
container.append(...elements);

console.log(users);
console.log(ages);*/

//Ejercicio 15 Reduce (Funcion que obtiene un valor a partir de ejecutar o recorrer un arreglo)
/*const ages=[25,18,29,23,30,35,50,19,25,31];
const maxAge=ages.reduce((prev,current)=>{
    console.log(`Previo ${prev}, Current: ${current}`);
    if(current>prev){
        return current;
    }else{
        return prev;
    }
}, 0);
const sumAges=ages.reduce((prev,current)=>{
    console.log(`${prev} + ${current}=${prev+current}`);
    return prev+current;
},0);
console.log(maxAge);
console.log(sumAges)*/

//Ejercicio 16 Higher order function
const invokeIf=(condition,fnTrue,fnFalse)=>{
    if(condition){
        fnTrue();
    }else{
        fnFalse();
    }
};
const success=()=>alert("La condicion se cumple");
const fail=()=>alert("La condicion fallo");
const is2023=new Date().getFullYear()===2023;
invokeIf(is2023,success,fail);