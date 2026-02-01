import { useState } from "react";

import CsvRegionFormWrapper from "../components/CsvRegionFormWrapper";
import "../styles/EnterDetailsSection.css";

export default function EnterDetailsSection({ userCvData, setUserCvData, isHighlighted }) {
  const [activeFormId, setActiveFormId] = useState("");
  let clearExample = {
    personalDetails: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phone: "",
      email: "",
      website: "",
      location: "",
    },
    profileSummary: {
      profileSummary: "",
    },
    workExperience: [
      {
        id: crypto.randomUUID(),
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        descriptions: [{ id: crypto.randomUUID(), description: "" }],
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        school: "",
        course: "",
        startDate: "",
        endDate: "",
        descriptions: [
          { id: crypto.randomUUID(), description: "" },
          { id: crypto.randomUUID(), description: "" },
        ],
      },
    ],
    skills: [{ id: crypto.randomUUID(), description: "" }],
    tools: [{ id: crypto.randomUUID(), description: "" }],
  };

  let exampleDataOne = {
    personalDetails: {
      firstName: "Linton",
      lastName: "Robinson",
      jobTitle: "Web Developer",
      phone: "947-209-3477",
      email: "joshuajrobinson384@gmail.com",
      website: "ljviolinist.com",
      location: "Upperville, VA",
    },
    profileSummary: {
      profileSummary:
        "Full-stack JavaScript developer with a background in music, applying structure and precision to building clean, scalable SaaS applications with React and modern web technologies.",
    },
    workExperience: [
      {
        id: crypto.randomUUID(),
        position: "Videographer",
        company: "Sphinx Organization",
        startDate: "June 2018",
        endDate: "August 2023",
        descriptions: [
          { id: crypto.randomUUID(), description: "Taking videos of activities" },
          { id: crypto.randomUUID(), description: "Editing videos taken" },
        ],
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        school: "Berklee",
        course: "Contemporary Writing and Production",
        startDate: "September 2016",
        endDate: "June 2021",
        descriptions: [
          { id: crypto.randomUUID(), description: "Going to the stu" },
          { id: crypto.randomUUID(), description: "Caf shows" },
        ],
      },
    ],
    skills: [{ id: crypto.randomUUID(), description: "Violin Proficiency" }],
    tools: [{ id: crypto.randomUUID(), description: "Flesch Scales😉" }],
  };

  const handleSetActiveFormId = (formId) => {
    if (formId && userCvData[formId].length === 0) {
      addToEmptyCategory(formId);
    } else {
      setActiveFormId(formId);
    }
  };

  const addToEmptyCategory = (dataCategory) => {
    let newDataCategoryArray = [];

    const defaultCategoryObjects = {
      workExperience: {
        id: crypto.randomUUID(),
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        descriptions: [{ id: crypto.randomUUID(), description: "" }],
      },
      education: {
        id: crypto.randomUUID(),
        school: "",
        course: "",
        startDate: "",
        endDate: "",
        descriptions: [{ id: crypto.randomUUID(), description: "" }],
      },
      skills: {
        id: crypto.randomUUID(),
        description: "",
      },
      tools: {
        id: crypto.randomUUID(),
        description: "my first tool",
      },
    };
    newDataCategoryArray.push(structuredClone(defaultCategoryObjects[dataCategory]));
    setActiveFormId(dataCategory);
    setUserCvData((prev) => ({ ...prev, [dataCategory]: newDataCategoryArray }));
  };
  return (
    <section className={`enter-details-section ${isHighlighted && "highlight"}`}>
      <div className="enter-details-top-wrapper">
        <button
          type="button"
          onClick={() => {
            setUserCvData(clearExample);
            handleSetActiveFormId("");
          }}
        >
          Clear CV
        </button>
        <button
          type="button"
          onClick={() => {
            setUserCvData(exampleDataOne);
            handleSetActiveFormId("");
          }}
        >
          Load Example
        </button>
      </div>
      {isHighlighted && <span>Click a box below to show entry fields</span>}
      <CsvRegionFormWrapper userCvData={userCvData} setUserCvData={setUserCvData} handleSetActiveFormId={handleSetActiveFormId} activeFormId={activeFormId} />
    </section>
  );
}
