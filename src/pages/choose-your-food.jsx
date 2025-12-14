import "@/index.css";
import Header from "@/components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FOOD_SECTIONS = [
  {
    key: "animalProtein",
    title: "Animal Protein",
    items: [
      "Ribeye",
      "New York strip",
      "Sirloin",
      "Filet mignon",
      "Flank steak",
      "Skirt steak",
      "Ground beef",
      "Brisket",
      "Chuck roast",
      "Chicken",
      "Pork",
      "Turkey",
    ],
  },
  {
    key: "seafood",
    title: "Seafood",
    items: [
      "Salmon",
      "Shrimp",
      "Tuna",
      "Cod or white fish",
      "Sardines",
      "Other shellfish",
    ],
  },
  {
    key: "fatsOil",
    title: "Fats & Oil",
    items: [
      "Olive oil",
      "Avocado oil",
      "Coconut oil",
      "Butter or ghee",
      "Tallow or lard",
    ],
  },
  {
    key: "condiments",
    title: "Condiments and Seasonings",
    items: [
      "Sea salt",
      "Black pepper",
      "Garlic powder",
      "Onion powder",
      "Smoked paprika",
      "Chili flakes",
      "Mustard",
      "Mayonnaise",
      "Hot sauce",
      "Vinegar",
      "Lemon or lime juice",
      "Fresh herbs",
    ],
  },
  {
    key: "vegetables",
    title: "Vegetables (Low carbs)",
    items: [
      "Broccoli",
      "Cauliflower",
      "Zucchini",
      "Cucumber",
      "Asparagus",
      "Green beans",
      "Bell peppers",
      "Cabbage",
      "Brussels sprouts",
      "Mushrooms",
    ],
  },
  {
    key: "fruits",
    title: "Fruits",
    items: ["Berries", "Avocado", "Small portions of citrus"],
  },
  {
    key: "addons",
    title: "Add-ons",
    items: [
      "Nuts and Seeds",
      "Greek yogurt",
      "Cheese",
      "Milk",
      "Protein powders",
    ],
  },
];

export default function ChooseYourFood() {
  const [selected, setSelected] = useState({});
  const [flavorProfile, setFlavorProfile] = useState("");
  const [snackChoice, setSnackChoice] = useState("");
  const [varietyChoice, setVarietyChoice] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const toggleItem = (groupKey, item) => {
    setSelected((prev) => {
      const group = prev[groupKey] || [];
      return {
        ...prev,
        [groupKey]: group.includes(item)
          ? group.filter((i) => i !== item)
          : [...group, item],
      };
    });
  };

  const clearForm = () => {
    setSelected({});
    setFlavorProfile("");
    setSnackChoice("");
    setVarietyChoice("");
    setNotes("");
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
            <div className="new-sidebar-progress have-green step-5">
              <ul>
                <li>Primary Goal</li>
                <li>Survey</li>
                <li>Customize Plan</li>
                <li>Fasting Preference</li>
                <li className="active">Choose your Food</li>
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
            <h2>CHOOSE YOUR FOODS</h2>

            {FOOD_SECTIONS.map((section) => (
              <section key={section.key} className="food-group-card">
                <h3>{section.title}</h3>

                <div className="food-grid">
                  {section.items.map((item) => (
                    <label key={item} className="food-option">
                      <input
                        type="checkbox"
                        checked={selected[section.key]?.includes(item) || false}
                        onChange={() => toggleItem(section.key, item)}
                      />
                      <span className="custom-check"></span>
                      <span className="food-label">{item}</span>
                    </label>
                  ))}
                </div>
              </section>
            ))}

            <section className="food-extra">
              <h3>Flavor Profile Preference</h3>
              <select
                className="food-select"
                value={flavorProfile}
                onChange={(e) => setFlavorProfile(e.target.value)}
              >
                <option value="">Select a flavor profile...</option>
                <option value="mild">Simple / Mild</option>
                <option value="savory">Savory</option>
                <option value="spicy">Spicy</option>
                <option value="fresh">Fresh / Herby</option>
              </select>
            </section>

            <section className="food-extra">
              <h3>Snack Between Meals</h3>
              <div className="pill-group">
                <button
                  className={`pill ${snackChoice === "yes" ? "active" : ""}`}
                  onClick={() => setSnackChoice("yes")}
                >
                  Yes – include snacks
                </button>
                <button
                  className={`pill ${snackChoice === "no" ? "active" : ""}`}
                  onClick={() => setSnackChoice("no")}
                >
                  No – meals only
                </button>
              </div>
            </section>

            <section className="food-extra">
              <h3>Meal Plan Variety</h3>
              <div className="pill-group">
                <button
                  className={`pill ${
                    varietyChoice === "simple" ? "active" : ""
                  }`}
                  onClick={() => setVarietyChoice("simple")}
                >
                  Keep it Simple
                </button>
                <button
                  className={`pill ${
                    varietyChoice === "variety" ? "active" : ""
                  }`}
                  onClick={() => setVarietyChoice("variety")}
                >
                  Add Variety
                </button>
              </div>
            </section>

            <section className="food-extra">
              <h3>Food Preferences / Allergies</h3>
              <textarea
                className="textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g., love steak, dislike fish, allergic to shellfish. I also enjoy a daily smoothie with whey protein and organic peanut butter."
              />
            </section>

            <div className="form-actions">
           
              <button className="btn-secondary" onClick={clearForm}>
                Clear form
              </button>
              <button className="btn-primary"
            onClick={() => navigate("/workout-forms")}>
            Next
          </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
