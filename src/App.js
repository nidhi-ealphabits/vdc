import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Room from "./components/Room/Room";
import Analyties from "./components/Analyties/Analyties";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Room />}></Route> */}
      <Route path="/" element={<Main />}></Route>
      {/* <Route path="/" element={<Analyties />}></Route> */}
      {/* <Route path="/analyties" element={<Analyties />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
