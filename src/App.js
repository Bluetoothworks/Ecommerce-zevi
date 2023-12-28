import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home.js'
import Search from './components/Search.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='bod'>
        <Search />
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> */}
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
