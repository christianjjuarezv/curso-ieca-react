import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Auth = ({ children }) => {
    const { user, loadingSession } = useLogin();

    if(loadingSession) return (<h1>Cargando...</h1>)

    if(!loadingSession && !user) {
        return <Navigate to="/" replace={true} />
    }

    return children;
}

export default Auth;