import Navigation from '../components/Navigation';
import LaunchHero from '../components/LaunchHero';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import FeaturedSection from '../components/FeaturedSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="page_wrap min-h-screen bg-background">
      <Navigation />
      <main id="main">
        <LaunchHero />
        <VideoSection />
        <AboutSection />
        <FeaturedSection />
        <CTASection />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;