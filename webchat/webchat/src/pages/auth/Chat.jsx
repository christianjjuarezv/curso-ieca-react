import { useEffect } from "react";
import { useWebChat } from "../../hooks/useWebChat";
import MessageItem from "../../components/MessageItem";

const Chat = () => {
  const { data: webchat, loading, error, getMessages } = useWebChat();

  useEffect(() => {
    const get = async () => {
      const unsubscribe = await getMessages();
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    };
    get();
  }, []);

  return (
    <>
      <div className="text-black">
      <h1 className="text-cyan-700">Bienvenido al WebChat, ya pudiste entrar.</h1>
        {loading ? <span>Cargando...</span> : null}
        {error ? <span>Hubo un error</span> : null}
        {webchat ? (
          <ul className="grid grid-cols-5 gap-4 ">
            {webchat.map((webchat) => (
              <MessageItem webchat={webchat} key={webchat.id} />
            ))}
          </ul>
        ) : null}
      </div>
      {/* Fixed floating button */}
      
    </>
  );
};

export default Chat;

/*import { useEffect, useState } from "react";
import MessageItem from "../../components/MessageItem";
import { useSelector } from "react-redux";

const Chat=()=>{
    const chat = useSelector(state => state.chat) 
    return (
        
        <div className="flex flex-col gap-4">
            <h1 className="text-cyan-700">Bienvenido al WebChat, ya pudiste entrar.</h1>
            <div className="flex flex-col gap-2">
                {chat.map((webchat) => (
                    <MessageItem webchat={webchat} 
                    key={webchat.id} 
                    usuario={webchat.usuario} 
                    mensaje={webchat.mensaje}/>
                )) }
            </div>
            
        </div>
    )
}


export default Chat*/