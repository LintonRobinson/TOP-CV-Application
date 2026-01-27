import "../styles/CsvRegionForm.css";

import { useState } from "react";
import CsvSubInputWrapper from "./CsvSubInputWrapper";

export default function CsvRegionForm({ dataCategory, formName, className, children, setUserCvData, activeFormId, handleSetActiveFormId, icon, userCvData }) {
  let showConfirmEditsButton;

  if (dataCategory === activeFormId) {
    showConfirmEditsButton = true;
  }

  const [activeContainerId, setActiveContainerId] = useState("");
  let workExperienceContainers;

  const handleSetActiveContainerId = (containerId) => {
    setActiveContainerId(containerId);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const formInputs = Object.fromEntries(new FormData(e.currentTarget));

    setUserCvData((prev) => ({ ...prev, [dataCategory]: formInputs }));
    handleSetActiveFormId("");
  };

  const addSubContainerWrapperInput = "";

  switch (dataCategory) {
    case "workExperience":
      showConfirmEditsButton = false;
      workExperienceContainers = userCvData.workExperience.map((individualWorkExperience) => {
        return (
          <CsvSubInputWrapper
            key={individualWorkExperience.id}
            individualWorkExperience={individualWorkExperience}
            wrapperIdentifierId={individualWorkExperience.id}
            formName={"Job position, Company"}
            className={"workExperienceDescription"}
            userCvData={userCvData}
            setUserCvData={setUserCvData}
            activeContainerId={activeContainerId}
            handleSetActiveContainerId={handleSetActiveContainerId}
            dataCategory={dataCategory}
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
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      {activeFormId === className && dataCategory === "workExperience" && <div> {workExperienceContainers}</div>}
      {activeFormId === className && dataCategory !== "workExperience" && <div> {children}</div>}
      {dataCategory === "workExperience" && activeFormId === className && (
        <button>
          <i className="fa-solid fa-circle-plus"></i> Add Work Experience
        </button>
      )}
    </form>
  );
}
