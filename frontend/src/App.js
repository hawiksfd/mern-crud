import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList.jsx";
import AddUser from "./components/AddUser.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<UserList /> />
        <Route path="/add" element=<AddUser /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
