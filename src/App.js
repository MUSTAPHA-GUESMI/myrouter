import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/profile/:userId' element={<Profile name='nadia' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
