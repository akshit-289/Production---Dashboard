import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./screens/Home"
import UIElements from "./screens/UIElements";
import FormElements from "./screens/FormElements";
import Documentation from "./screens/Documentation";
import Charts from "./screens/Charts";
import Icons from "./screens/Icons";
import UserPages from "./screens/UserPages";
import Tables from "./screens/Tables";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/uielements" exact element={<UIElements />} />
          <Route path="/formelements" exact element={<FormElements />} />
          <Route path="/documentation" exact element={<Documentation />} />
          <Route path="/charts" exact element={<Charts />} />
          <Route path="/icons" exact element={<Icons />} />
          <Route path="/tables" exact element={<Tables />} />
          <Route path="/userpages" exact element={<UserPages />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
