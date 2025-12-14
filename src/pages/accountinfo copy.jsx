import "@/index.css";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../context/AuthContext";
import { addUser } from "../api/v1";
import { profileSchema } from "@/schema/profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AccountInfo() {
  const navigate = useNavigate();

  const { user } = useUser();

  const [heightUnit, setHeightUnit] = useState("in");
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [waistUnit, setWaistUnit] = useState("in");
  const [targetWeightUnit, setTargetWeightUnit] = useState("lbs");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [weightTarget, setWeightTarget] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [bodyImages, setBodyImages] = useState({
    front: null,
    side: null,
    back: null,
  });

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      password: "",
      agree: false,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // Collect all the form data into one object
    const formData = {
      birthdate,
      bodyFat,
      email,
      hasLessonSurvey: true,
      hasMealSurvey: true,
      height,
      heightUnit,
      name,
      phone,
      sex: gender,
      status: "in-active",
      waist,
      waistUnit,
      weight,
      weightTarget,
      weightUnit: targetWeightUnit,
      // frontImage: bodyImages.front, // { front: File, side: File, back: File }
    };

    await addUser(formData);

    console.log("Form Data:", formData);

    // const data = new FormData();
    // data.append("birthdate", name);
    // data.append("bodyFat", name);
    // data.append("email", name);
    // data.append("hasLessonSurvey", true);
    // data.append("hasMealSurvey", true);
    // data.append("height", name);
    // data.append("heightUnit", name);
    // data.append("name", name);
    // data.append("phone", name);
    // data.append("sex", name);
    // data.append("status", "in-active");
    // data.append("waist", name);
    // data.append("waistUnit", name);
    // data.append("weight", name);
    // data.append("weightTarget", name);
    // data.append("weightUnit", name);

    // data.append("frontImage", bodyImages.front);
    // data.append("sideImage", bodyImages.side);
    // data.append("backImage", bodyImages.back);

    // console.log(data);

    navigate("/primary-goal");
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e, position) => {
    const file = e.target.files[0];
    setBodyImages((prev) => ({
      ...prev,
      [position]: file,
    }));
  };

  return (
    <>
      <Header />

      <div className="account-page">
        {/* SIDEBAR */}
        <aside className="account-sidebar">
          <div className="sidebar-section">
            <h4>ACCOUNT & PERSONAL INFO</h4>
            <div className="sidebar-progress completed">
              <ul>
                <li className="active">Basic Information</li>
                <li className="active">Body details</li>
                <li className="active">Body images</li>
              </ul>
            </div>
          </div>

          <div className="sidebar-section completed ">
            <h4>GOALS & CUSTOMIZATION</h4>
            <ul>
              <li>Primary Goal</li>
              <li>Survey</li>
              <li>Customize Plan</li>
              <li>Fasting Preference</li>
              <li>Choose your Food</li>
            </ul>
          </div>

          <div className="sidebar-section completed">
            <h4>DAILY / WEEKLY TRACKING</h4>
            <ul>
              <li>Workout Forms</li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="account-content">
          <form onSubmit={form.handleSubmit(onSubmit)} className="card">
            <h2>BASIC INFORMATION</h2>

            {/* PERSONAL INFO */}
            <section>
              <h3>Personal Information</h3>
              <p className="muted">
                Customize your experience by telling us more about yourself.
              </p>

              <div className="form-grid">
                <div>
                  <label>Full name</label>
                  <input
                    value={user?.name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={true}
                  />
                </div>

                <div>
                  <label>Gender</label>
                  <select onChange={(e) => setGender(e.target.value)}>
                    <option>Pick one option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label>Birthday</label>
                  <input
                    onChange={(e) => setBirthdate(e.target.value)}
                    type="date"
                    placeholder="MM/DD/YY"
                  />
                </div>

                <div>
                  <label>Phone number</label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+00"
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    value={user?.email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    disabled={true}
                  />
                </div>
              </div>
            </section>

            {/* BODY DETAILS */}
            <section>
              <h2>Body Information</h2>
              <p className="muted">
                Customize your experience by telling us more about yourself.
              </p>

              <div className="form-grid">
                {/* HEIGHT */}
                <div>
                  <label>Height</label>
                  <div className="input-with-unit">
                    <input
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="00"
                    />
                    <button
                      type="button"
                      className="unit-btn"
                      onClick={() =>
                        setHeightUnit(heightUnit === "in" ? "cm" : "in")
                      }
                    >
                      {heightUnit === "in" ? "Inch" : "CM"}
                    </button>
                  </div>
                </div>

                {/* WEIGHT */}
                <div>
                  <label>Weight</label>
                  <div className="input-with-unit">
                    <input
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="00"
                    />
                    <button
                      type="button"
                      className="unit-btn"
                      onClick={() =>
                        setWeightUnit(weightUnit === "lbs" ? "kg" : "lbs")
                      }
                    >
                      {weightUnit === "lbs" ? "Lbs" : "Kg"}
                    </button>
                  </div>
                </div>

                {/* WAIST */}
                <div>
                  <label>Waist Measurement</label>
                  <div className="input-with-unit">
                    <input
                      onChange={(e) => setWaist(e.target.value)}
                      placeholder="00"
                    />
                    <button
                      type="button"
                      className="unit-btn"
                      onClick={() =>
                        setWaistUnit(waistUnit === "in" ? "cm" : "in")
                      }
                    >
                      {waistUnit === "in" ? "Inch" : "CM"}
                    </button>
                  </div>
                </div>

                {/* TARGET WEIGHT */}
                <div>
                  <label>Target weight</label>
                  <div className="input-with-unit">
                    <input
                      onChange={(e) => setWeightTarget(e.target.value)}
                      placeholder="00"
                    />
                    <button
                      type="button"
                      className="unit-btn"
                      onClick={() =>
                        setTargetWeightUnit(
                          targetWeightUnit === "lbs" ? "kg" : "lbs"
                        )
                      }
                    >
                      {targetWeightUnit === "lbs" ? "Lbs" : "Kg"}
                    </button>
                  </div>
                </div>

                {/* BODY FAT */}
                <div>
                  <label>Body fat percentage %</label>
                  <div className="input-with-unit">
                    <input
                      onChange={(e) => setBodyFat(e.target.value)}
                      placeholder="00"
                    />
                    <span className="unit-static">%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* BODY IMAGES */}
            <section>
              <h2>Body Images</h2>
              <p className="muted">Upload your front, side, back body image</p>

              <div className="form-grid">
                <div>
                  <label>Front body</label>
                  <div className="file-input">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, "front")}
                    />
                  </div>
                </div>

                <div>
                  <label>Side body</label>
                  <div className="file-input">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, "side")}
                    />
                  </div>
                </div>

                <div>
                  <label>Back body</label>
                  <div className="file-input">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, "back")}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ACTIONS */}
            <div className="form-actions">
              <button className="btn-secondary">Reset</button>
              <button className="btn-primary" onClick={handleSubmit}>
                Next
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
