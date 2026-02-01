import { useState } from "react";
import "../styles/CsvSubInputWrapper.css";
import CsvRegionFormInput from "../components/CsvRegionFormInput";

export default function CsvSubInputWrapper({
  wrapperIdentifierId,
  formName,
  className,
  userCvData,
  setUserCvData,
  activeContainerId,
  handleSetActiveContainerId,
  handleSetActiveFormId,
  icon,
  individualWorkExperience,
  dataCategory,
}) {
  const dataCategoryArrayIndex = userCvData[dataCategory].findIndex((dataCategoryArrayItem) => dataCategoryArrayItem.id === wrapperIdentifierId);

  const [inputValues, setInputValues] = useState(userCvData[dataCategory][dataCategoryArrayIndex]);

  const dataCatagoryDescriptions = userCvData[dataCategory][dataCategoryArrayIndex]["descriptions"].map((categoryDescription, index) => (
    <CsvRegionFormInput
      key={categoryDescription.id}
      inputLabelName={dataCategory === "workExperience" ? "Work Experience Description: " : "Education Description: "}
      userCvData={userCvData}
      setUserCvData={setUserCvData}
      userCvDataPropertyName={"descriptions"}
      inputPlaceholder={"Enter your description"}
      userValue={categoryDescription.description}
      handleSetSubInputWrapperInputValues={setInputValues}
      subInputWrapperInputValue={inputValues["descriptions"][index]?.description}
      newDescriptionArray={userCvData[dataCategory][dataCategoryArrayIndex]["descriptions"]}
      dataCategory={dataCategory}
      dataCategoryArrayIndex={dataCategoryArrayIndex}
      inputIndex={index}
      showTrashIcon={true}
    />
  ));
  const experienceFormFields =
    dataCategory === "workExperience" ? (
      <div>
        <CsvRegionFormInput
          inputLabelName={"Position:"}
          userCvDataPropertyName={"position"}
          inputPlaceholder={"Enter your position"}
          userValue={individualWorkExperience.position}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["position"]}
        />
        <CsvRegionFormInput
          inputLabelName={"Company:"}
          userCvDataPropertyName={"company"}
          inputPlaceholder={"Enter your company"}
          userValue={individualWorkExperience.company}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["company"]}
        />
        <CsvRegionFormInput
          inputLabelName={"Start Date:"}
          userCvDataPropertyName={"startDate"}
          inputPlaceholder={"Enter your start date"}
          userValue={individualWorkExperience.startDate}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["startDate"]}
        />
        <CsvRegionFormInput
          inputLabelName={"End Date:"}
          userCvDataPropertyName={"endDate"}
          inputPlaceholder={"Enter your end date"}
          userValue={individualWorkExperience.startDate}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["endDate"]}
        />
        {dataCatagoryDescriptions}
      </div>
    ) : (
      <div>
        <CsvRegionFormInput
          inputLabelName={"School:"}
          userCvDataPropertyName={"school"}
          inputPlaceholder={"Enter your school"}
          userValue={individualWorkExperience.school}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["school"]}
        />
        <CsvRegionFormInput
          inputLabelName={"Course:"}
          userCvDataPropertyName={"course"}
          inputPlaceholder={"Enter your course"}
          userValue={individualWorkExperience.course}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["course"]}
        />
        <CsvRegionFormInput
          inputLabelName={"Start Date:"}
          userCvDataPropertyName={"startDate"}
          inputPlaceholder={"Enter your start date"}
          userValue={individualWorkExperience.startDate}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["startDate"]}
        />
        <CsvRegionFormInput
          inputLabelName={"End Date:"}
          userCvDataPropertyName={"endDate"}
          inputPlaceholder={"Enter your end date"}
          userValue={individualWorkExperience.startDate}
          handleSetSubInputWrapperInputValues={setInputValues}
          subInputWrapperInputValue={inputValues["endDate"]}
        />
        {dataCatagoryDescriptions}
      </div>
    );

  const handleSubInputsSubmission = () => {
    const subWrapperInputValues = { id: wrapperIdentifierId, ...inputValues };
    let newDataCategoryArray = userCvData[dataCategory];
    newDataCategoryArray[dataCategoryArrayIndex] = subWrapperInputValues;
    setUserCvData((prev) => ({ ...prev, [dataCategory]: newDataCategoryArray }));
    handleSetActiveContainerId("");
  };

  function addDataCategoryEntryDescription(currentDataCategory, currentUserCvData) {
    let dataCategoryPresetObject = { id: crypto.randomUUID(), description: "" };

    let newdDataCategoryArray = [...currentUserCvData[currentDataCategory]];
    newdDataCategoryArray[dataCategoryArrayIndex]["descriptions"].push(dataCategoryPresetObject);

    setUserCvData((prev) => ({ ...prev, [dataCategory]: newdDataCategoryArray }));
  }

  function deleteDataCategoryEntry(currentDataCategory, currentUserCvData) {
    let newdDataCategoryArray = [...currentUserCvData[currentDataCategory]];

    newdDataCategoryArray.splice(dataCategoryArrayIndex, 1);

    setUserCvData((prev) => ({ ...prev, [currentDataCategory]: newdDataCategoryArray }));
  }

  return (
    <div className={`sub-category ${className}`}>
      <div
        onClick={() => {
          activeContainerId !== wrapperIdentifierId ? handleSetActiveContainerId(wrapperIdentifierId) : handleSetActiveContainerId("");
        }}
      >
        <div>
          {icon && <i className={`fa-solid ${icon}`}></i>}
          <h2>{formName !== ", " ? formName : dataCategory === "workExperience" ? "Job, Company" : "School, Course"}</h2>
        </div>
        <div>
          <i className={`fa-solid ${activeContainerId === wrapperIdentifierId ? "fa-caret-up" : "fa-caret-down"}`}></i>
          <i
            onClick={() => {
              deleteDataCategoryEntry(dataCategory, userCvData);
              if (userCvData[dataCategory].length === 1) handleSetActiveFormId("");
            }}
            className="fa-solid fa-trash"
          ></i>
        </div>
      </div>
      {activeContainerId === wrapperIdentifierId && experienceFormFields}
      {activeContainerId === wrapperIdentifierId && (
        <div className="add-description-button-wrapper">
          <button
            type="button"
            onClick={() => {
              addDataCategoryEntryDescription(dataCategory, userCvData);
            }}
          >
            Add Description
          </button>
        </div>
      )}
      {activeContainerId === wrapperIdentifierId && (
        <button type="button" onClick={handleSubInputsSubmission}>
          Confirm Edits
        </button>
      )}
    </div>
  );
}
