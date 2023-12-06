import { useDispatch } from "react-redux";
import { addToChat } from "../redux/chatSlice";

const MessageItem = ({webchat}) => {
    const dispatch = useDispatch();

    const handleAddToChat = () => {
        dispatch(addToChat(webchat));
        alert("Mensaje Enviado" )
    }

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <span className="text-center font-bold">{webchat.mensaje}</span>
        <span className="text-center font-bold text-sm">{webchat.usuario}</span>
        
      </li>)
}

export default MessageItem;