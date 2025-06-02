import Navigation from '../components/Navigation';
import LaunchHero from '../components/LaunchHero';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import FeaturedSection from '../components/FeaturedSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <LaunchHero />
        <VideoSection />
        <AboutSection />
        <FeaturedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;