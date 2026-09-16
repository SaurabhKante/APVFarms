import HomeHeader from "../components/Home/HomeHeader";
import AgricultureEvolution from "../components/OurVision/AgricultureEvolution";
import ConnectedAgritech from "../components/OurVision/ConnectedAgritech";
import VisionIntro from "../components/OurVision/VisionIntro";
import VisionCards from "../components/OurVision/VisionCards";
import LaunchMilestone from "../components/OurVision/LaunchMilestone";
import BottomNavigation from "../components/BottomNavigation";

function OurVision() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md">
      <HomeHeader />

      <main className="flex-1 w-full pt-16 pb-20">
        <div className="flex flex-col w-full">
          <VisionIntro />
          <AgricultureEvolution />
          <ConnectedAgritech />
          <VisionCards />
          <LaunchMilestone />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default OurVision;