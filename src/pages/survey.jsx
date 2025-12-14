import "@/index.css";
import Header from "@/components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Survey() {
  const [drinkFreq, setDrinkFreq] = useState("");
  const [drinkAmount, setDrinkAmount] = useState("");
  const [readiness, setReadiness] = useState("");
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

            {/* ✅ STEP 2 ACTIVE */}
            <div className="new-sidebar-progress have-green step-2">
              <ul>
                <li>Primary Goal</li>
                <li className="active">Survey</li>
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
            <h2>SURVEY</h2>
            <p className="muted">
              Let’s personalize your 30-Day Challenge. Answer a few quick
              questions below.
            </p>

            {/* DRINK FREQUENCY */}
            <section>
              <h3>How often do you drink in a typical week?</h3>
              <div className="pill-group">
                {[
                  "Never",
                  "Once a week",
                  "2–3 times a week",
                  "4–5 times a week",
                  "Almost everyday",
                  "Everyday",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${
                      drinkFreq === item ? "active" : ""
                    }`}
                    onClick={() => setDrinkFreq(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* DRINK AMOUNT */}
            <section>
              <h3>
                When you drink, how many servings do you usually have in one
                sitting?
              </h3>
              <div className="pill-group">
                {[
                  "1 – Just one drink",
                  "2–3 Light drinking",
                  "4–6 Moderate drinking",
                  "7–10 Heavy drinking",
                  "11–15 Very heavy drinking",
                  "Uncontrollable",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${
                      drinkAmount === item ? "active" : ""
                    }`}
                    onClick={() => setDrinkAmount(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* DROPDOWNS */}
            <section>
              <div className="form-grid">
                <div>
                  <label>What usually triggers your drinking?</label>
                  <select>
                    <option>Pick one option</option>
                  </select>
                </div>

                <div>
                  <label>
                    What goal feels right for you regarding alcohol?
                  </label>
                  <select>
                    <option>Pick one option</option>
                  </select>
                </div>
              </div>
            </section>

            {/* TEXTAREA */}
            <section>
              <label>What motivates you to reduce or avoid alcohol?</label>
              <textarea
                className="textarea"
                placeholder="Enter a description"
              />
            </section>

            {/* READINESS */}
            <section>
              <h3>How ready do you feel to make that change?</h3>
              <div className="pill-group">
                {[
                  "5 – Fully ready",
                  "4 – Mostly ready",
                  "3 – Somewhat ready",
                  "2 – Slightly ready",
                  "1 – Not ready",
                ].map((item) => (
                  <button
                    key={item}
                    className={`pill ${
                      readiness === item ? "active" : ""
                    }`}
                    onClick={() => setReadiness(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* MORE QUESTIONS */}
            <section>
              <div className="form-grid">
                <div>
                  <label>Have you tried to reduce or quit before?</label>
                  <select>
                    <option>Pick one option</option>
                  </select>
                </div>

                <div>
                  <label>
                    What area of your life do you most want to strengthen?
                  </label>
                  <select>
                    <option>Pick one option</option>
                  </select>
                </div>

                <div>
                  <label>
                    Which do you want your daily lessons to emphasize most?
                  </label>
                  <select>
                    <option>Pick one option</option>
                  </select>
                </div>
              </div>
            </section>

            {/* CONFIDENCE */}
            <section>
              <h3>
                How confident do you feel about making progress right now?
              </h3>
              <div className="pill-group">
                {[
                  "0 – Not confident at all",
                  "1 – Barely confident",
                  "2 – A little confident",
                  "3 – Moderately confident",
                  "4 – Very confident",
                ].map((item) => (
                  <button key={item} className="pill">
                    {item}
                  </button>
                ))}
              </div>
            </section>

           {/* RELATIONSHIP WITH ALCOHOL */}
                <section>
                <div className="form-grid">
                    <div>
                    <label>
                        Which statement best describes your relationship with alcohol right now?
                    </label>
                    <select>
                        <option>Pick one option</option>
                        <option>I want to completely stop drinking</option>
                        <option>I want to significantly reduce drinking</option>
                        <option>I want better control over my drinking</option>
                        <option>I’m unsure and want guidance</option>
                    </select>
                    </div>
                </div>
                </section>

            {/* ACTIONS */}
            <div className="form-actions">
              <button className="btn-secondary">Clear form</button>
              <button className="btn-primary"
            onClick={() => navigate("/customize-plan")}>
            Next
          </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
