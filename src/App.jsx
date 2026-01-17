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
          <div className="cv-document"></div>
        </section>
      </main>
    </>
  );
}

export default App;
