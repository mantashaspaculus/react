import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Insight from './Components/Insight';
import SinglePost from './Components/SinglePost';
import SingleService from './Components/SingleService';
import Services from './Components/Services';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Insight" element={<Insight />} />
          <Route path="/post/:postSlug" element={<SinglePost />}/>
          <Route path="/Insight" element={<Services />} />

          <Route path="/service/:postSlug" element={<SingleService />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
