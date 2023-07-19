import Home from "./pages/Home";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import History from "./pages/History";
import './styles/App.css'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/history" element={ <History /> } />
      </Routes>
    </>
  )
}

export default App
