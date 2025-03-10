"use client"
import React, { useState } from "react";

import { evidences } from "@/data/ghosts-data";
import { ghosts } from "@/data/ghosts-data";

export default function Evidence() {
    const [selectedEvidences, setSelectedEvidences] = useState({});
    const [ghostState, setGhostState] = useState({});

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

    return (
        <div className="page flex flex-col evidence-page">
            <span className="text-4xl sm:text-[2.5rem] font-medium leading-9 tracking-wider">Evidence</span>

            <hr className="border-b-2 border-stone-900 my-2 rounded-[35%] w-full" />

            <div className="evidence-list">
                {evidences.map((evidence) => (
                    <label htmlFor=""
                        key={evidence}
                        className={`evidence-label cursor-pointer w-full relative flex items-center gap-3 ${selectedEvidences[evidence] || ""}`}
                        onClick={() => toggleEvidence(evidence)}
                    >
                        <input type="checkbox" name="" id="" className={`evidence-checkbox text-[1.25rem] sm:text-2xl ${selectedEvidences[evidence] || ""}`} />
                        <span className="text-[1.25rem] sm:text-xl">{evidence}</span>
                    </label>
                ))}
            </div>

            <hr className="border-b-2 border-stone-900 my-3 rounded-[35%] w-full" />

            <div>
                <div className="ghost-list">
                    {ghosts.map((ghost) => {
                        return (
                            <div
                                key={ghost.name}
                                className={`ghost text-[1.25rem] sm:text-2xl cursor-pointer ${isGhostVisible(ghost) ? "" : "blurred"} ${ghostState[ghost.name] || ""}`}
                                onClick={() => toggleGhost(ghost.name)}
                            >
                                {ghost.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}