import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateThoughts from './pages/CreateThoughts/CreateThoughts';
import SignUp from './pages/Signup/SignUp';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import MyThought from './pages/MyThoughts/MyThought';

function App() {
  return (
    <div className="App" >
    <Router>
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/create' element={<CreateThoughts/>}/>
      <Route path='/myThoughts' element={<MyThought/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
