import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextsProvider from "./contexts/AuthContexts";
import Home from "./views/Home";
import ProtectRoute from "./route/ProtectRoute";
import NavBar from "./components/layout/NavBar";
import About from "./components/layout/About";

function App() {
  return (
    <AuthContextsProvider>
      <Router>
        <Routes>
          {/* Tao route cho user bat buoc vao trang login */}
          <Route path="/" element={<Landing />} />
          <Route path="/login/*" element={<Auth authRoute="login" />} />
          <Route path="/register/*" element={<Auth authRoute="register" />} />
          <Route path="/home" element={<ProtectRoute>
            <NavBar />
            <Home />
          </ProtectRoute>} >
          </Route>
          <Route path="/about" element={<ProtectRoute>
            <NavBar />
            <About />
          </ProtectRoute>} >
          </Route>
        </Routes>
      </Router>
    </AuthContextsProvider>
  );
}

export default App;
