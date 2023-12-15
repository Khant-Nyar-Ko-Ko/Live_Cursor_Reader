/* eslint-disable no-unused-vars */
import { useState } from "react";
import Login from "./components/Login";
import Home from "./Home";

const App = () => {
  const [username, setUsername] = useState("");
  return username ? (
    <div className="flex justify-center items-center h-screen">
      <Home username={username} />
    </div>
  ) : (
    <div className=" flex justify-center items-center h-screen">
      <Login onSubmit={setUsername} />
    </div>
  );
};

export default App;
