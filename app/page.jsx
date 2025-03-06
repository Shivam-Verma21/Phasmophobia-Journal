"use client"
import React, { useState } from "react";

const evidences = [
  "EMF 5",
  "Ultraviolet",
  "Ghost Writing",
  "Freezing Temperatures",
  "D.O.T.S Projector",
  "Ghost Orb",
  "Spirit Box",
];

const ghosts = [
  { name: "Spirit", evidences: ["EMF 5", "Spirit Box", "Ghost Writing"] },
  { name: "Wraith", evidences: ["EMF 5", "Spirit Box", "D.O.T.S Projector"] },
  { name: "Phantom", evidences: ["Ultraviolet", "D.O.T.S Projector", "Spirit Box"] },
  { name: "Poltergeist", evidences: ["Ultraviolet", "Ghost Writing", "Spirit Box"] },
  { name: "Banshee", evidences: ["Ultraviolet", "D.O.T.S Projector", "Ghost Orb"] },
  { name: "Jinn", evidences: ["EMF 5", "Freezing Temperatures", "Ultraviolet"] },
  { name: "Mare", evidences: ["Ghost Writing", "Ghost Orb", "Spirit Box"] },
  { name: "Revenant", evidences: ["Ghost Writing", "Freezing Temperatures", "Ghost Orb"] },
  { name: "Shade", evidences: ["EMF 5", "Ghost Writing", "Freezing Temperatures"] },
  { name: "Demon", evidences: ["Freezing Temperatures", "Ghost Writing", "Ultraviolet"] },
  { name: "Yurei", evidences: ["Freezing Temperatures", "Ghost Orb", "D.O.T.S Projector"] },
  { name: "Oni", evidences: ["EMF 5", "Freezing Temperatures", "D.O.T.S Projector"] },
  { name: "Yokai", evidences: ["D.O.T.S Projector", "Spirit Box", "Ghost Orb"] },
  { name: "Hantu", evidences: ["Ultraviolet", "Freezing Temperatures", "Ghost Orb"] },
  { name: "Goryo", evidences: ["Ultraviolet", "EMF 5", "D.O.T.S Projector"] },
  { name: "Myling", evidences: ["EMF 5", "Ultraviolet", "Ghost Writing"] },
  { name: "Onryo", evidences: ["Ghost Orb", "Freezing Temperatures", "Spirit Box"] },
  { name: "The Twins", evidences: ["EMF 5", "Freezing Temperatures", "Spirit Box"] },
  { name: "Raiju", evidences: ["EMF 5", "D.O.T.S Projector", "Ghost Orb"] },
  { name: "Obake", evidences: ["Ultraviolet", "Ghost Orb", "EMF 5"] },
  { name: "The Mimic", evidences: ["Ultraviolet", "Freezing Temperatures", "Spirit Box"] },
  { name: "Moroi", evidences: ["Ghost Writing", "Freezing Temperatures", "Spirit Box"] },
  { name: "Deogen", evidences: ["Ghost Writing", "D.O.T.S Projector", "Spirit Box"] },
  { name: "Thaye", evidences: ["Ghost Writing", "D.O.T.S Projector", "Ghost Orb"] },
];

const GhostGuessingApp = () => {
  const [selectedEvidences, setSelectedEvidences] = useState({});

  const toggleEvidence = (evidence) => {
    setSelectedEvidences((prev) => {
      if (!prev[evidence]) return { ...prev, [evidence]: "checked" };
      if (prev[evidence] === "checked") return { ...prev, [evidence]: "crossed" };
      const newState = { ...prev };
      delete newState[evidence];
      return newState;
    });
  };

  const isGhostVisible = (ghost) => {
    return Object.entries(selectedEvidences).every(([evidence, state]) => {
      if (state === "checked") return ghost.evidences.includes(evidence);
      if (state === "crossed") return !ghost.evidences.includes(evidence);
      return true;
    });
  };

  // console.log(selectedEvidences);

  return (
    <div className="app">
      <h1>Ghost Guessing App</h1>

      <div className="evidence-list">
        {evidences.map((evidence) => (
          <button
            key={evidence}
            className={`evidence-btn ${selectedEvidences[evidence] || ""}`}
            onClick={() => toggleEvidence(evidence)}
          >
            {evidence}
          </button>
        ))}
      </div>

      <div className="ghost-list">
        {ghosts.map((ghost) => (
          <div key={ghost.name} className={`ghost ${isGhostVisible(ghost) ? "" : "blurred"}`}>
            {ghost.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GhostGuessingApp;
