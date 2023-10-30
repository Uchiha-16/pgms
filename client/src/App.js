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
import Lecturers from './layouts/lecturers';
import Staff from './layouts/staff';
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
        <Route path='/dashboard' element={<Dashboard />} />


        {/* private */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Lecturer", "Staff"]}/>} >
            <Route path='home' element={<Home />} />
            <Route path='/nominations' element={<AddNominations />} />
            <Route path='/programs' element={<Programs/>}/>
            <Route path='/profile/:userID' element={<Profile />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/lecturers' element={<Lecturers/>}/>
            <Route path='/programs' element={<Programs />} />
            <Route path='/attendance-tracking' element={<AttendanceTrackingTable />} />

          
            
            


          </Route>
          <Route element={<RequireAuth allowedRoles={["Staff"]}/>} >
            <Route path='/addUsers' element={<AddUser/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/staff' element={<Staff/>}/>
          </Route>
        </Route>


      </Route>
    </Routes>
  );
}

export default App;
