import GhostTypes from "@/components/GhostTypes";
import { ghosts } from "../../data/ghosts-data";
import { notFound } from "next/navigation";

const GhostPage = async ({ params }) => {
    const { ghostName } = params;

    if (!params?.ghostName) {
        console.error("Missing ghostName parameter");
        return notFound();
    }

    const decodedName = decodeURIComponent(ghostName).toLowerCase();

    const ghost = ghosts.find(g =>
        g.name.toLowerCase() === decodedName
    );

    if (!ghost) {
        return notFound();
    }

    return (
        <div className="flex justify-center items-center">
            <GhostTypes />
            <div className="page w-full h-[40rem]">
                <h1 className="text-4xl sm:text-[2.5rem] text-left tracking-wider leading-9 font-medium">{ghost.name}</h1>

                <hr className="border-b-2 border-stone-900 my-2 rounded-[35%] w-full" />

                <p className="text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider my-4">{ghost.description}</p>

                <p className="text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider my-5">Weakeness: {ghost.weakness}</p>

                <div className="flex flex-col gap-2 mt-auto absolute bottom-8">
                    <p className="text-2xl sm:text-3xl font-medium leading-6 tracking-wider sm:leading-6">Evidence</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6">{ghost.evidences[0]}</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6">{ghost.evidences[1]}</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6">{ghost.evidences[2]}</p>
                </div>
            </div>
        </div>
    );
};

export default GhostPage;