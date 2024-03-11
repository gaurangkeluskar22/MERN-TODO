import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateTodo from './pages/CreateTodo';
import SignUp from './pages/Signup/SignUp';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div className="App" >
    <Router>
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Create' element={<CreateTodo/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
