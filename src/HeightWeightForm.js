import React, { useState } from "react";
import "./App.css";

const HeightWeightForm = () => {
  const [unitHeight, setUnitHeight] = useState("imperial");
  const [unitWeight, setUnitWeight] = useState("imperial");
  const [height, setHeight] = useState({ feet: "", inches: "", cm: "" });
  const [weight, setWeight] = useState("");
  const [isNoMedicationsChecked, setIsNoMedicationsChecked] = useState(false);
  const handleNoMedicationsChange = (e) => {
    setIsNoMedicationsChecked(e.target.checked);
  };
  const handleUnitHeightChange = (selectedUnit) => {
    setUnitHeight(selectedUnit);
  };

  const handleUnitWeightChange = (selectedUnit) => {
    setUnitWeight(selectedUnit);
  };

  const handleHeightChange = (e, type) => {
    const value = e.target.value;
    setHeight((prevHeight) => ({ ...prevHeight, [type]: value }));
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <h1>Please enter your height and weight</h1>
      <div className="toggle-container">
        <div className="toggle-switch">
          <span className="toggle-label">cm</span>
          <label>
            <input
              type="checkbox"
              checked={unitHeight === "imperial"}
              onChange={() =>
                handleUnitHeightChange(
                  unitHeight === "imperial" ? "metric" : "imperial"
                )
              }
            />
            <span className="toggle-slider"></span>
          </label>
          <span className="toggle-label">Inches</span>
        </div>

        <div className="toggle-switch">
          <span className="toggle-label">kg</span>

          <label>
            <input
              type="checkbox"
              checked={unitWeight === "imperial"}
              onChange={() =>
                handleUnitWeightChange(
                  unitWeight === "imperial" ? "metric" : "imperial"
                )
              }
            />
            <span className="toggle-slider"></span>
          </label>
          <span className="toggle-label">lbs</span>
        </div>
      </div>
      <div className="container-inputs">
        <div className="height-inputs">
          {unitHeight === "imperial" ? (
            <div>
              <input
                type="number"
                placeholder="Feet"
                className="numbers"
                value={height.feet}
                onChange={(e) => handleHeightChange(e, "feet")}
              />
              <input
                type="number"
                placeholder="Inches"
                className="numbers"
                value={height.inches}
                onChange={(e) => handleHeightChange(e, "inches")}
              />
            </div>
          ) : (
            <input
              type="number"
              placeholder="cm"
              value={height.cm}
              className="numbers"
              onChange={(e) => handleHeightChange(e, "cm")}
            />
          )}
        </div>

        <div className="weight-inputs">
          {unitWeight === "imperial" ? (
            <input
              type="number"
              placeholder="lbs"
              value={weight}
              className="numbers"
              onChange={handleWeightChange}
            />
          ) : (
            <input
              type="number"
              placeholder="kg"
              value={weight}
              className="numbers"
              onChange={handleWeightChange}
            />
          )}
        </div>
      </div>
      <hr />
      <h1>Please list all of your current medications</h1>
      <div className="med-container">
        <div className="medication-input">
          <input
            type="text"
            className="inputin"
            placeholder="Enter medication name"
            style={{ display: isNoMedicationsChecked ? "none" : "block" }}
          />
          <label>
            <input
              type="checkbox"
              checked={isNoMedicationsChecked}
              onChange={handleNoMedicationsChange}
            />
            No Medications
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h1>Medical Conditions</h1>
        <h2>Do you have any medical conditions?</h2>
        <div className="yesno-options">
          <button>Yes</button>
          <button>No</button>
        </div>{" "}
      </div>
      <hr />
      <div>
        <h1>Medical Allergies</h1>
        <h2>Do you have any known allergies to medications?</h2>
        <div className="yesno-options">
          <button>Yes</button>
          <button>No</button>
        </div>{" "}
      </div>
      <hr />{" "}
      <div>
        <h1>Do you need any prescriptions renewed?</h1>
        <div className="yesno-options">
          <button>Yes</button>
          <button>No</button>
        </div>{" "}
      </div>
      <hr />{" "}
      <div>
        <h1>Do you need a medical note for work or school?</h1>
        <div className="yesno-options">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
      <hr />
      <div>
        <h1>Are you a regular patient of our medical group?</h1>
        <div className="yesno-options">
          {" "}
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HeightWeightForm;
