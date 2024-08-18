import React, { useContext } from "react";
import { AuthContext } from "./authprovider/AuthProvider";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const registerButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const Email = form.email.value;
    const Password = form.password.value;
    console.log(Email, Password, Name);

    createUser(Email, Password)
      .then((result) => {
        toast.success("account registered");
        setUser(result.user);
      })
      .catch((error) => {
        toast.error("Email maybe already used");
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={registerButton} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <Link to={"/login"} className="label-text-alt link link-hover">
                  have an account? <span className="text-red-500">Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
