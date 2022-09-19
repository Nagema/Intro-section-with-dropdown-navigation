import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <NavBar></NavBar>   
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
