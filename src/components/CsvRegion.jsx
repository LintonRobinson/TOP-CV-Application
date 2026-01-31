import "../styles/CsvRegion.css";
export default function CsvRegion({ children, className = "", userCvData, dataCategory, renderExperience = false }) {
  let experienceElements;

  if (renderExperience) {
    console.log("userCvData.dataCategory in re", userCvData);
    console.log("userCvData.dataCategory in r", userCvData.dataCategory);
    experienceElements = userCvData[dataCategory].map((dataCategoryEntry) => (
      <div key={dataCategoryEntry.id} className="experience-wrapper">
        <div>
          <h5>{dataCategory === "workExperience" ? dataCategoryEntry.company : dataCategoryEntry.school}</h5>
          <span>{`${dataCategoryEntry.startDate} - ${dataCategoryEntry.endDate}`}</span>
        </div>
        <div>
          <div>
            <h6>{dataCategory === "workExperience" ? dataCategoryEntry.position : dataCategoryEntry.course}</h6>
          </div>
          <ul>
            {dataCategoryEntry.descriptions.map((dataCategoryDescription) => (
              <li key={dataCategoryDescription.id}>{dataCategoryDescription.description}</li>
            ))}
          </ul>
        </div>
      </div>
    ));
  }
  return (
    <div className={!renderExperience ? `bottom-section-wrapper ${className}` : "experience-outer-wrapper"}>
      {renderExperience && <h4>{dataCategory === "workExperience" ? "Work Experience" : "Education"}</h4>}
      {!className && children}
      {renderExperience && experienceElements}
    </div>
  );
}
