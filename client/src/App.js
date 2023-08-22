import './App.css';
import { Routes, Route } from 'react-router';
import Dashboard from './layouts/dashboard';
import AddUser from './layouts/addUsers';
import Login from './layouts/login';
import Users from './layouts/users';
import Programs from './layouts/programs';
import AddNominations from './layouts/addNominations';
import Profile from './layouts/profile';
import Notifications from './layouts/notifications';
import timeTable from './layouts/timeTable';
import Hello from './layouts/timeTable';


import Layout from './auth/Layout';
import Home from './components/Home';
import PersistLogin from './auth/PersistLogin';
import RequireAuth from './auth/RequireAuth';
import Unauthorized from './components/Unauthorized';
import LinkPage from './layouts/LinkPage';
import ForgotPassword from './layouts/forgotPassword';
import VerifyEmail from './layouts/verifyEmail';
import ResetPassword from './layouts/resetPassword';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path='login' element={<Login />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />
        <Route path='/' element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* private */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Lecturer", "Staff"]}/>} >
            <Route path='home' element={<Home />} />
            <Route path='/nominations' element={<AddNominations />} />
            <Route path='/users' element={<Users/>}/>
            <Route path='/programs' element={<Programs/>}/>
            <Route path='/profile/:userID' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/programs' element={<Programs />} />

            {/* <Route path='/timetable' element={<timeTable />} /> */}
            <Route path='/timetable' element={<Hello />} />
            


          </Route>
          <Route element={<RequireAuth allowedRoles={["Staff"]}/>} >
            <Route path='/addUsers' element={<AddUser/>}/>
          </Route>
        </Route>


      </Route>
    </Routes>
  );
}

export default App;
