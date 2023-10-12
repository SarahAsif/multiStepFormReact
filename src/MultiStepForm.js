import React, { useState } from "react";
import SymptomTable from "./SymptomTable";
import HeightWeightForm from "./HeightWeightForm";

const categoryOptions = [
  "Having symptoms / a specific issue (e.g., cough, pain, difficulty sleeping)",
  "Birth Control",
  "Sick Note",
  "Prescriptions and Renewals",
  "Skin Issues",
  "Mental Health Issues",
  "A chronic/ongoing diagnosed medical condition (e.g., diabetes)",
  "A service/procedure (e.g., Review test results, Travel Health)",
  "STI Testing",
  "Request for testing (e.g., Ultrasound, X-Ray)",
  "Workplace Injury",
];
const symptomOptions = {
  "Having symptoms / a specific issue (e.g., cough, pain, difficulty sleeping)":
    [
      "Cough, congestion, sore throat, or fever",
      "Upper Body (above the waist)",
      "Lower Body (below the waist)",
      "Skin Issues",
      "Mental Health Issues",
      "Joint Pain, Muscle Pain, Inflammation",
      "Sleeping Issues",
      "Hair Loss",
      "Erectile Dysfunction",
    ],
  "Skin Issues": [
    "Acne (first visit)",
    "Acne (ongoing)",
    "Rash",
    "Warts",
    "Other skin issue",
  ],
  "A service/procedure (e.g., Review test results, Travel Health)": [
    "Allergy Testing",
    "Birth Control",
    "Flu Shot",
    "Pap Smear",
    "Physical Exam",
    "STI Screening",
    "Travel Health Consult",
    "Tuberculosis (TB) Test",
    "Review Test Results",
    "Wart Removal",
    "MVA History (Practitioner)",
    "Other",
  ],
  "A chronic/ongoing diagnosed medical condition (e.g., diabetes)": [
    "Acne",
    "Arthritis",
    "Asthma",
    "CHF (Congestive Heart Failure)",
    "Cholesterol Issues",
    "COPD (Chronic Obstructive Pulmonary Disease)",
    "Diabetes",
    "High Blood Pressure (Hypertension)",
    "Erectile Dysfunction",
    "Hair Loss",
    "Other",
  ],
};

const MultiStepForm = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedOption: "",
    additionalInfo: "",
  });

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form submitted:", formData);
  };

  const isFormValid = () => {
    // Basic validation example (you can implement your own validation logic)
    return formData.name && formData.email && formData.selectedOption;
  };
  const handleCategoryChange = (selectedCategory) => {
    setFormData({
      ...formData,
      selectedOption: selectedCategory,
    });
  };

  return (
    <div className="multi-page-form">
      <form onSubmit={handleSubmit}>
        <h2>Page {page}</h2>
        {page === 1 && (
          <div>
            <label>
              What is the primary reason for your visit? (e.g. sore throat,
              prescription renewal, etc.)
            </label>
            <input
              type="text"
              name="name"
              className="inputin"
              placeholder="Answer here"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label>Select a category:</label>
            {categoryOptions.map((option, index) => (
              <div key={index} className="radio-label">
                <label>
                  <input
                    type="radio"
                    name="selectedOption"
                    value={option}
                    onChange={handleInputChange}
                  />
                  {option}
                </label>
              </div>
            ))}

            {formData.selectedOption &&
              symptomOptions[formData.selectedOption] && (
                <>
                  <hr /> {/* Divider line */}
                  <h3>Symptom Options for {formData.selectedOption}</h3>
                  <div className="radio-label">
                    {symptomOptions[formData.selectedOption].map(
                      (option, index) => (
                        <label key={index}>
                          <input
                            type="radio"
                            name="selectedSymptom"
                            value={option}
                            onChange={handleInputChange}
                          />
                          {option}
                        </label>
                      )
                    )}
                  </div>
                </>
              )}
          </div>
        )}

        {page === 1 && <button onClick={handleNextPage}>Next</button>}
        {page === 2 && <SymptomTable />}
        {page === 2 && (
          <>
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </>
        )}
        {page === 3 && (
          <>
            <HeightWeightForm />
            <div>
              {" "}
              <button onClick={handlePreviousPage}>Previous</button>
              <button type="submit" disabled={!isFormValid()}>
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
export default MultiStepForm;
