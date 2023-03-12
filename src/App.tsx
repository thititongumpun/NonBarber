import { useAuth0 } from "@auth0/auth0-react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationGuard from "./Auth/AuthenticationGuard";
// import HomePage from "./Components/HomePage";
// import Loading from "./Components/Loading";
// import { CallbackPage } from "./pages/callback-page";
// import ProfilePage from "./pages/profile-page";

const HomePage = lazy(() => import("./Components/HomePage"));
const ProfilePage = lazy(() => import("./pages/profile-page"));
const CallbackPage = lazy(() => import("./pages/callback-page"));
const Loading = lazy(() => import("./Components/Loading"));

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
}

export default App;
