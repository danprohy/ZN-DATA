import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextsProvider from "./contexts/AuthContexts";
import Dashboard from "./views/Dashboard";
import ProtectRoute from "./route/ProtectRoute";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <AuthContextsProvider>
      <Router>
        <Routes>
          {/* Tao route cho user bat buoc vao trang login */}
          <Route path="/" element={<Landing />} />
          <Route path="/login/*" element={<Auth authRoute="login" />} />
          <Route path="/register/*" element={<Auth authRoute="register" />} />
          <Route path="/dashboard" element={<ProtectRoute>
            <NavBar />
            <Dashboard />
          </ProtectRoute>} >
          </Route>
        </Routes>
      </Router>
    </AuthContextsProvider>
  );
}

export default App;
