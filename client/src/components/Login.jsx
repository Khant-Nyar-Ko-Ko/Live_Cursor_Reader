import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  return (
    <>
      <div className=" flex flex-col justify-center w-[300px]  bg-blue-50 p-4 rounded shadow gap-3">
        <h1 className=" text-xl font-bold">Welcome</h1>
        <p className=" font-serif">What should people call you?</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(username);
          }}
        >
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            className=" bg-slate-50 px-2 py-1 shadow"
          />
          <div className=" flex justify-center">
            <button
              type="submit"
              className="   px-4 py-2 bg-blue-500 text-white rounded mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
