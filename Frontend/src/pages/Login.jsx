import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
//import { useRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      login(dispatch, { email, password });
      
      console.log(user.currentUser)
      setLoading(false);
      navigate("/")
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="flex items-center justify-center mt-[5%]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left part */}
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
          <img
            src="./lotion1.jpg"
            alt="login"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right part */}
        <div className="p-10 w-[500px] ">
          <form className="space-y-5">
            <h1 className="font-bold text-gray-700 text-xl  mb-5">Login</h1>
            <div>
              <label htmlFor="" className="text-gray-600 mb-1 block">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full p-2 rounded-lg border-gray-300 border-2 pr-[200px] focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-1 block">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-2 rounded-lg border-gray-300 border-2 pr-[200px] focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-[#d55fbb] font-bold text-white p-2 transition-transform duration-300 hover:bg-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 hover:scale-105 "
              onClick={handleLogin}
            >
              {loading ? "Loading ..." : "Login"}
            </button>

            <div className="mt-4 text-sm text-gray-600">
              <span>
                Don't have an account?
                <Link
                  to="/create-account"
                  className="text-red-500 hover:underline ml-1"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// 2️⃣ Why useSelector Exists at All

// React components cannot directly access Redux memory.
// They live in two different worlds.

// So Redux gives you:

// 🔌 useSelector = the cable that connects your React component to Redux memory.

// This line:

// const user = useSelector((state) => state.user);


// means:

// “Take the live Redux state, pull out state.user, and give it to this component.”

// Now your component can do:

// user.currentUser
// user.error
// user.isFetching


// Without useSelector, your component is blind. 🕶️
// It has no idea what Redux contains.

// 🧠 3️⃣ Why You CAN’T Just Import the Slice Directly

// You might think:

// “Why not just import userSlice or userReducer and read from that?”

// Because:

// userSlice = logic

// userReducer = function

// Redux store = actual live changing data

// Only the store holds real values.
// And useSelector is the only legal way for a component to read those values.

// Importing the slice won’t give you:

// Logged-in user

// Error state

// Loading state

// It only gives you rules, not results.