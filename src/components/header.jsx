import "@/index.css";
import logo from "@/assets/rewire-logo.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthContext";

export default function Header({ onBack, onLogout }) {
  const navigate = useNavigate();
  const { logoutUser } = useUser();

  const logout = async () => {
    await logoutUser();
    navigate("/");
  };

  return (
    <header className="app-header">
      {/* LEFT: LOGO */}
      <div className="header-left">
        <img src={logo} alt="Rewire & Conquer" className="header-logo" />
      </div>

      {/* RIGHT: BACK + LOGOUT (MAGKATABI) */}
      <div className="header-right">
        <button className="back-btn" onClick={onBack} aria-label="Go back">
          ←
        </button>

        {/* <button
          className="logout-btn"
          onClick={onLogout}
        >
          Logout
        </button> */}

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}
