import GhostTypes from "@/components/GhostTypes";
import { ghosts } from "../../data/ghosts-data";
import { notFound } from "next/navigation";
import Link from "next/link";

const GhostPage = async ({ params }) => {
    const { ghostName } = params;

    if (!params?.ghostName) {
        return notFound();
    }

    const decodedName = decodeURIComponent(ghostName).toLowerCase();
    const currentIndex = ghosts.findIndex(g => g.name.toLowerCase() === decodedName);

    if (currentIndex === -1) {
        return notFound();
    }

    // Calculate previous/next indices with wrap-around
    const prevIndex = (currentIndex - 1 + ghosts.length) % ghosts.length;
    const nextIndex = (currentIndex + 1) % ghosts.length;
    const ghost = ghosts[currentIndex];

    return (
        <div className="flex justify-center items-center">
            <GhostTypes />
            <div className="page w-full h-[40rem]">
                <h1 className="text-4xl sm:text-[2.5rem] text-left tracking-wider leading-9 font-medium">{ghost.name}</h1>

                <hr className="border-b-2 border-stone-900 my-2 rounded-[35%] w-full" />

                <p className="text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider my-4">{ghost.description}</p>

                <p className="text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider my-7">Strength: {ghost.strength}</p>

                <p className="text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider my-7">Weakeness: {ghost.weakness}</p>

                <div className="flex flex-col gap-2 mt-auto absolute bottom-16">
                    <p className="text-2xl sm:text-3xl font-medium leading-6 tracking-wider sm:leading-6 mb-2">Evidence</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6">{ghost.evidences[0]}</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6">{ghost.evidences[1]}</p>
                    <p className="text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6">{ghost.evidences[2]}</p>
                </div>

                <div className="flex justify-evenly w-full absolute bottom-2">
                    <Link
                        href={`/ghosts/${ghosts[prevIndex].name}`}
                        className="text-xl rounded-lg transition-colors"
                    >
                        ← {ghosts[prevIndex].name}
                    </Link>
                    <Link
                        href={`/ghosts/${ghosts[nextIndex].name}`}
                        className="text-xl rounded-lg transition-colors"
                    >
                        {ghosts[nextIndex].name} →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GhostPage;