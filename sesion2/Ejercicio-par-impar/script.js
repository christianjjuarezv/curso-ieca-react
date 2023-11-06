document.addEventListener("DOMContentLoaded", () => {
    const input=document.querySelector("#numeros");
    const btn=document.querySelector("#agregar");
    const list=document.createElement("ul");
    document.body.append(list);
    var totimp=0;
    var totpar=0;
    btn.addEventListener("click",()=>{
        const num=parseInt(input.value);
        const li=document.createElement("li");
        const contadorPar=document.getElementById("pares");
        const contadorImpar=document.getElementById("impares");
        li.textContent=num;
        list.append(li);
        if(num%2===0){
            totpar+=1;
            contadorPar.innerText=totpar;
        }else{
            totimp+=1;
            contadorImpar.innerText=totimp;
        }
        input.value="";
        render();
    });
    render();
});