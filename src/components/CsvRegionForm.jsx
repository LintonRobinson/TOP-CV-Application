import "../styles/CsvRegionForm.css";

import { useState } from "react";
import CsvSubInputWrapper from "./CsvSubInputWrapper";
import CsvRegionFormInput from "./CsvRegionFormInput";

export default function CsvRegionForm({ dataCategory, formName, className, children, setUserCvData, activeFormId, handleSetActiveFormId, icon, userCvData }) {
  let showConfirmEditsButton;
  if (dataCategory === activeFormId) {
    showConfirmEditsButton = true;
  }

  let showExperienceContainers = false;
  let experienceButtonText;
  if (activeFormId === className && dataCategory === "workExperience") {
    showExperienceContainers = true;
    experienceButtonText = "Add Work Experience";
  } else if (activeFormId === className && dataCategory === "education") {
    showExperienceContainers = true;
    experienceButtonText = "Add Education";
  } else if (activeFormId === className && dataCategory === "skills") {
    showExperienceContainers = true;
    experienceButtonText = "Add Skill";
  } else if (activeFormId === className && dataCategory === "tools") {
    showExperienceContainers = true;
    experienceButtonText = "Add Tool";
  }

  const [activeContainerId, setActiveContainerId] = useState("");
  let experienceContainers;

  const handleSetActiveContainerId = (containerId) => {
    setActiveContainerId(containerId);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (dataCategory !== "tools" && dataCategory !== "skills") {
      const formInputs = Object.fromEntries(new FormData(e.currentTarget));

      setUserCvData((prev) => ({ ...prev, [dataCategory]: formInputs }));
      handleSetActiveFormId("");
    } else {
      let formInputs = Object.values(Object.fromEntries(new FormData(e.currentTarget)));
      let arrayOfFormInputs = [];
      userCvData[dataCategory].forEach((dataCategoryEntry, index) => {
        arrayOfFormInputs.push({ id: dataCategoryEntry.id, description: formInputs[index] });
      });
      setUserCvData((prev) => ({ ...prev, [dataCategory]: arrayOfFormInputs }));
      handleSetActiveFormId("");
    }
  };

  function addDataCategoryEntry(currentDataCategory) {
    let dataCategoryPresetObject;

    switch (currentDataCategory) {
      case "workExperience":
        dataCategoryPresetObject = {
          id: crypto.randomUUID(),
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          descriptions: [],
        };
        break;
      case "education":
        dataCategoryPresetObject = {
          id: crypto.randomUUID(),
          school: "",
          course: "",
          startDate: "",
          endDate: "",
          descriptions: [],
        };
        break;
      case "skills":
        dataCategoryPresetObject = {
          id: crypto.randomUUID(),
          description: "",
        };
        break;

      case "tools":
        dataCategoryPresetObject = {
          id: crypto.randomUUID(),
          description: "",
        };
    }

    console.log("dataCategoryPresetObject", dataCategoryPresetObject);
    let newdDataCategoryArray = [...userCvData[currentDataCategory]];
    newdDataCategoryArray.push(dataCategoryPresetObject);

    setUserCvData((prev) => ({ ...prev, [currentDataCategory]: newdDataCategoryArray }));
  }

  switch (dataCategory) {
    case "workExperience":
      showConfirmEditsButton = false;
      experienceContainers = userCvData.workExperience.map((individualWorkExperience) => {
        return (
          <CsvSubInputWrapper
            key={individualWorkExperience.id}
            individualWorkExperience={individualWorkExperience}
            wrapperIdentifierId={individualWorkExperience.id}
            formName={`${individualWorkExperience.position}, ${individualWorkExperience.company}`}
            className={"workExperienceDescription"}
            userCvData={userCvData}
            setUserCvData={setUserCvData}
            activeContainerId={activeContainerId}
            handleSetActiveContainerId={handleSetActiveContainerId}
            dataCategory={dataCategory}
            handleSetActiveFormId={handleSetActiveFormId}
          />
        );
      });
      break;
    case "education":
      showConfirmEditsButton = false;
      experienceContainers = userCvData.education.map((individualEducation) => {
        return (
          <CsvSubInputWrapper
            key={individualEducation.id}
            individualWorkExperience={individualEducation}
            wrapperIdentifierId={individualEducation.id}
            formName={`${individualEducation.school}, ${individualEducation.course}`}
            className={"educationDescription"}
            userCvData={userCvData}
            setUserCvData={setUserCvData}
            activeContainerId={activeContainerId}
            handleSetActiveContainerId={handleSetActiveContainerId}
            handleSetActiveFormId={handleSetActiveFormId}
            dataCategory={dataCategory}
          />
        );
      });
      break;

    case "skills":
      experienceContainers = userCvData.skills.map((individualSkill, index) => {
        return (
          <CsvRegionFormInput
            key={individualSkill.id}
            inputLabelName={"Skill:"}
            userCvDataPropertyName={`description-${index}`}
            inputPlaceholder={"Enter a skill"}
            userValue={individualSkill.description}
            showTrashIcon={true}
            inputIndex={index}
            dataCategory={dataCategory}
            userCvData={userCvData}
            setUserCvData={setUserCvData}
            handleSetActiveFormId={handleSetActiveFormId}
          />
        );
      });
      break;
    case "tools":
      experienceContainers = userCvData.tools.map((individualTool, index) => {
        return (
          <CsvRegionFormInput
            key={individualTool.id}
            inputLabelName={"Tool:"}
            userCvDataPropertyName={`description-${index}`}
            inputPlaceholder={"Enter a tool"}
            userValue={individualTool.description}
            showTrashIcon={true}
            inputIndex={index}
            dataCategory={dataCategory}
            userCvData={userCvData}
            setUserCvData={setUserCvData}
            handleSetActiveFormId={handleSetActiveFormId}
          />
        );
      });
      break;
  }

  return (
    <form action="#" className={`detail-category ${className}`} onSubmit={handleFormSubmission}>
      <div
        onClick={() => {
          activeFormId !== className ? handleSetActiveFormId(className) : handleSetActiveFormId("");
        }}
      >
        <div>
          {icon && <i className={`fa-solid ${icon}`}></i>}
          <h2>{formName}</h2>
        </div>
        <div>
          {showConfirmEditsButton && (
            <button type="submit" onClick={(e) => e.stopPropagation()}>
              Confirm Edits
            </button>
          )}
          <i className={`fa-solid ${activeFormId === className ? "fa-caret-up" : "fa-caret-down"}`}></i>
        </div>
      </div>
      {showExperienceContainers && <div className="experience-container"> {experienceContainers}</div>}
      {!showExperienceContainers && activeFormId === className && <div> {children}</div>}
      {showExperienceContainers && (
        <button type="button" onClick={() => addDataCategoryEntry(dataCategory)}>
          <i className="fa-solid fa-circle-plus"></i> {experienceButtonText}
        </button>
      )}
    </form>
  );
}
