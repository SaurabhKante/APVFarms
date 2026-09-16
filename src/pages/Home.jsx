import HomeHeader from "../components/Home/HomeHeader";
import HeroSection from "../components/Home/HeroSection";
import MissionCard from "../components/Home/MissionCard";
import GuidingMottos from "../components/Home/GuidingMottos";
import NotificationCard from "../components/Home/NotificationCard";
import HomeFooter from "../components/Home/HomeFooter";
import BottomNavigation from "../components/BottomNavigation";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-body-md text-on-surface">
      <HomeHeader />

      <main className="relative flex w-full flex-1 flex-col bg-surface pb-20 pt-16">
        <div className="flex w-full flex-col">
          <HeroSection />

          <MissionCard />

          <GuidingMottos />

          <NotificationCard />

          <HomeFooter />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Home;