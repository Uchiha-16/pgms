import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Dashboard from './layouts/dashboard';
import AddUser from './layouts/addUsers';
import Login from './layouts/login';
import Users from './layouts/users';
import Profile from './layouts/profile';
import ForgotPassword from './layouts/forgotPassword';
import VerifyEmail from './layouts/verifyEmail';
import ResetPassword from './layouts/resetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addUsers" element={<AddUser/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
