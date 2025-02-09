import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Riddle from "./Riddle";


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/riddle" element={<Riddle />} />
             
          </Routes>
      </Router>
  );
};

export default App;