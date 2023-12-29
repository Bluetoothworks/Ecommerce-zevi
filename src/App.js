import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop.js'
import Search from './components/Search.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='bod'>
        
        <Routes>
            <Route path='/' element={<Search />}/>
          <Route path='/shop' element={<Shop />} />
        </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
