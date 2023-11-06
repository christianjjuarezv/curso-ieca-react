import { useState, useEffect} from 'react'
import frasesLogo from '/frases.png'
import chistesLogo from '/chistes.png'
import './App.css'

function App() {
  const [chiste, setChiste] = useState("")
  const [frase, setFrase] = useState("")

  const getChiste=async()=>{
    let errorMessage="Buscando Chiste...";
    try{
            const res=await fetch(
                "https://icanhazdadjoke.com/",{
                    headers: {
                        Accept:'application/json'
                    }
                });
            if(res.status===404){
                errorMessage="No se pudo obtener el chiste"
            }            
            const data=await res.json();
            setChiste(data.joke);
        }catch(e){
            alert(errorMessage);
            console.log(e);
        }finally{
            console.log("Se terminó la ejecución")
        }
  };
  const getFrase=async()=>{
    let errorMessage="Buscando Frase...";
    try{
        const res = await fetch(
          " https://quote-garden.onrender.com/api/v3/quotes/random"
        );
            if(res.status===404){
                console.log(`No se pudo obtener la frase ${errorMessage}` );
            }            
            const data=await res.json();
            setFrase(data.data[0].quoteText);
        }catch(e){
            console.log(e);
        }finally{
            console.log("Se terminó la ejecución");
        }
  };
  useEffect(() => {
    getChiste();
  }, []);
  useEffect(() => {
    getFrase();
  }, []);
  
  return (
    <>
      <div>
          <img src={frasesLogo} className="logo" alt="Frases" />
          <img src={chistesLogo} className="logo" alt="Chistes" />
      </div>
      <h1>Frases y Chistes</h1>
      <div className="card">
        <h3>Frases</h3>
        <button onClick={getFrase} style={{backgroundColor: "#677bae", color:"white" }}>Obtener Frase Aleatoria</button>
        <p style={{color: "#677bae" }}>
          {`${frase}`}
        </p>
        <h3>Chistes</h3>
        <button onClick={getChiste} style={{backgroundColor: "#e97341",color:"white " }}>Obtener Chiste Aleatorio</button>
        <p style={{color: "#e97341" }}>
          {`${chiste}`}
        </p>
      </div>
    </>
  )
}

export default App
