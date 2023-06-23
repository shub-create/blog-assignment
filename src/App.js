import './css/App.css';

import { Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';
import Favourites from './components/Favourites';

const App = () => {
  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route  path='/post/:id' element={<PostDetail />} />
          <Route  path="/" element={<Home />} />
          <Route  path="/favourites" element={<Favourites />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
