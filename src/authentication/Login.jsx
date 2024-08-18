import React, { useContext } from "react";
import { AuthContext } from "./authprovider/AuthProvider";
import { Result } from "postcss";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const {loginUser, setUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const loginButton = (e) =>{
        e.preventDefault()
        const form = e.target
        const Email = form.email.value;
        const Password = form.password.value;
        console.log(Email, Password);
        loginUser(Email, Password)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
            toast.success("login success")
            navigate("/")
        })
        .catch(error => console.log(error))

        
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
       
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={loginButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <Link to={"/register"} className="label-text-alt link link-hover">
                    haven't account? <span className="text-purple-500">Register</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
          <a onClick={()=>googleLogin(navigate)} className="btn rounded-b-full">Login with google</a>
          

            </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
