import { BrainCircuit, Rocket, Zap, Gauge, CircleDollarSign, Bug, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useMotionValueEvent } from 'framer-motion';
import Testimonials from './Testimonials';
import { ComingSoonPopup } from './ComingSoonPopup';
import Footer from './Footer';

const AiFeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState([false, false, false, false]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: '',
    description: ''
  });

    const handlePlanClick = (planName: string) => {
    setPopupContent({
      title: `${planName} Coming Soon!`,
      description: `We're currently finalizing ${planName}. Leave your email below and join the waitlist to be the first to know when it's available!`
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Track when features become visible and stay visible
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const thresholds = [0.2, 0.4, 0.6, 0.8];
    const newVisible = visibleFeatures.map((isVisible, index) => {
      return isVisible || latest > thresholds[index];
    });
    setVisibleFeatures(newVisible);
  });

  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Intelligent Analysis",
      description: "Continuously monitors your SDK usage patterns and detects anomalies before they become problems.",
      bg: "bg-gradient-to-br from-black/50 to-gray-600/20"
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Smart Debugging",
      description: "Automatically groups related errors and suggests root causes with code-level insights.",
      bg: "bg-gradient-to-br from-black/50 to-gray-600/20"
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Recommends specific improvements to make your integrations faster and more efficient.",
      bg: "bg-gradient-to-br from-black/50 to-gray-600/20"
    },
    {
      icon: <CircleDollarSign className="h-8 w-8" />,
      title: "Cost Savings",
      description: "Identifies wasteful resource usage and suggests alternatives that reduce your server bills.",
      bg: "bg-gradient-to-br from-black/50 to-gray-600/20"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/10 border border-blue-600/20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg mb-6">
            <Zap className="h-4 w-4 mr-2 animate-pulse text-green-400 " />
            ManasX Launching Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Intelligent Backend
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Co-Pilot
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automate debugging, optimize performance, and reduce costs with AI that understands your codebase.
          </p>
        </div>

        {/* Features grid with sticky behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left illustration */}
          <div className="hidden lg:block sticky top-24 h-[75vh]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-blue-900/50 border-2 border-gray-700/50 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse"></div>
                  <div className="absolute inset-8 rounded-full bg-purple-500/10 animate-pulse delay-300"></div>
                  <div className="absolute inset-16 rounded-full bg-indigo-500/10 animate-pulse delay-700"></div>
                  <BrainCircuit className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-blue-400" />
                </div>
                
                <div className="absolute top-8 left-8 w-32 bg-gray-800/80 border border-gray-700 rounded-lg p-2 text-xs font-mono text-green-400 animate-float">
                  {`// Performance optimized\nawait optimizeQuery();`}
                </div>
                <div className="absolute bottom-16 right-8 w-40 bg-gray-800/80 border border-gray-700 rounded-lg p-2 text-xs font-mono text-blue-400 animate-float delay-1000">
                  {`// Error detected\ncheckAuthToken();`}
                </div>
              </div>
            </div>
          </div>

          {/* Right features - now with persistent visibility */}
          <div className="space-y-6 lg:space-y-6 lg:pr-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: visibleFeatures[index] ? 1 : 0,
                  y: visibleFeatures[index] ? 0 : 20
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${feature.bg} border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl ${
                  visibleFeatures[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-3 rounded-lg ${feature.bg.replace('bg-gradient-to-br', 'bg-gradient-to-tl')} border border-gray-700/50 text-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <button onClick={() => handlePlanClick('ManasX')}  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium group hover:shadow-lg transition-all">
            <Rocket className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Start Building with AI Assistance
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-400 mt-4">
            Available on all paid plans. Rolling out Soon.
          </p>
        </div>
         <ComingSoonPopup
              isOpen={showPopup}
              onClose={closePopup}
              title={popupContent.title}
              description={popupContent.description}
            />
        <Testimonials/>
      </div>
    </section>
  );
};

export default AiFeaturesSection;