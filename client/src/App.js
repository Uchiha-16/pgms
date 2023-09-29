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
import Form from './layouts/form';


import Layout from './auth/Layout';
import Home from './components/Home';
import PersistLogin from './auth/PersistLogin';
import RequireAuth from './auth/RequireAuth';
import Unauthorized from './components/Unauthorized';
import LinkPage from './layouts/LinkPage';
import ForgotPassword from './layouts/forgotPassword';
import VerifyEmail from './layouts/verifyEmail';
import ResetPassword from './layouts/resetPassword';
import AttendanceTracking from './layouts/attendanceTracking';
import TimeTable from './layouts/timeTable';
import AttendanceTrackingTable from './layouts/attendanceTrackingTable';


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
        <Route path="/timeTable" element={<TimeTable />} />

        {/* private */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Lecturer", "Staff"]}/>} >
            <Route path='home' element={<Home />} />
            <Route path='/nominations' element={<AddNominations />} />
            <Route path='/users' element={<Users/>}/>
            <Route path='/programs' element={<Programs/>}/>
            <Route path='/profile/:userID' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/notifications' element={<Form />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/attendance-tracking' element={<AttendanceTracking />} />

          
            
            


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
