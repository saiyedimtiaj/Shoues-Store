import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { login, google, dark } = useContext(AuthContext);
  const navegate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email, password)
      .then(() => {
        navegate(location.state ? location.state : '/');
        return toast.success('login Successfully ')
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  const handleGoogle = () => {
    google()
      .then(() => {
        navegate(location.state ? location.state : '/');
        return toast.success('login Successfully ')
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  return (
    <section className={`py-8 flex items-center justify-center`}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`${dark ? 'bg-[#1F2937]' : 'bg-[#EEEDEB]'} flex rounded-2xl shadow-lg max-w-3xl p-5 items-center`}>
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className={`font-bold text-2xl ${dark ? 'text-white' : 'text-black'}`}>Login</h2>
          <p className={`text-xs mt-4 ${dark ? 'text-white' : 'text-black'}`}>
            If you are already a member, easily log in
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              className={`p-2 mt-8 ${dark ? 'bg-[#374151]' : 'bg-white' } px-4 rounded-xl border`}
              type="email"
              name="email"
              placeholder="Email"
            />
            <div>
              <input
                className={`p-2 rounded-xl ${dark ? 'bg-[#374151]' : 'bg-white' } px-4 border w-full`}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <input
              value="Login"
              type="submit"
              className="bg-blue-600 cursor-pointer rounded-xl text-white py-2 hover:scale-105 duration-300"
            />
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button
            onClick={handleGoogle}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-black"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>

          <div className={`mt-3 text-xs flex justify-between items-center ${dark ? 'text-white' : 'text-black'}`}>
            <p>Dont have an account?</p>
            <Link to="/register">
              {" "}
              <button className="py-2 px-5 text-black bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
