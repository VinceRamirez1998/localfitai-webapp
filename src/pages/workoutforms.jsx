import "@/index.css";
import Header from "@/components/header";
import { useState } from "react";

export default function WorkoutForms() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [equipment, setEquipment] = useState([]);
  const [injuries, setInjuries] = useState("");
  const [primaryTemplate, setPrimaryTemplate] = useState("");
  const [secondaryTemplate, setSecondaryTemplate] = useState("");
  const [aiVideos, setAiVideos] = useState(false);

  const toggleEquipment = (item) => {
    setEquipment((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const clearForm = () => {
    setGoal("");
    setLevel("");
    setDuration("");
    setEquipment([]);
    setInjuries("");
    setPrimaryTemplate("");
    setSecondaryTemplate("");
    setAiVideos(false);
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
            <ul>
              <li>Primary Goal</li>
              <li>Survey</li>
              <li>Customize Plan</li>
              <li>Fasting Preference</li>
              <li>Choose your Food</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h4>DAILY / WEEKLY TRACKING</h4>

            {/* ✅ GREEN PROGRESS BAR: ONLY WORKOUT FORMS */}
            <div className="new-sidebar-progress have-green step-1">
              <ul>
                <li className="active">Workout Forms</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="account-content">
          <div className="card">
            <h2>DAILY WEEKLY TRACKING</h2>
            <h3 className="workout-page-subtitle">Workout Forms</h3>

            {/* BLOCK 1: PRIMARY HEALTH GOAL */}
            <div className="workout-block">
              <p className="workout-question">What is your primary health goal?</p>

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
                    type="button"
                    className={`pill ${goal === item ? "active" : ""}`}
                    onClick={() => setGoal(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* BLOCK 2: LEVEL + DURATION */}
            <div className="workout-block workout-two-col">
              <div>
                <p className="workout-question">Experience Level</p>
                <div className="pill-group">
                  {["Beginner", "Intermediate", "Advanced"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${level === item ? "active" : ""}`}
                      onClick={() => setLevel(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="workout-question">Duration (minutes)</p>
                <div className="pill-group">
                  {["20m", "30m", "45m", "60m", "90m"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${duration === item ? "active" : ""}`}
                      onClick={() => setDuration(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOCK 3: LOGISTICS / EQUIPMENT */}
            <div className="workout-block">
              <p className="workout-section-label">Logistics</p>
              <p className="workout-question">Available Equipment</p>

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
                    type="button"
                    className={`pill ${equipment.includes(item) ? "active" : ""}`}
                    onClick={() => toggleEquipment(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* BLOCK 4: REQUEST / INJURIES */}
            <div className="workout-block">
              <p className="workout-section-label">Specific Request / Injuries</p>
              <textarea
                className="textarea"
                value={injuries}
                onChange={(e) => setInjuries(e.target.value)}
                placeholder="e.g., Focus on glutes; No jumping due to bad knees; I want to run a marathon..."
              />
            </div>

            {/* BLOCK 5: WORKOUT STRUCTURE */}
            <div className="workout-block">
              <p className="workout-section-label">Workout Structure</p>

              <div className="workout-template-grid">
                <div>
                  <label className="workout-label">Primary Template*</label>
                  <select
                    className="workout-select"
                    value={primaryTemplate}
                    onChange={(e) => setPrimaryTemplate(e.target.value)}
                  >
                    <option value="">Custom (No Template)</option>
                    <option value="fullbody">Full Body</option>
                    <option value="upperlower">Upper / Lower</option>
                    <option value="pushpulllegs">Push / Pull / Legs</option>
                  </select>
                </div>

                <div>
                  <label className="workout-label">Secondary Template (optional)</label>
                  <select
                    className="workout-select"
                    value={secondaryTemplate}
                    onChange={(e) => setSecondaryTemplate(e.target.value)}
                  >
                    <option value="">Custom (No Template)</option>
                    <option value="hypertrophy">Hypertrophy Focus</option>
                    <option value="strength">Strength Focus</option>
                    <option value="conditioning">Conditioning Focus</option>
                  </select>
                </div>
              </div>
            </div>

            {/* BLOCK 6: VIDEO SETTINGS */}
            <div className="workout-block">
              <p className="workout-section-label">Video Settings</p>

              <div className="toggle-row">
                <div className="toggle-text">
                  <p className="toggle-title">Generate AI coach videos</p>
                  <p className="muted toggle-sub">
                    Enable for personalized videos, or disable for faster YouTube tutorial
                  </p>
                </div>

                <label className="switch" aria-label="Toggle AI coach videos">
                  <input
                    type="checkbox"
                    checked={aiVideos}
                    onChange={(e) => setAiVideos(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="form-actions">
              <button className="btn-primary" type="button">
                Save
              </button>

              <button className="btn-outline" type="button" onClick={clearForm}>
                Clear form
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
