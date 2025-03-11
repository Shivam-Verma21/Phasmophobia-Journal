import Evidence from "@/components/Evidence";
import GhostTypes from "@/components/GhostTypes";

const Home = () => {
  return (
    <main className="min-h-screen">
      <div className="w-full mx-auto">
        <div className="flex justify-center items-center">
          <GhostTypes />
          <Evidence />
        </div>
      </div>
    </main>
  );
};

export default Home;
