"use client"
import React, { useState } from "react";
import { ghosts } from "@/data/ghosts-data";

export default function Evidence() {
    const [selectedEvidences, setSelectedEvidences] = useState({});
    const [ghostState, setGhostState] = useState({ Spirit: "circled" });

    const emf = "EMF Level 5";
    const dots = "D.O.T.S Projector";
    const uv = "Ultraviolet";
    const orbs = "Ghost Orb";
    const writing = "Ghost Writing";
    const spiritbox = "Spirit Box";
    const freezing = "Freezing Temperatures";

    // Toggle Evidence States
    const toggleEvidence = (evidence) => {
        setSelectedEvidences((prev) => {
            if (!prev[evidence]) return { ...prev, [evidence]: "checked" };
            if (prev[evidence] === "checked") return { ...prev, [evidence]: "crossed" };
            const newState = { ...prev };
            delete newState[evidence];
            return newState;
        });
    };

    // Toggle Ghost States
    const toggleGhost = (ghostName) => {
        setGhostState((prev) => {
            const newState = { ...prev };
            const currentState = newState[ghostName];
            const currentCircled = Object.keys(prev).find(name => prev[name] === 'circled');

            // Handle clicks on different ghosts
            if (ghostName !== currentCircled) {
                // Clear existing circled ghost
                if (currentCircled) delete newState[currentCircled];

                // Handle clicked ghost's previous state
                if (currentState === 'crossed') {
                    // Clear crossed state
                    delete newState[ghostName];
                } else {
                    // Circle new ghost
                    newState[ghostName] = 'circled';
                }
            }
            // Handle clicks on same ghost
            else {
                // Cycle through states
                if (currentState === 'circled') {
                    newState[ghostName] = 'crossed';
                } else if (currentState === 'crossed') {
                    delete newState[ghostName];
                } else {
                    newState[ghostName] = 'circled';
                }
            }
            return newState;
        });
    };

    // Checking if ghost should be visible
    const isGhostVisible = (ghost) => {
        return Object.entries(selectedEvidences).every(([evidence, state]) => {
            if (state === "checked") return ghost.evidences.includes(evidence);
            if (state === "crossed") return !ghost.evidences.includes(evidence);
            return true;
        });
    };

    const [hoveredGhost, setHoveredGhost] = useState(null);

    // Blur the evidences which a ghost doesn't have when it is hovered
    const isEvidenceBlurred = (evidence) => {
        if (!hoveredGhost) return false;
        const ghost = ghosts.find((g) => g.name === hoveredGhost);
        return ghost ? !ghost.evidences.includes(evidence) : false;
    };

    return (
        <div className="page flex gap-5 evidence-page">
            <div className="evidencediv1 mt-4">
                <span className="text-4xl sm:text-[3rem] font-medium leading-9 tracking-wider">Evidence</span>

                <hr className="border-b-2 border-stone-900 my-2 w-sm" />

                <div className="evidence-list">
                    <div className={`evidence-label w-full relative block  ${selectedEvidences[emf] || ""} transition duration-100 ${isEvidenceBlurred(emf) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(emf)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[emf] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">EMF Level 5</span>
                        </div>
                        <p className="font-semibold ml-10">Get a level 5 reading on the EMF Reader</p>
                    </div>

                    <div className={`evidence-label w-full relative block ${selectedEvidences[dots] || ""} transition duration-100 ${isEvidenceBlurred(dots) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(dots)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[dots] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">D.O.T.S Projector</span>
                        </div>
                        <p className="font-semibold ml-10">Witness a ghostly disturbance within D.O.T.S Projector lights</p>
                    </div>

                    <div className={`evidence-label w-full relative block ${selectedEvidences[uv] || ""} transition duration-100 ${isEvidenceBlurred(uv) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(uv)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[uv] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">Ultraviolet</span>
                        </div>
                        <p className="font-semibold ml-10">Uncover finger, hand or footprints with the UV Light</p>
                    </div>

                    <div className={`evidence-label w-full relative block ${selectedEvidences[freezing] || ""} transition duration-100 ${isEvidenceBlurred(freezing) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(freezing)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[freezing] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">Freezing Temperatures</span>
                        </div>
                        <p className="font-semibold ml-10">Get a reading below 0°C/ 32°F on a Thermometer</p>
                    </div>

                    <div className={`evidence-label w-full relative block ${selectedEvidences[orbs] || ""} transition duration-100 ${isEvidenceBlurred(orbs) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(orbs)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[orbs] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">Ghost Orb</span>
                        </div>
                        <p className="font-semibold ml-10">See floating orbs on video (through Video Camera, Video Feed or Head Gear)</p>
                    </div>

                    <div className={`evidence-label w-full relative block ${selectedEvidences[writing] || ""} transition duration-100 ${isEvidenceBlurred(writing) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(writing)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[writing] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">Ghost Writing</span>
                        </div>
                        <p className="font-semibold ml-10">Have a ghost write in a Ghost Writing Book that's been placed down</p>
                    </div>

                    <div className={`evidence-label w-full relative block ${selectedEvidences[spiritbox] || ""} transition duration-100 ${isEvidenceBlurred(spiritbox) ? "blur-[4px] opacity-40" : ""}`}>
                        <div
                            className="checkbox-and-text gap-5 px-3 cursor-pointer"
                            onClick={() => toggleEvidence(spiritbox)}
                        >
                            <div><input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[spiritbox] || ""}`} /></div>
                            <span className="text-[1.25rem] sm:text-2xl font-semibold">Spirit Box</span>
                        </div>
                        <p className="font-semibold ml-10">Hear a reply on a Spirit Box after asking the ghost a question</p>
                    </div>

                </div>
            </div>

            <div className="evidence-separator w-12 shrink-0 z-0"></div>

            <div className="evidencediv2 mt-4">
                <span className="text-3xl sm:text-[2rem] font-medium leading-9 tracking-wider">Evidence</span>

                <hr className="border-b-2 border-stone-900 my-2 w-md" />

                <h2 className="text-center text-xl sm:text-2xl leading-6 mx-auto mt-2">Using the evidence we've have found, we believe the ghost is a </h2>

                <div>
                    <div className="ghost-list">
                        {ghosts.map((ghost) => {
                            return (
                                <div
                                    key={ghost.name}
                                    className={`ghost text-[1.25rem] sm:text-2xl cursor-pointer ${isGhostVisible(ghost) ? "" : "blurred"} ${ghostState[ghost.name] || ""}`}
                                    // onClick={() => toggleGhost(ghost.name)}
                                    onClick={() => {
                                        if (isGhostVisible(ghost)) {
                                            toggleGhost(ghost.name);
                                        }
                                    }}
                                    onMouseEnter={() => {
                                        if (isGhostVisible(ghost)) setHoveredGhost(ghost.name);
                                    }}
                                    onMouseLeave={() => setHoveredGhost(null)}
                                >
                                    {ghost.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}