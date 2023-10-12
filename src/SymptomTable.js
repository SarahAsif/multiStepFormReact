import React, { useState } from "react";
import symptomData from "./symptomData"; // Importing the symptomData array
import "./App.css";

const SymptomTable = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (question, option, isCheckbox) => {
    setSelectedOptions((prevOptions) => {
      if (!isCheckbox) {
        // If it's not a checkbox, clear other options for this question
        const updatedOptions = { ...prevOptions };
        updatedOptions[question] = option;
        return updatedOptions;
      }

      // If it's a checkbox, toggle the option
      return {
        ...prevOptions,
        [question]: {
          ...prevOptions[question],
          [option]: !prevOptions[question]?.[option],
        },
      };
    });
  };

  const renderQuestionWithOptions = (question, options, inputType) => {
    if (!options || options.length === 0) {
      return null; // Return null if options are undefined or empty
    }

    return (
      <div key={question} className="question">
        <div className="question-text">{question}</div>
        <div
          className={`options ${inputType === "yesno" ? "yesno-options" : ""}`}
        >
          {options.map((option, index) => (
            <div key={option} className="option">
              {inputType === "radio" && (
                <label>
                  <input
                    type="radio"
                    name={question}
                    value={option}
                    checked={selectedOptions[question] === option}
                    onChange={() => handleOptionChange(question, option)}
                  />
                  {option}
                </label>
              )}
              {inputType === "yesno" && (
                <button
                  className={
                    selectedOptions[question] === option ? "sarah" : ""
                  }
                  onClick={() => handleOptionChange(question, option)}
                >
                  {option}
                </button>
              )}
              {inputType === "checkbox" && (
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions[question] === option}
                    onChange={() => handleOptionChange(question, option)}
                  />
                  {option}
                </label>
              )}
              {inputType === "input" && index === options.length - 1 && (
                <input
                  type="text"
                  value={selectedOptions[question] || ""}
                  onChange={(e) => handleOptionChange(question, e.target.value)}
                  placeholder="Answer"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="symptom-table">
      <h3>Symptom Options</h3>
      <table>
        <thead>
          <tr>
            <th>Symptom</th>
            <th>No</th>
            <th>Yes - worse lately</th>
            <th>Yes - no change</th>
            <th>Yes - better lately</th>
          </tr>
        </thead>
        <tbody>
          {symptomData.map((symptomObj, index) => (
            <tr key={index}>
              <td>{symptomObj.symptom}</td>
              {symptomObj.options.map((option, optionIndex) => (
                <td key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`radio_${index}`}
                      value={option}
                      onChange={() =>
                        handleOptionChange(symptomObj.symptom, option)
                      }
                    />
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="questions-section">
        <h3>Additional Questions</h3>
        {renderQuestionWithOptions(
          "Have you had any recent falls?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Have you been in the emergency department since your last visit?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Over the past two weeks, have you felt down, depressed or hopeless?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Have you had any recent falls?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Have you been in the emergency department since your last visit?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Over the past two weeks, have you felt down, depressed or hopeless?",
          ["Yes", "No"],
          "yesno"
        )}{" "}
        {renderQuestionWithOptions(
          "Over the past two weeks, have you felt little interest or pleasure in doing things?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Do you need a renewal for your medications?",
          ["Yes", "No"],
          "yesno"
        )}
        {renderQuestionWithOptions(
          "Have you been having any side effects or problems with your medications?",
          ["Yes", "No"],
          "yesno"
        )}
        {/* ... (other questions with appropriate input types) */}
      </div>
      {renderQuestionWithOptions(
        "How often do you remember to take your medications?          ",
        [
          "Yes",
          "always take medications",
          "almost always take medications",
          "usually take medications",
          "often forget to take medications",
          "not taking some of the medications",
        ],
        "radio"
      )}
      {renderQuestionWithOptions(
        "How often do you check your weight?          ",
        ["every day", "most days", "rarely", "never"],
        "radio"
      )}
      {renderQuestionWithOptions(
        "Have you noticed any change in your weight recently?          ",
        ["stayed the same", "increased", "decreased", "Other"],
        "radio"
      )}
      {renderQuestionWithOptions(
        "What sort of physical activity have you had recently?          ",
        [
          "regular vigorous physical activity",
          "walking every day",
          "walking a few times per week plus activities at home",
          "regular activites at home",
          "some walking at home",
          "minimal physical activity",
          "Other:",
        ],
        "checkbox"
      )}
      {renderQuestionWithOptions(
        "How often do you have an alcoholic drink?          ",
        [
          "  never",
          "monthly",
          "2-4 times per month",
          "2-3 times per week",
          "4-6 times per week",
          "every day",
        ],
        "radio"
      )}
      {renderQuestionWithOptions(
        "How would you describe your diet? (check all that apply)          ",
        [
          "balanced",
          "vegetarian",
          "vegan",
          "low carb",
          "low fat",
          "low sodium",
          "average",
          "could be better",
          "Other:",
        ],
        "checkbox"
      )}
      {renderQuestionWithOptions(
        "Have you been able to limit salt in your diet?          ",
        ["Yes", "No"],
        "yesno"
      )}{" "}
      {renderQuestionWithOptions(
        "Please describe any questions/concerns related to your heart",
        ["Answer here"],
        "input"
      )}
    </div>
  );
};

export default SymptomTable;
