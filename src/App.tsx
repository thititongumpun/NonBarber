import { useAuth0 } from "@auth0/auth0-react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationGuard from "./Auth/AuthenticationGuard";
import Layout from "./Components/Layout";
import CallbackPage from "./pages/callback-page";
import CouponPage from "./pages/coupon";
import ProfilePage from "./pages/profile-page";
import ReservePage from "./pages/reserve-page";
import SettingPage from "./pages/setting-page";

const HomePage = lazy(() => import("./Components/HomePage"));
const Loading = lazy(() => import("./Components/Loading"));

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />
          <Route
            path="/setting"
            element={<AuthenticationGuard component={SettingPage} />}
          />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/coupon" element={<CouponPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
