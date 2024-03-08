import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateTodo from './pages/CreateTodo';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path='/' element={<CreateTodo/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
