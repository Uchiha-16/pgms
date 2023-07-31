import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Dashboard from './layouts/dashboard';
import Users from './layouts/users';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
