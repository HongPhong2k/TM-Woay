import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./component/route/LandingPage";
import AdminPage from "./component/route/Admin";
import LoginPage from "./component/route/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
