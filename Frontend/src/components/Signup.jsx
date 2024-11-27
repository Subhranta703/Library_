import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[400px]">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </Link>

        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Fullname */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold py-2 rounded-md shadow-md hover:scale-105 transition-transform">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={() =>
              document.getElementById("my_modal_3").showModal()
            }
          >
            Log In
          </span>
        </p>
        <Login />
      </div>
    </div>
  );
}

export default Signup;
