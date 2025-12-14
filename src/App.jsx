import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Onboarding from "./pages/onboarding";
import AccountInfo from "./pages/accountinfo";
import PrimaryGoal from "./pages/primary-goal";
import Survey from "./pages/survey";
import CustomizePlan from "./pages/customize-plan";
import ChooseYourFood from "./pages/choose-your-food";
import WorkoutForms from "./pages/workoutforms";
import LandingWithLoader from "./pages/LandingWithLoader";
import { useUser } from "./context/AuthContext";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingWithLoader />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="account-info" element={<AccountInfo />} />
        <Route path="primary-goal" element={<PrimaryGoal />} />
        <Route path="survey" element={<Survey />} />
        <Route path="customize-plan" element={<CustomizePlan />} />
        <Route path="choose-your-food" element={<ChooseYourFood />} />
        <Route path="workout-forms" element={<WorkoutForms />} />
      </Route>
      {/* 
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/account-info" element={<AccountInfo />} />
      <Route path="/primary-goal" element={<PrimaryGoal />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/customize-plan" element={<CustomizePlan />} />
      <Route path="/choose-your-food" element={<ChooseYourFood />} />
      <Route path="/workout-forms" element={<WorkoutForms />} /> */}
    </Routes>
  );
}

function ProtectedRoute({ children }) {
  const { user, loading } = useUser();

  if (loading) return <LandingWithLoader />;

  if (!user) return <Navigate to="/" replace />;

  return <Outlet />; // renders nested routes
}
