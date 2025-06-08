
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CodeDemo from '@/components/CodeDemo';
import Integrations from '@/components/Integrations';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AiFeatireSection from '@/components/AiFeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Features />
      <CodeDemo />
      <Integrations />
      <AiFeatireSection />
      <Footer />
    </div>
  );
};

export default Index;
