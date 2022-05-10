import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Nav-bar';
import Home from './Home';
import Create from './create';
import BlogDetails from './Blog-details';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
          <Routes>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
