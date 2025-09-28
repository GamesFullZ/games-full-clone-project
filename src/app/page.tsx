import NavigationHeader from "@/components/sections/navigation-header";
import AdvertisementBanner from "@/components/sections/advertisement-banner";
import FeaturedGameHero from "@/components/sections/featured-game-hero";
import AccountSignupCta from "@/components/sections/account-signup-cta";
import LatestGames from "@/components/sections/latest-games";
import MostDownloaded from "@/components/sections/most-downloaded";
import MostVisitedSection from "@/components/sections/most-visited";
import CollectionsSection from "@/components/sections/collections";
import StatisticsSection from "@/components/sections/statistics";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      <main className="flex flex-col">
        <AdvertisementBanner />
        <FeaturedGameHero />
        <AccountSignupCta />
        <LatestGames />
        <MostDownloaded />
        <MostVisitedSection />
        <CollectionsSection />
        <StatisticsSection />
      </main>
      
      <Footer />
    </div>
  );
}