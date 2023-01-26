import './App.css';
import { HashRouter , Route , Routes} from 'react-router-dom';

import Home from './components/screen/Home';
import Enquiry from './components/screen/Enquiry';
import Experience from './components/screen/Experience';
import Projects from './components/screen/Projects';

function App() {
  return (
    <>
	    <HashRouter>
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Enquiry/' element={<Enquiry />} />
          <Route exact path='/Experience/' element={<Experience />} />
          <Route exact path='/Projects/' element={<Projects />} />
        </Routes>
      </HashRouter>
    </>
  
  );
}

export default App;
