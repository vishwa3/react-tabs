import React, { useState } from "react";
import "./App.css";

const data = [
  {
    value: "html",
    label: "HTML",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    label: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    label: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

function App() {
  const [tabState, setTabState] = useState("html");
  return (
    <div className="app_container">
      <div className="tabs_container">
        {data.map(({ value, label }) => (
          <button
            key={value}
            className={tabState === value && "active"}
            onClick={() => setTabState(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab_description">
        {data.map(({ description, value }) => (
          <p key={value} hidden={value !== tabState}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
