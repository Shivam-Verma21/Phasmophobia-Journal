"use client";
import { useState } from "react";
import { ghosts } from "@/data/ghosts-data";
import NotFound from "./NotFound";

export default function Ghosts() {
    const [selectedGhostName, setSelectedGhostName] = useState("Aswang");

    const ghost = ghosts.find(
        (g) => g.name.toLowerCase() === selectedGhostName.toLowerCase()
    );

    if (!ghost) return <NotFound />;

    return (
        <div className="page flex ghosts-page mx-auto">
            <div className="ghost-list-div pt-4">
                <span className="text-2xl sm:text-[2rem] font-semibold leading-9 tracking-wider">Ghost Types</span>

                <hr className="border-b-2 border-stone-900 my-2 w-sm" />

                <h2 className="text-left text-xl sm:text-2xl leading-6 mx-auto mt-2 mb-4 tracking-wider">Select a ghost type below to view more information:</h2>

                <div className="ghost-list">
                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Aswang")}>Aswang</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Banshee")}>Banshee</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Dayan")}>Dayan</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Demon")}>Demon</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Deogen")}>Deogen</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Gallu")}>Gallu</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Goryo")}>Goryo</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Hantu")}>Hantu</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Jinn")}>Jinn</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Kormos")}>Kormos</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Mare")}>Mare</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Moroi")}>Moroi</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Myling")}>Myling</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Obake")}>Obake</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Obambo")}>Obambo</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Oni")}>Oni</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Onryo")}>Onryo</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Phantom")}>Phantom</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Poltergeist")}>Poltergeist</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Raiju")}>Raiju</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Revenant")}>Revenant</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Shade")}>Shade</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Spirit")}>Spirit</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Thaye")}>Thaye</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("The Mimic")}>The Mimic</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("The Twins")}>The Twins</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Wraith")}>Wraith</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Yokai")}>Yokai</div>
                    </div>

                    <div className={"ghost text-[1.25rem] sm:text-2xl cursor-pointer"}>
                        <div onClick={() => setSelectedGhostName("Yurei")}>Yurei</div>
                    </div>
                </div>
            </div>

            <div className="evidence-separator w-12 shrink-0 z-0"></div>

            <div className="ghost-desc-div h-[40rem] pt-5 pr-5">
                <h1 className="text-4xl sm:text-[3rem] text-left tracking-wider leading-9 font-medium">{ghost.name}</h1>

                <hr className="border-b-2 border-stone-900 my-2 w-md" />

                <p className="text-xl sm:text-[1.5rem] leading-6 sm:leading-7 tracking-wider my-4 font-semibold">{ghost.description}</p>

                <p className="text-xl sm:text-[1.5rem] leading-6 sm:leading-7 tracking-wider my-7 font-semibold">Strength: {ghost.strength}</p>

                <p className="text-xl sm:text-[1.5rem] leading-6 sm:leading-7 tracking-wider my-7 font-semibold">Weakness: {ghost.weakness}</p>

                <div className="flex flex-col gap-2 mt-auto absolute bottom-16">
                    <p className="text-2xl sm:text-3xl leading-6 tracking-wider sm:leading-6 mb-2 font-bold">Evidence</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6 font-semibold">{ghost.evidences[0]}</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6 font-semibold">{ghost.evidences[1]}</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6 font-semibold">{ghost.evidences[2]}</p>
                </div>
            </div>
        </div>
    )
}