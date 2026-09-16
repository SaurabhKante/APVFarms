import HomeHeader from "../components/Home/HomeHeader";
import ContactHero from "../components/Contact/ContactHero";
import FounderCard from "../components/Contact/FounderCard";
import GuidingPromise from "../components/Contact/GuidingPromise";
import ContactFooter from "../components/Contact/ContactFooter";
import BottomNavigation from "../components/BottomNavigation";

function Contact() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md text-body-md flex flex-col">
      <HomeHeader />

      <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface">
        <div className="flex flex-col w-full">
          <ContactHero />

          <div className="px-gutter flex flex-col gap-space-lg -mt-space-sm pb-space-xl">
            <FounderCard />

            <GuidingPromise />

            <ContactFooter />
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Contact;