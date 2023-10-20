import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {

  const {register,updateUser,google} = useContext(AuthContext);
  const navegate = useNavigate();
  const location = useLocation()

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    console.log(name,email,image,password,terms);

    if(password.length < 6){
      return toast.error('6 cheracter')
    }
    else if(!/[A-Z]/.test(password)){
      return toast.error('not uppercase')
    }
    else if(!/[!@#$%^&*]/.test(password)) {
      return toast.error("password should contain atleast one number and one special character");
  }

  register(email,password)
  .then(res=>{
    console.log(res.user);
    updateUser(name,image)
    .then(()=>{
      navegate(location.state ? location.state : '/');
      return toast.success('Register Successfully ')
    })
    .catch(err=>{
      return toast.error(err.message);
    })
  })
  .catch(err=>{
    console.log(err.message);
  })
    
  }

  const handleGoogle = () => {
    google()
    .then(()=>{
      navegate(location.state ? location.state : '/');
      return toast.success('Register wth Google Successfully ')
    })
    .catch(err=>{
      return toast.error(err.message);
    })
  }

    return (
        <div className="px-5 pb-8 bg-[#27223E]">
          <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-lg mx-auto shadow-xl bg-[#1F2937] text-white rounded-lg px-8 py-6">
        <h1 className="text-3xl font-semibold">Create a new Account</h1>
        <button onClick={handleGoogle}
          className="border-[#374151] border-2 flex items-center gap-2 px-4 py-2 rounded-md my-6"
        >
          <FaGoogle />
          Sign Up With Google
        </button>
        <div className="flex gap-5 items-center mb-3">
          <p className="border border-[#374151] w-full"></p>
          <span>or</span>
          <p className="border border-[#374151] w-full"></p>
        </div>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">Enter Your Name</label> <br />
            <input
              required
              placeholder="Enter Your Name"
              className="bg-transparent focus:outline-none border-2 mt-2 rounded-md w-full px-4 border-[#374151] py-2"
              type="text"
              name="name"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="image">Image</label> <br />
            <input
              required
              placeholder="Your Image"
              className="bg-transparent focus:outline-none border-2 mt-2 rounded-md w-full px-4 border-[#374151] py-2"
              type="url"
              name="image"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email">Enter Your Email</label> <br />
            <input
              required
              placeholder="Enter Your Email"
              className="bg-transparent focus:outline-none border-2 mt-2 rounded-md w-full px-4 border-[#374151] py-2"
              type="email"
              name="email"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password">Enter Your Password</label> <br />
            <input
              required
              placeholder="Enter Your Password"
              className="bg-transparent focus:outline-none border-2 mt-2 rounded-md w-full px-4 border-[#374151] py-2"
              type="password"
              name="password"
            />
          </div>
          <div className="my-2">
            <input
              required
              className="mr-2 mt-1 w-5 h-5"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label className="" htmlFor="terms">
              By signing up, you are creating a new account, and you agree to
              our{" "}
              <span className="text-blue-600 font-semibold">Terms of Use</span>{" "}
              and{" "}
              <span className="text-blue-600 font-semibold">
                Privacy Policy.
              </span>
            </label>
          </div>
          <input
            className="text-center w-full bg-[#2563EB] cursor-pointer py-2 font-semibold text-sm my-6 rounded-md "
            type="submit"
            value="Create An Account"
          />
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;