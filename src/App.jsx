import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>SimpleCV</h1>
        <i>
          <p>Create your CV. Get hired.</p>
        </i>
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
          <div className="enter-details-bottom-wrapper"></div>
        </section>
        <section className="user-cv-section"></section>
      </main>
    </>
  );
}

export default App;
