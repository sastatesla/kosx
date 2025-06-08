
import { ArrowRight, Play, Zap, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center my-4 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm relative overflow-hidden group hover:bg-blue-600/20 transition-all duration-300 animate-fade-in-up [animation-delay:400ms]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
            <Zap className="h-4 w-4 mr-2 animate-pulse" />
            Made in India 🇮🇳 • Namaste World!
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Faster,
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Code Smarter
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate plug-and-play SDK platform that eliminates setup complexity. 
            Integrate any external service in seconds, not hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to='/docs'>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 h-auto border-gray-700 text-gray-300  bg-gray-800"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto ">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2 mins</div>
              <div className="text-gray-400">Average integration time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-gray-400">Ready-to-use services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-gray-400">Uptime guarantee</div>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="mt-16">
          <div className="bg-gray-950 rounded-xl p-6 max-w-4xl mx-auto shadow-3xl border border-gray-800 hover:border-blue-500">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-gray-500 text-sm">terminal</div>
            </div>
            <div className="text-green-400 font-mono text-sm md:text-base">
              <div className="mb-2">$ npm i @sastatesla/payment-gateway-sdk</div>
              <div className="text-gray-500">✅ Razorpay payments configured in 30 seconds!</div>
              <div className="mt-4 text-blue-400">
                <span className="text-gray-500"># Same API. Different provider. No code rewrite.</span>
              </div>
              <div className="text-green-400">$ KOSX switch cashfree</div>
              <div className="text-gray-500">✅ Switched to Cashfree seamlessly!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
