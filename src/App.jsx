import './App.css';
import NavBar from './containers/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <NavBar/>  
        <Routes>
          <Route 
            path='/' 
            element={<MainPage />}
          >
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
