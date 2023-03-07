import { Route, Routes } from "react-router-dom";
import CTA from "./Components/CTA";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HomePage from "./Components/HomePage";
import { CallbackPage } from "./pages/callback-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <HomePage /> */}
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
}

export default App;
