import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/login";
import Auth from "./hoc/Auth";
import Chat from "./pages/auth/Chat";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
          <Navbar />
          <div className="w-full h-full flex justify-center">
            <div className="container flex text-white p-4">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route
                  element={
                    <Auth>
                      <Outlet />
                    </Auth>
                  }
                >
                  <Route path="/chat" element={<Chat />} />
                </Route>
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
