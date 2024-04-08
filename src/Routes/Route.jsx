import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Academic from "../Pages/Academic";
import {Routes,Route} from 'react-router-dom';



const allRoute=()=>{



    return(
       <Routes>
        <Route path="/" element={Home}/>
        <Route path="/Home" element={Home}/>
        <Route path="/About" element={About}/>
        <Route path="/Academic" element={Academic}/>
        <Route path="/Gallery" element={Gallery}/>
        </Routes>
    )
}

export default allRoute