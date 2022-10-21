import "./App.css";
import { AuthProvider } from "react-auth-kit";
import { RequireAuth } from "react-auth-kit";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
      
      <AuthProvider
        authType={"localstorage"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path={"/"}
            element={
              <RequireAuth loginPath={"/login"}>
                <Navbar />
                <Home/>
              </RequireAuth>
            }
          />
        </Routes>
        </AuthProvider>
      
    </div>
  );
}

export default App;
