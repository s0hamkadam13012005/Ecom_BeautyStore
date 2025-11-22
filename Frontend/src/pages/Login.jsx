import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-[5%]">
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
              />
            </div>

            <button className="w-full bg-[#d55fbb] font-bold text-white p-2 transition-transform duration-300 hover:bg-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 hover:scale-105 ">
              Login
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
