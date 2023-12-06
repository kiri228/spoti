import { Password } from "@mui/icons-material";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

import CreatePostContext from "./contexts/CreatePostContext";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <CreatePostContext />
    </div>
  );
}

export default App;
