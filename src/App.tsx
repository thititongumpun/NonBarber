import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import AuthenticationGuard from "./Auth/AuthenticationGuard";
import HomePage from "./Components/HomePage";
import Loading from "./Components/Loading";
import { CallbackPage } from "./pages/callback-page";
import ProfilePage from "./pages/profile-page";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
}

export default App;
