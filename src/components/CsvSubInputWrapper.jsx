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
  icon,
  individualWorkExperience,
  dataCategory,
}) {
  const dataCategoryArrayIndex = userCvData[dataCategory].findIndex((dataCategoryArrayItem) => dataCategoryArrayItem.id === wrapperIdentifierId);

  const [inputValues, setInputValues] = useState(userCvData[dataCategory][dataCategoryArrayIndex]);

  console.log("inputValuesComp", inputValues["company"]);
  console.log("user on render!", userCvData);
  const handleSubInputsSubmission = (e) => {
    const subWrapperInputValues = { id: wrapperIdentifierId, ...inputValues };

    let newDataCategoryArray = userCvData[dataCategory];
    newDataCategoryArray[dataCategoryArrayIndex] = subWrapperInputValues;

    setUserCvData((prev) => ({ ...prev, [dataCategory]: newDataCategoryArray }));
    handleSetActiveContainerId("");
  };

  return (
    <div className={`detail-category ${className}`}>
      <div
        onClick={() => {
          activeContainerId !== wrapperIdentifierId ? handleSetActiveContainerId(wrapperIdentifierId) : handleSetActiveContainerId("");
        }}
      >
        <div>
          {icon && <i className={`fa-solid ${icon}`}></i>}
          <h2>{formName}</h2>
        </div>
        <div>
          <i className="fa-solid fa-caret-down"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
      {activeContainerId === wrapperIdentifierId && (
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
