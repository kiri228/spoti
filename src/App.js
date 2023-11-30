import { Password } from "@mui/icons-material";
import "./App.css";
import MainRoutes from "./MainRoutes";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
