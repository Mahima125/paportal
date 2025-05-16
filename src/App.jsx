import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Notification from "./components/notification/notification";
import TripleLogin from "./components/login/TripleLogin";
import HodLogin from "./components/login/HodLogin";
import Login from "./components/login/LoginPage.jsx";
import Approval_page from "./components/admin/approval_page";
import Feedback from "./components/forms/feedbackForm";
import MessageBoard from "./components/message/messageBoard";
import Profile from "./components/profile/profile.jsx";
import Home from "./components/home/home";
import SignUpPage from "./components/login/SignUpPage";
import ScreenOne from "./components/onBoardings/screenOne.jsx";
import ScreenTwo from "./components/onBoardings/screenTwo.jsx";
import ScreenThree from "./components/onBoardings/screenThree.jsx";
import ScreenFour from "./components/onBoardings/screenFour.jsx";
import AdminDashboard from "./components/admin/adminDashboard/adminDashboard.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/protected/ProtectedRoute.jsx";
import EditProfile from "./components/editprofile/editprofile.jsx";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
            

          
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/triplelogin" element={<TripleLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hodlogin" element={<HodLogin />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/onboarding1" element={<ScreenOne />} />
          <Route path="/onboarding2" element={<ScreenTwo />} />
          <Route path="/onboarding3" element={<ScreenThree />} />
          <Route path="/onboarding4" element={<ScreenFour />} />
          <Route path="/approval" element={<Approval_page />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/messages" element={<MessageBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/:id/editprofile" element={<EditProfile />} /> 

        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
