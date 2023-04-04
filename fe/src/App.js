import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextsProvider from "./contexts/AuthContexts";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <AuthContextsProvider>
      <Router>
        <Routes>
          {/* Tao route cho user bat buoc vao trang login */}
          <Route exact path="/" Component={Landing} />
          <Route exact path="/login" element={<Auth authRoute="login" />} />
          <Route
            exact
            path="/register"
            element={<Auth authRoute="register" />}
          />
          <Route exact path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </AuthContextsProvider>
  );
}

export default App;
