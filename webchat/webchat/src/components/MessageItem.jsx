import { useDispatch } from "react-redux";
import { addToChat } from "../redux/messageChat";

const MessageItem = ({webchat}) => {
    const dispatch = useDispatch();

    const handleAddToChat = () => {
        dispatch(addToChat(webchat));
        alert("Mensaje Enviado" )
    }

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <span className="text-center font-bold">{webchat.mensaje}</span>
        <span className="text-center font-bold text-sm">{webchat.usuario}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToChat}
            >
            Enviar Mensaje </button>
      </li>)
}

export default MessageItem;