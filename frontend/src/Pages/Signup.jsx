import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    console.log("onsubmit func called!");
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("https://zeerodha-dashboard.vercel.app/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5 pt-3 col-6">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control form-control-lg"
            placeholder="Enter your email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="username" class="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            class="form-control form-control-lg"
            placeholder="Enter your username"
            id="exampleInputPassword1"
            onChange={handleOnChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            class="form-control form-control-lg"
            placeholder="Enter your password"
            id="exampleInputPassword1"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" class="btn btn-primary" style={{width:"15%"}}>
          Submit
        </button>
        <span className="mx-4">
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
};

export default Signup;
