import { useEffect, useState } from "react";
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


export default Chat