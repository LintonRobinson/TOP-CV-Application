import { useState } from "react";

import CsvRegionFormInput from "../components/CsvRegionFormInput";
import CsvRegionFormTextArea from "../components/CsvRegionFormTextArea";
import CsvRegionForm from "../components/CsvRegionForm.jsx";
import CsvSubInputWrapper from "./CsvSubInputWrapper.jsx";
import "../styles/CsvRegionFormWrapper.css";

export default function CsvRegionFormWrapper({ userCvData, setUserCvData }) {
  const [activeFormId, setActiveFormId] = useState("");

  const handleSetActiveFormId = (formId) => {
    setActiveFormId(formId);
  };

  return (
    <div className="enter-details-bottom-wrapper">
      <CsvRegionForm
        dataCategory={"personalDetails"}
        formName={"Personal Details"}
        className={"personalDetails"}
        setUserCvData={setUserCvData}
        activeFormId={activeFormId}
        handleSetActiveFormId={handleSetActiveFormId}
        icon={"fa-user"}
      >
        <CsvRegionFormInput inputLabelName={"First Name:"} userCvDataPropertyName={"firstName"} inputPlaceholder={"Enter your first name"} userValue={userCvData.personalDetails.firstName} />
        <CsvRegionFormInput inputLabelName={"Last Name:"} userCvDataPropertyName={"lastName"} inputPlaceholder={"Enter your last name"} userValue={userCvData.personalDetails.lastName} />
        <CsvRegionFormInput inputLabelName={"Job Title:"} userCvDataPropertyName={"jobTitle"} inputPlaceholder={"Enter your job title"} userValue={userCvData.personalDetails.jobTitle} />
        <CsvRegionFormInput inputLabelName={"Phone:"} userCvDataPropertyName={"phone"} inputPlaceholder={"Enter your phone number"} userValue={userCvData.personalDetails.phone} />
        <CsvRegionFormInput inputLabelName={"Email"} userCvDataPropertyName={"email"} inputPlaceholder={"Enter your email"} userValue={userCvData.personalDetails.email} />
        <CsvRegionFormInput inputLabelName={"Website"} userCvDataPropertyName={"website"} inputPlaceholder={"Enter your website"} userValue={userCvData.personalDetails.website} />
        <CsvRegionFormInput inputLabelName={"Location"} userCvDataPropertyName={"location"} inputPlaceholder={"Enter your location"} userValue={userCvData.profileSummary.location} />
      </CsvRegionForm>
      <CsvRegionForm
        dataCategory={"profileSummary"}
        formName={"Profile Summary"}
        className={"profileSummary"}
        setUserCvData={setUserCvData}
        activeFormId={activeFormId}
        handleSetActiveFormId={handleSetActiveFormId}
        icon={"fa-pencil"}
      >
        <div>
          <span>Highlight your professional experience, skills, and accomplishments in a brief, impactful statement.</span>
          <CsvRegionFormTextArea
            textareaLabelName={"Profile Summary:"}
            userCvDataPropertyName={"profileSummary"}
            inputPlaceholder={"Enter your profile summary"}
            userValue={userCvData.profileSummary.profileSummary}
          />
        </div>
      </CsvRegionForm>
      <CsvRegionForm
        dataCategory={"workExperience"}
        formName={"Work Experience"}
        className={"workExperience"}
        setUserCvData={setUserCvData}
        activeFormId={activeFormId}
        handleSetActiveFormId={handleSetActiveFormId}
        icon={"fa-briefcase"}
        userCvData={userCvData}
      />
    </div>
  );
}
