import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
//import './App.css'
import HelloWorld from "./components/HelloWorld"
import Timer from "./components/Timer"
import { useState } from 'react'
function App() {
  const [routes,setRoutes]=useState([
    {
      path: "/hello-world",
      name: "Hellow world",
      component: <HelloWorld/>,
    },
    {
      path:"/timer",
      name:"Timer",
      component: <Timer/>,
    }
  ]);
  return (
    <Router>
      <div className=''>
      <nav className='absolute top-0 left-0'>
        <h1>Talento Tech</h1> 
      </nav>
      <aside className=''> 
        {routes.map((route)=>(
          <Link to={route.path} key={route.path}>
            {route.name}
          </Link>
        ))}
      </aside>
      <main>
        <Routes>
          {routes.map((route)=>(
            <Route 
            path={route.path} 
            element={route.component} 
            key={`route->{route.path}`}
            />         
         ))}
        </Routes>
      </main>
      </div>
    </Router>
  )
}
export default App
