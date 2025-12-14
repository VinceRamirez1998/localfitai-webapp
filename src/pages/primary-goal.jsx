import "@/index.css";
import Header from "@/components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrimaryGoal() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [equipment, setEquipment] = useState([]);
  const navigate = useNavigate();

  const toggleEquipment = (item) => {
    setEquipment((prev) =>
      prev.includes(item)
        ? prev.filter((e) => e !== item)
        : [...prev, item]
    );
  };

  return (
    <>
      <Header />

      <div className="account-page">
        {/* SIDEBAR */}
        <aside className="account-sidebar">
          <div className="sidebar-section">
            <h4>ACCOUNT & PERSONAL INFO</h4>
            <ul>
              <li>Basic Information</li>
              <li>Body details</li>
              <li>Body images</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h4>GOALS & CUSTOMIZATION</h4>
            <div className="new-sidebar-progress have-green step-1">
            <ul>
              <li className="active">Primary Goal</li>
              <li>Survey</li>
              <li>Customize Plan</li>
              <li>Fasting Preference</li>
              <li>Choose your Food</li>
            </ul>
          </div>
          </div>


          <div className="sidebar-section">
            <h4>DAILY / WEEKLY TRACKING</h4>
            <ul>
              <li>Workout Forms</li>
            </ul>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="account-content">
          <div className="card">
            <h2>GOALS & CUSTOMIZATION</h2>

            {/* PRIMARY GOAL */}
            <section>
              <h3>Primary Goal</h3>
              <div className="pill-group">
                {[
                  "Fat Loss",
                  "Muscle Gain",
                  "Strength",
                  "Performance",
                  "General Fitness",
                  "Look and Feel Good",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${goal === item ? "active" : ""}`}
                    onClick={() => setGoal(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <h3>Experience Level</h3>
              <div className="pill-group">
                {["Beginner", "Intermediate", "Advanced"].map((item) => (
                  <button
                    key={item}
                    className={`pill ${level === item ? "active" : ""}`}
                    onClick={() => setLevel(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* DURATION */}
            <section>
              <h3>Duration (minutes)</h3>
              <div className="pill-group">
                {["20m", "30m", "45m", "60m", "90m"].map((item) => (
                  <button
                    key={item}
                    className={`pill ${duration === item ? "active" : ""}`}
                    onClick={() => setDuration(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* EQUIPMENT */}
            <section>
              <h3>Available Equipment</h3>
              <div className="pill-group">
                {[
                  "Bodyweight Only",
                  "Full Gym",
                  "Resistance Bands",
                  "Home Gym (Basic)",
                  "Dumbbells",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${
                      equipment.includes(item) ? "active" : ""
                    }`}
                    onClick={() => toggleEquipment(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* NOTES */}
            <section>
              <h3>Specific Request / Injuries</h3>
              <textarea
                className="textarea"
                placeholder="e.g. Focus on glutes, avoid jumping due to knee pain..."
              />
            </section>

            {/* ACTIONS */}
            <div className="form-actions">
              <button className="btn-secondary">Clear form</button>
              <button className="btn-primary"
            onClick={() => navigate("/survey")}>
            Next
          </button>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}
