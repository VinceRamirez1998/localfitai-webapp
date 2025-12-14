import "@/index.css";
import bgVideo from "@/assets/bg-animation.mp4";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/rewire-logo.png";
import { useState } from "react";
import { login } from "../api/v1";
import { useUser } from "../context/AuthContext";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login-schema";
import { AlertCircleIcon, Eye, EyeOff, Icon, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Login() {
  const navigate = useNavigate();

  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      agree: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      await login(email, password);
      await loginUser(data);

      navigate("/onboarding");
    } catch (err) {
      let message = "An error occurred. Please try again.";
      if (err.code) {
        switch (err.code) {
          case "auth/invalid-email":
            message = "Invalid email address.";
            break;
          case "auth/user-disabled":
            message = "This account has been disabled.";
            break;
          case "auth/user-not-found":
            message = "Invalid credentials. Please try again.";
            break;
          case "auth/wrong-password":
          case "auth/invalid-credential":
            message = "Invalid credentials. Please try again.";
            break;
          case "auth/too-many-requests":
            message = "Too many login attempts. Please try again later.";
            break;
        }
      }

      form.setError("root", { message: message });
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
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <form onSubmit={form.handleSubmit(onSubmit)} className="form-container">
          <div className="mobile-hero">
            <img src={logo} alt="Rewire & Conquer" className="mobile-logo" />
          </div>

          {/* FORM */}
          <h2>Get Started Now</h2>
          <p className="subtitle">Please login to your account to continue</p>

          <label>Email</label>
          <Controller
            control={form.control}
            name="email"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <div className="-mt-[15px]">
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          />

          <div className="password-row">
            <label>Password</label>
            <span className="forgot">Forgot your password?</span>
          </div>
          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className="mb-5">
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" color="black" />
                    ) : (
                      <Eye className="h-5 w-5" color="black" />
                    )}
                  </button>
                </div>
                <div className="-mt-[15px]">
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="agree"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className="mb-10">
                <div className="terms">
                  <input
                    type="checkbox"
                    id="terms"
                    value={value || false}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  <label htmlFor="terms">
                    I agree to the <span>Terms & Policy</span>
                  </label>
                </div>
                <div className="-mt-[25px]">
                  {form.formState.errors.agree && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.agree.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          />

          <button
            type="submit"
            className="login-btn"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <div className="flex space-x-2 justify-center">
                <Loader2 className="h-5 w-5 animate-spin" />
                <p>Please wait ...</p>
              </div>
            ) : (
              "Login"
            )}
          </button>

          {form.formState.errors.root && (
            <Alert className="mt-3" variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Error Message!</AlertTitle>
              <AlertDescription>
                <p>{form.formState.errors.root.message}</p>
              </AlertDescription>
            </Alert>
          )}

          <p className="signup">
            I don’t have an account?{" "}
            <span onClick={() => navigate("/signup")}>Signup</span>
          </p>
        </form>
      </div>
    </div>
  );
}
