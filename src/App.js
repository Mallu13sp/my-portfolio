import {Route,BrowserRouter,Routes} from "react-router-dom";
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Education from './components/Education';
import Navbar from'./components/Navbar';
import Projects from'./components/Projects';
import './App.css';

function App() {
  return (<div className="homepage">
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="components/Education" element={<Education/>}/>
    <Route path="components/Skills" element={<Skills/>}/>
    <Route path="components/Certifications" element={<Certifications/>}/>
    <Route path="components/Projects" element={<Projects/>}/>
    <Route  exact path="components/About" element={<About/>}/>
    <Route   path="https://www.hackerrank.com/certificates/18ff149663e3" element={<Certifications/>}/>
    <Route   path="https://www.hackerrank.com/certificates/3760068ce923" element={<Certifications/>}/>
    <Route   path="https://www.hackerrank.com/certificates/4ff44886f115" element={<Certifications/>}/>

  </Routes>
  
  </BrowserRouter>
  </div>
  
  );
}

export default App;
