import { useState } from "react";

import "./App.css";

function App() {
  const [userCvData, setUserCvData] = useState(null);
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
          <button>Get Started</button>
        </div>
      </header>
      <main>
        <section className="enter-details-section">
          <div className="enter-details-top-wrapper">
            <button>Clear CV</button>
            <button>Load Example</button>
          </div>
          <div className="enter-details-bottom-wrapper">
            <div className="personal-details">
              <div>
                <div>
                  <i class="fa-solid fa-user"></i>
                  <h2>Personal Details</h2>
                </div>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              <form action="#">
                {/* <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <textarea name="" id=""></textarea> */}
              </form>
            </div>
            <div></div>
          </div>
        </section>
        <section className="user-cv-section">
          <div className="cv-document">
            <div className="cv-document-top">
              <h2>Test Name</h2>
              {/* <h2>{userCvData.firstName + " " + userCvData.lastName}</h2> */}
              <h3>Test Name's Title</h3>
            </div>
            <div className="cv-document-bottom">
              <div className="cv-document-bottom-left">
                <div className="profile-wrapper bottom-left-section-wrapper">
                  <h4>Profile</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem cumque illum, suscipit nam nesciunt culpa modi
                    tempora, ad eius enim odio in laboriosam adipisci quaerat
                    aspernatur aut molestias non totam!
                  </p>
                </div>

                <div className="work-experience-wrapper bottom-left-section-wrapper">
                  <div>
                    <h4>Work Experience</h4>
                    <span>July 2023 - Sep 2023</span>
                  </div>
                  <div>
                    <div>
                      <h5>Achieve Without Borders, Inc.</h5>
                      <h6>Full Stack Developer Intern</h6>
                    </div>
                    <ul>
                      <li>What I did</li>
                      <li>What I did</li>
                      <li>What I did</li>
                      <li>What I did</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cv-document-bottom-right"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
