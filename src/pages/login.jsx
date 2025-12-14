import "@/index.css";
import bgVideo from "@/assets/bg-animation.mp4";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/rewire-logo.png";
import { useState } from "react";
import { login } from "../api/v1";
import { useUser } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      console.log(data);
      await login(email, password);
      await loginUser(data);
      navigate("/onboarding");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT SIDE */}
      <div className="login-left">
        <video
          className="bg-video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="left-overlay">
          <img src={logo} alt="Rewire & Conquer" className="logo" />

          <h1>
            Train Smarter.
            <br />
            Not Harder.
          </h1>

          <p>
            Start with a simple survey and unlock a fitness journey built around
            you — with a partner that guides you every step. 
            (testing)
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="form-container">
          <div className="mobile-hero">
            <img src={logo} alt="Rewire & Conquer" className="mobile-logo" />
          </div>

          {/* FORM */}
          <h2>Get Started Now</h2>
          <p className="subtitle">Please login to your account to continue</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-row">
            <label>Password</label>
            <span className="forgot">Forgot your password?</span>
          </div>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span>Terms & Policy</span>
            </label>
          </div>

          <button className="login-btn" onClick={onSubmit}>
            Login
          </button>

          <p className="signup">
            I don’t have an account?{" "}
            <span onClick={() => navigate("/signup")}>Signup</span>
          </p>
        </div>
      </div>
    </div>
  );
}
