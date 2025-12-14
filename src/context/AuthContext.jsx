import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserByEmail,
  logout,
  subscribeUserByEmail,
  updateUserById,
} from "../api/v1";

export const AuthContext = createContext({
  user: null,
  loginUser: async () => {},
  logoutUser: async () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const data = JSON.parse(savedUser);
        const userData = await getUserByEmail(data.email);
        setUser(userData);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  // Subscribe to user updates
  useEffect(() => {
    if (!user) return;

    const unsubscribe = subscribeUserByEmail(user.email, (data) => {
      setUser(data);
    });

    return () => unsubscribe(); // cleanup
  }, [user]);

  const loginUser = async (data) => {
    try {
      const userData = await getUserByEmail(data.email);
      if (userData) {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));

        if (userData.status === "in-active") {
          console.log("Generating AI content for new user...");
          // await aiGenerate(userData);
          await updateUserById(userData.id, { status: "active" });
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logoutUser = async () => {
    setUser(null);
    await logout();
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);
