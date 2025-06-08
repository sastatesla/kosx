import { useState } from 'react';
import { Check, ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ComingSoonPopup } from '@/components/ComingSoonPopup';

const Pricing = () => {
  const heroAnimation = useScrollAnimation();
  const pricingAnimation = useScrollAnimation();
  const examplesAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
    const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: '',
    description: ''
  });

    const handlePlanClick = (planName: string) => {
    setPopupContent({
      title: `${planName} Coming Soon!`,
      description: `We're currently finalizing our ${planName} offering. Leave your email below and we'll notify you as soon as it's available.`
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  const pricingTiers = [
    {
      name: "KOSX Beta",
      price: "₹0",
      duration: "Unlimited",
      description: "Perfect for developers",
      features: [
        "Full SDK Access",
        "Logs, Errors & Usage Dashboard", 
        "CLI Tool for development",
        "All integrations available",
        "Community support",
        "Basic Performance Analytics",
        "Open Source ",
        "Free forever",
      ],
      cta: "Start Building",
      popular: false,
      color: "border-gray-700",
      delay: "0ms"
    },
    {
      name: "KOSX Pro",
      price: "₹999",
      duration: "month",
      description: "For teams that need more power",
      features: [
        "Full SDK Access",
        "Logs, Errors & Usage Dashboard",
        "All integrations available",
        "CLI Tool for development",
        "Priority support",
        "Advanced Performance Analytics",
        "Custom integration help",
        "Agentic AI for deugging and monitoring",
        "Vendor analytics and insights",
        "Dedicated support",
      ],
      cta: "Add Payment Method",
      popular: true,
      color: "border-blue-500",
      delay: "200ms"
    },
    {
      name: "Enterprise Plan",
      price: "Starts at ₹1999",
      duration: "Month",
      description: "Transparent pricing, pay only for what you consume",
      features: [
        "Everything in Pro",
        "Custom SDKS",
        "Private On-Prem Deployment",
        "Dedicated Support Engineer",
        "White-label dashboard",
        "LLM fine-tuned on internal usage",
        "No lock-in contracts",
        "Scale without limits",
        "Performance & Cost Optimization Suggestions"
      ],
      cta: "Request a Quote",
      popular: false,
      color: "border-purple-500",
      delay: "400ms"
    }
  ];

  const usageExamples = [
    {
      scenario: "Small App",
      reads: "10K",
      writes: "5K", 
      cost: "₹450/month",
      delay: "0ms"
    },
    {
      scenario: "Medium App",
      reads: "100K",
      writes: "50K",
      cost: "₹4,500/month",
      delay: "200ms"
    },
    {
      scenario: "Large App", 
      reads: "1M",
      writes: "500K",
      cost: "₹45,000/month",
      delay: "400ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-900">
        <div 
          ref={heroAnimation.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up [animation-delay:200ms]">
            Start free, scale when you're ready. No hidden fees, no lock-in contracts. 
            Built for developers, by developers.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm relative overflow-hidden group hover:bg-blue-600/20 transition-all duration-300 animate-fade-in-up [animation-delay:400ms]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
            <Zap className="h-4 w-4 mr-2 animate-pulse" />
            Free tier includes full SDK access • No payment method required
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-gray-900">
        <div 
          ref={pricingAnimation.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative bg-gray-800 border-2 ${tier.color} shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  tier.popular ? 'scale-105 shadow-2xl' : ''
                } ${
                  pricingAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: tier.delay,
                  transitionDelay: tier.delay 
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
                
                {tier.popular && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-30 overflow-visible">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center relative z-20">
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300 inline-block">{tier.price}</span>
                    <span className="text-gray-400 ml-2">/ {tier.duration}</span>
                  </div>
                  <CardDescription className="text-gray-300 mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button  
                  onClick={() => {
    if (tier.name !== "KOSX Beta") {
      handlePlanClick(tier.name);
    } else {
      // Handle actual signup for Beta
    }
  }}
                    className={`w-full mt-6 relative overflow-hidden group/btn ${tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-700 hover:bg-gray-600'} text-white transform hover:scale-105 transition-all duration-300`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:animate-shimmer"></div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Examples */}
     

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div 
          ref={howItWorksAnimation.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`text-center mb-16 transition-all duration-1000 ${
            howItWorksAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Our Pricing Works!
            </h2>
            <p className="text-xl text-gray-300">
              Simple, fair, and transparent — exactly how pricing should be
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: 1, title: "Start Free", desc: "Get full access of sdks, develop and ship things fast and free forever", color: "bg-blue-600" },
              { num: 2, title: "Update to pro", desc: "Agetic AI in play to support development and debug and optimize like a pro.", color: "bg-purple-600" },
              { num: 3, title: "Custom Sdks", desc: "Sdks tailored for your custom needs, and on premised deployment support", color: "bg-green-600" },
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center group transition-all duration-700 ${
                  howItWorksAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <span className="text-white font-bold">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-850">
        <div 
          ref={faqAnimation.ref}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`text-center mb-12 transition-all duration-1000 ${
            faqAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              { q: "Do I need a payment method to start?", a: "No! You get full access to all SDK features  . Just sign up and start building." },
              { q: "What happens if I exceed the Free plan's limits?", a: "You’ll still be able to use the SDKs, but advanced AI features and insights will be restricted. You’ll be prompted to upgrade to Pro to unlock deeper analytics and optimization suggestions." },
              { q: "How does the pricing work for Pro plan?", a: "Pro plan is priced at ₹999 per month. You’ll be billed annualy" },
              { q: "Are there any hidden fees or contracts?", a: "Absolutely not. Our pricing is completely transparent with no hidden fees, setup costs, or long-term contracts." }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`bg-gray-800 rounded-xl p-6 border border-gray-700 group hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 ${
                  faqAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{faq.q}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up [animation-delay:200ms]">
            Join thousands of developers who are building faster with KOSX
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300">
              View Documentation 
            </Button>
          </div>
        </div>
      </section>
      
<ComingSoonPopup
        isOpen={showPopup}
        onClose={closePopup}
        title={popupContent.title}
        description={popupContent.description}
      />
      <Footer />
    </div>
  );
};

export default Pricing;
