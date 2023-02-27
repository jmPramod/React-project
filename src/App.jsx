import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Delete from "./Delete";
import Hero from "./components/Hero";

// import {BrowserRouter,Route,Routes} from "react-router-dom"



function App() {
  return( 
   <Router>

       <NavBar/>
      
       <Routes>
         <Route element={<Home/>} path="/"/>
        
         <Route element={<About/>} path="/about"/>
        
         <Route element={<Contact/>} path="/contacts"/>
        
         <Route element={<Service/>} path="/services"/>
        </Routes>  
     </Router>



  )
  
}

export default App;
