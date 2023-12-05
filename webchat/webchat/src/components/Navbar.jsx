import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Navbar = () => {
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  return (
    <nav className="bg-cyan-900 p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">WebChat</h1>
        <Link to="/chat">Entrar al Chat</Link>
        
        {!user ? <Link to="/">Iniciar sesión</Link> : 
          <div className="flex gap-2 items-center">
            <span>{user.email}</span>
            <button className="text-red-500 underline p-2 rounded-md hover:text-red-600" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        
        }
      </div>
    </nav>
  );
};

export default Navbar;
