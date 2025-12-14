import "@/index.css";
import Header from "@/components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CustomizePlan() {
  const [goal, setGoal] = useState("");
  const [carbs, setCarbs] = useState("");
  const [foodQuality, setFoodQuality] = useState("");
  const [fasting, setFasting] = useState("");
  const [meals, setMeals] = useState("");
  const navigate = useNavigate();
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

            <div className="new-sidebar-progress have-green step-3">
              <ul>
                <li>Primary Goal</li>
                <li>Survey</li>
                <li className="active">Customize Plan</li>
                <li className="active">Fasting Preference</li>
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

            {/* CUSTOMIZE PLAN */}
            <section>
              <h3>Customize Your Plan</h3>

              <div className="form-grid">
                <div>
                  <label>Goal</label>
                  <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                    <option value="">Pick one option</option>
                    <option>Fat Loss</option>
                    <option>Muscle Gain</option>
                    <option>Strength</option>
                    <option>Performance</option>
                  </select>
                </div>
              </div>
            </section>

            {/* CARBS */}
            <section>
              <h3>How low do you want to keep your daily carbs?</h3>
              <div className="pill-group">
                {[
                  "Very Low (0–30 g/day)",
                  "Low (30–70 g/day)",
                  "Moderate (70–100 g/day)",
                  "Not Sure – Recommend for Me",
                  "No Restriction / Whole Foods Approach",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${carbs === item ? "active" : ""}`}
                    onClick={() => setCarbs(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* FOOD QUALITY */}
            <section>
              <h3>
                How important is food quality to you when building your grocery
                list and meal plan?
              </h3>

              <div className="form-grid">
                <div>
                  <select
                    value={foodQuality}
                    onChange={(e) => setFoodQuality(e.target.value)}
                  >
                    <option value="">Pick one option</option>
                    <option>Very important</option>
                    <option>Somewhat important</option>
                    <option>Not important</option>
                  </select>
                </div>
              </div>
            </section>

            {/* FASTING */}
            <section>
              <h3>Fasting Preference</h3>

              <h4>How long do you want to keep your daily carbs?</h4>
              <div className="pill-group">
                {[
                  "18:6 (Recommended)",
                  "16:8",
                  "20:4",
                  "OMAD (One Meal a Day)",
                  "No fasting",
                  "I'm not sure (Choose for me)",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${fasting === item ? "active" : ""}`}
                    onClick={() => setFasting(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {fasting && (
                <>
                  <p style={{ marginTop: "12px", fontWeight: 600 }}>
                    You Choose {fasting}
                  </p>

                  <h4>How many meals do you want per day?</h4>
                  <div className="pill-group">
                    {[
                      "1 Meal – 2 hours eating window",
                      "2 Meals – 4 hours eating window",
                      "2–3 Meals – 8 hours eating window",
                    ].map((item) => (
                      <button
                        key={item}
                        className={`pill ${meals === item ? "active" : ""}`}
                        onClick={() => setMeals(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </section>

            {/* ACTIONS */}
            <div className="form-actions">
            
              <button className="btn-secondary">Clear form</button>
              <button className="btn-primary"
            onClick={() => navigate("/choose-your-food")}>
            Next
          </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
