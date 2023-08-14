import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Dashboard from './layouts/dashboard';
import AddUser from './layouts/addUsers';
import Login from './layouts/login';
import Users from './layouts/users';
import AddNominations from './layouts/addNominations';
import Profile from './layouts/profile';
import Notifications from './layouts/notifications';

import Layout from './auth/Layout';
import Home from './components/Home';
import PersistLogin from './auth/PersistLogin';
import RequireAuth from './auth/RequireAuth';
import Unauthorized from './components/Unauthorized';
import LinkPage from './layouts/LinkPage';


function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/dashboard" element={<Dashboard/>} />
    //       <Route path="/addUsers" element={<AddUser/>} />
    //       <Route path="/nominations" element={<AddNominations/>} />
    //       <Route path="/users" element={<Users/>} />
    //       <Route path="/" element={<Login/>} />
    //       <Route path="/profile" element={<Profile/>} />
    //       <Route path="/notifications" element={<Notifications/>} />
    //     </Routes>
    //   </div>
    // </Router>

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path='login' element={<Login />} /> */}
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />
        <Route path='/' element={<Login />} />

        {/* private */}
        {/* <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Lecturer", "Staff"]}/>} > */}
            <Route path='home' element={<Home />} />
            <Route path='/nominations' element={<AddNominations />} />
            <Route path='/users' element={<Users/>}/>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/notifications' element={<Notifications />} />
            


          {/* </Route>
          <Route element={<RequireAuth allowedRoles={["Staff"]}/>} > */}
            <Route path='/addUsers' element={<AddUser/>}/>
          {/* </Route>
        </Route> */}


      </Route>
    </Routes>
  );
}

export default App;
