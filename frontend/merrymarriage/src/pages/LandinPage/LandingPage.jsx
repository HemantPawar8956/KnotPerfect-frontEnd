import React, { useContext, useState } from "react";
import styles from "./LandingPage.module.css";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [userType, setUserType] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { userLogin } = useContext(AuthContext);

  const handleToggleForm = () => setIsSignUp(!isSignUp);

  const handleUserTypeSelect = (type) => setUserType(type);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (isSignUp && !formData.name.trim()) {
      toast.error("Name is required for sign-up!");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (!formData.password.trim()) {
      toast.error("Password is required!");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isSignUp) {
      try {
        let response = await axios.post(
          "http://localhost:8000/user/userLogin",
          formData
        );
        console.log(response);
      } catch (error) {}
      toast.success("Sign-up successful! Welcome to Knot Perfect!");
    } else {
      try {
        let response = await axios.post(
          "http://localhost:8000/user/userLogin",
          formData
        );
        if (response.status == 200) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
        localStorage.setItem("token", response.data.token);
        userLogin(navigate);
      } catch (error) {
        toast.success(error.message);
      }
    }
  };

  const handleGoogleSignIn = () => {
    // Simulate Google Sign-in process
    toast("Google Sign-In clicked. Implement authentication logic.");
    console.log("Sign in with Google clicked");
  };

  return (
    <div className={styles.backgroundContainer}>
      {/* Toaster for notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className={styles.contentBoxContainer}>
        <div className={styles.contentBox}>
          <h3 className={styles.heading}>
            <span>Guiding</span> <span>you</span> <span>Towards</span>{" "}
            <span>a</span> <span>Dream</span> <span>Wedding</span>
          </h3>
          <h2 className={styles.title}>Knot Perfect</h2>
          <p className={styles.description}>
            We believe that every love story deserves a celebration as unique as
            the couple at its heart. Our dedicated team of expert planners works
            tirelessly to design a seamless and memorable wedding day, tailored
            to reflect your individual style, personality, and vision.
          </p>
          <div className={styles.buttonLanding}>
            <button className={styles.startPlanningBtn}>
              Start Planning Right Now
            </button>
          </div>
        </div>

        <div
          className={`${styles.signupFormBox} ${
            isSignUp ? styles.active : ""
          }`}>
          <h2 className={styles.formTitle}>{isSignUp ? "Sign Up" : "Login"}</h2>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={styles.inputField}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter your email or phone number"
              className={styles.inputField}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={styles.inputField}
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            {isSignUp && (
              <div className={styles.radioContainer}>
                <p>Select Account Type:</p>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    value="user"
                    checked={userType === "user"}
                    onChange={() => handleUserTypeSelect("user")}
                    className={styles.radioInput}
                  />
                  User
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    value="vendor"
                    checked={userType === "vendor"}
                    onChange={() => handleUserTypeSelect("vendor")}
                    className={styles.radioInput}
                  />
                  Vendor
                </label>
              </div>
            )}

            <button type="submit" className={styles.submitBtn}>
              {isSignUp ? "Sign Up" : "Login"}
            </button>

            {/* Google Sign-in button for both Sign Up and Login */}
            <button
              type="button"
              className={styles.googleSignInBtn}
              onClick={handleGoogleSignIn}>
              <img
                src="/assets/google.png"
                alt="Google Logo"
                className={styles.googleLogo}
              />
              {isSignUp ? "Sign Up with Google" : "Login with Google"}
            </button>
          </form>

          <div className={styles.authDescription}>
            <p>
              {isSignUp ? (
                <>
                  Already a member?
                  <strong>
                    <button
                      onClick={handleToggleForm}
                      className={styles.loginLine}>
                      Login here
                    </button>
                  </strong>
                </>
              ) : (
                <>
                  Don't have an account yet?{" "}
                  <strong>
                    <button onClick={handleToggleForm}>Sign up now</button>
                  </strong>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
