console.log("hola mundo");
const text="Hola Mundo";
document.addEventListener("DOMContentLoaded",()=>{
    const input=document.querySelector("#input");
    const button=document.querySelector("#button");
    const list=document.querySelector("#list");
    button.style="background-color: green; color: white;"
    console.log("contenido cargado dom");
    button.addEventListener("click",()=>{
        const li=document.createElement("li");
        li.textContent=input.value;
        const btn=document.createElement("button");        
        btn.innerHTML= "Eliminar";
        const btn2=document.createElement("button");        
        btn2.innerHTML= "Terminada";
        list.append(li,btn,btn2);
        btn.addEventListener("click",()=>{
            li.remove(); 
            btn.remove(); 
            btn2.remove();
        });
    });    
});
console.log("contenido cargado script");

