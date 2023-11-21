import logo from './logo.svg';
import './App.css';




import './card.css'




import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  NavLink
} from 'react-router-dom';

import Home from './components/Home';




function App() {
  return (
    <div className="App">


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >




      <Routes>


    
        <Route path="/" element={< Home />} />
  



      </Routes>

    </div>
  );
}

export default App;
