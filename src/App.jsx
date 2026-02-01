import { useState } from "react";
import { useRef } from "react";
import EnterDetailsSection from "./components/EnterDetailsSection";
import CsvRegion from "./components/CsvRegion";
import gitHubIcon from "./assets/github-logo-white.png";

import "./styles/App.css";
let dummyTextExample = {
  personalDetails: {
    firstName: "Generate a CV!",
    lastName: "",
    jobTitle: "Example Job Title",
    phone: "Example Phone",
    email: "Example Email",
    website: "Example Website",
    location: "Example Location",
  },
  profileSummary: {
    profileSummary: "Example of a profile summary goes here.",
  },
  workExperience: [
    {
      id: crypto.randomUUID(),
      position: "Example Position",
      company: "Example Company",
      startDate: "Start Date",
      endDate: "End Date",
      descriptions: [
        { id: crypto.randomUUID(), description: "Example description" },
        { id: crypto.randomUUID(), description: "Example description" },
      ],
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: "Example School",
      course: "Example Course",
      startDate: "Start Date",
      endDate: "End Date",
      descriptions: [
        { id: crypto.randomUUID(), description: "Example description" },
        { id: crypto.randomUUID(), description: "Example description" },
      ],
    },
  ],
  skills: [{ id: crypto.randomUUID(), description: "Example description" }],
  tools: [{ id: crypto.randomUUID(), description: "Example description" }],
};

function App() {
  const [userCvData, setUserCvData] = useState(dummyTextExample);

  const [enterDetailsSectionFlash, setEnterDetailsSectionFlash] = useState(false);

  const triggerSetEnterDetailsSectionFlash = () => {
    setEnterDetailsSectionFlash(true);

    setTimeout(() => {
      setEnterDetailsSectionFlash(false);
    }, 3000);
  };

  // const workExperienceItems { firstName, lastName, jobTitle, phoneNumber, email, website, location, profileSummary }

  return (
    <>
      <header>
        <div>
          <h1>SimpleCV</h1>
          <i>
            <p>Create your CV. Get hired.</p>
          </i>
        </div>
        <div>
          <p>Fill in your details on the left, see live preview on the right</p>
          <button type="button" onClick={triggerSetEnterDetailsSectionFlash}>
            Get Started
          </button>
        </div>
      </header>
      <main>
        <EnterDetailsSection userCvData={userCvData} setUserCvData={setUserCvData} isHighlighted={enterDetailsSectionFlash} />
        <section className="user-cv-section">
          <div className="cv-document">
            <div className="cv-document-top">
              <h2>{userCvData.personalDetails.firstName + " " + userCvData.personalDetails.lastName}</h2>
              <h3>{userCvData.personalDetails.jobTitle}</h3>
            </div>
            <div className="cv-document-bottom">
              <div className="cv-document-bottom-left">
                <CsvRegion regionTitle={"Profile Summary"}>
                  <h4>Profile Summary</h4>
                  <p>{userCvData.profileSummary.profileSummary}</p>
                </CsvRegion>
                <CsvRegion regionTitle={"Work Experience"} className={"experience-wrapper"} renderExperience={true} userCvData={userCvData} dataCategory={"workExperience"} />
                <CsvRegion regionTitle={"Education"} className={"experience-wrapper"} renderExperience={true} userCvData={userCvData} dataCategory={"education"} />
              </div>
              <div className="cv-document-bottom-right">
                <div className="bottom-section-wrapper">
                  <h4>Contact</h4>
                  <div>
                    <i className="fa-regular fa-mobile"></i>
                    <span>{userCvData.personalDetails.phone}</span>
                  </div>
                  <div>
                    <i className="fa-regular fa-envelope"></i>
                    <span>{userCvData.personalDetails.email}</span>
                  </div>
                  <div>
                    <i className="fa-regular fa-globe-pointer"></i>
                    <span>{userCvData.personalDetails.website}</span>
                  </div>
                  <div>
                    <i className="fa-regular fa-location-dot"></i>
                    <span>{userCvData.personalDetails.location}</span>
                  </div>
                </div>
                <div className="bottom-section-wrapper">
                  <h4>Tools</h4>

                  <ul>
                    {userCvData.tools.map((tool) => (
                      <li key={tool.id}>{tool.description}</li>
                    ))}
                  </ul>
                </div>
                <div className="bottom-section-wrapper">
                  <h4>Skills</h4>
                  <ul>
                    {userCvData.skills.map((skill) => (
                      <li key={skill.id}>{skill.description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/LintonRobinson/TOP-CV-Application" aria-label="Corresponding GitHub Repository" target="blank">
            <img src={gitHubIcon} alt="Git Hub Icon" />
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
