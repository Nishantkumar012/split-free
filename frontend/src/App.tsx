import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  // const [count, setCount] = useState(0)

  const [user,setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);



  // if you refresh the window this will take place
  useEffect(() => {

   const storedUser = localStorage.getItem("user");
   const storedToken = localStorage.getItem("token");

   if(storedUser && storedToken){
        
      setUser(JSON.parse(storedUser));
      setToken(storedToken);

   }

  }, []);



// save to localstorage when user or token change
  useEffect(() =>{
        if(user && token){

          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
        }

        else{
            localStorage.removeItem("user");
            localStorage.removeItem("token")
        }
  }, [user, token])

  return (
   <BrowserRouter>
  <Routes>
    {/* Public Routes */}
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login setUser={setUser} setToken={setToken} />} />

    {/* Protected Routes */}

    // only user logined can access
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute user={user}>
          <Dashboard user={user} token={token} />
        </ProtectedRoute>
      }
    />
  </Routes>
</BrowserRouter>
  )
}

export default App
