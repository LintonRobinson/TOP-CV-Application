import { useState } from "react";
import { useRef } from "react";
import EnterDetailsSection from "./components/EnterDetailsSection";
import CsvRegion from "./components/CsvRegion";

import "./styles/App.css";

function App() {
  const [userCvData, setUserCvData] = useState({
    personalDetails: {
      firstName: "Linton",
      lastName: "Robinson",
      jobTitle: "Web Developer",
      phone: "947-209-3477",
      email: "joshuajrobinson384@gmail.com",
      website: "ljviolinist.com",
      location: "upperville",
    },
    profileSummary: { profileSummary: "A well thought out somethin" },
    workExperience: [
      {
        id: 69,
        position: "Videographer",
        company: "Sphinx",
        startDate: "June 2024",
        endDate: "August 2024",
        descriptions: [
          { id: 1, description: "running around taking pics" },
          { id: 2, description: "ya around taking pics" },
        ],
      },
    ],
    education: [
      {
        id: 67,
        school: "Berklee",
        course: "CWP",
        startDate: "Ya Ma 2024",
        endDate: "1/29/26",
        descriptions: [
          { id: 1, description: "going to the stu" },
          { id: 2, description: "caf shows" },
        ],
      },
    ],
    skills: [{ id: 4, description: "The first skill" }],
    tools: [{ id: 7, description: "The first tool" }],
  });

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
                    <li>What I did</li>
                    <li>What I did</li>
                    <li>What I did</li>
                    <li>What I did</li>
                  </ul>
                </div>
                <div className="bottom-section-wrapper">
                  <h4>Tools</h4>

                  <ul>
                    <li>What I did</li>
                    <li>What I did</li>
                    <li>What I did</li>
                    <li>What I did</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span>Ya Mama</span>
        </section>
      </main>
    </>
  );
}

export default App;
