import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Dashboard from './layouts/dashboard';
import Users from './layouts/users';
import Demo from './layouts/demo';
import Profile from './layouts/profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/demo" element={<Demo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
