import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./layouts/dashboard";
import AddUser from "./layouts/addUsers";
import Login from "./layouts/login";
import Users from "./layouts/users";
import Attendance from "./layouts/attendance";
import AddNominations from "./layouts/addNominations";
import Profile from "./layouts/profile";
import Notifications from "./layouts/notifications";
import Layout from "./auth/Layout";
import Home from "./components/Home";
import PersistLogin from "./auth/PersistLogin";
import RequireAuth from "./auth/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import LinkPage from "./layouts/LinkPage";
import ForgotPassword from "./layouts/forgotPassword";
import VerifyEmail from "./layouts/verifyEmail";
import ResetPassword from "./layouts/resetPassword";
import AttendanceTracking from "./layouts/attendanceTracking";
import TimeTable from "./layouts/timeTable";
import Lecturers from "./layouts/lecturers";
import Staff from "./layouts/staff";
import AttendanceTrackingTable from "./layouts/attendanceTrackingTable";
import Programs from "./layouts/programs";
import Form from "./layouts/form";
import PreviousIntakeDetails from "./layouts/previousIntakeDetails";
import PaymentReport1 from "./layouts/paymentreport1";
import PaymentPrevious from "./layouts/paymentPrevious";
import NominationList from "./layouts/nominationList";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./layouts/dashboard";
import AddUser from "./layouts/addUsers";
import Login from "./layouts/login";
import Users from "./layouts/users";
import Attendance from "./layouts/attendance";
import AddNominations from "./layouts/addNominations";
import Profile from "./layouts/profile";
import Notifications from "./layouts/notifications";
import Layout from "./auth/Layout";
import Home from "./components/Home";
import PersistLogin from "./auth/PersistLogin";
import RequireAuth from "./auth/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import LinkPage from "./layouts/LinkPage";
import ForgotPassword from "./layouts/forgotPassword";
import VerifyEmail from "./layouts/verifyEmail";
import ResetPassword from "./layouts/resetPassword";
import AttendanceTracking from "./layouts/attendanceTracking";
import TimeTable from "./layouts/timeTable";
import Lecturers from "./layouts/lecturers";
import Staff from "./layouts/staff";
import AttendanceTrackingTable from "./layouts/attendanceTrackingTable";
import Programs from "./layouts/programs";
import Form from "./layouts/form";
import PreviousIntakeDetails from "./layouts/previousIntakeDetails";
>>>>>>> Stashed changes
import Payment from "./layouts/payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/timeTable" element={<TimeTable />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentreport1" element={<PaymentReport1 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentreport1" element={<PaymentReport1 />} />
        <Route path="/paymentreport1" element={<PaymentReport1 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentPrevious" element={<PaymentPrevious />} />
        <Route path="/addNominations" element={<AddNominations />} />{" "}
      </Route>

      {/* private */}
      <Route element={<PersistLogin />}>
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "Lecturer",
                "Staff",
                "PCMIT",
                "PCMIS",
                "PCMCS",
                "PCMBA",
              ]}
            />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path='/programs' element={<Programs/>}/> */}
          <Route path="/profile/:userID" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/att" element={<Attendance />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/lecturers" element={<Lecturers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/previousIntakeDetails"
            element={<PreviousIntakeDetails />}
          />
        </Route>
        {/* <Route element={<RequireAuth allowedRoles={["Lecturer"]}/>} >
          

          
          </Route> */}
        <Route element={<RequireAuth allowedRoles={["Staff"]} />}>
          <Route path="/addUsers" element={<AddUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/attendance-page" element={<AttendanceTracking />} />
        </Route>

        <Route
          element={
            <RequireAuth allowedRoles={["PCMIT", "PCMIS", "PCMCS", "PCMBA"]} />
          }
        >
          <Route
            path="/attendance-tracking"
            element={<AttendanceTrackingTable />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
