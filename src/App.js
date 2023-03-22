import RoutsApp from "./routes";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <RoutsApp />
    </div>
  );
}

export default App;
