// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUsers from "./features/users/AddUser";

import User from "./features/users/User";

function App() {
  return (
    <>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          Crud operation with redux tool kit now..
        </h1>
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/add-user" element={<AddUsers />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
