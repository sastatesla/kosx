import { Badge } from '@/components/ui/badge';
import SDKRequestForm from './SDKRequestForm';
import { useState } from 'react';
import { PlaneTakeoff } from 'lucide-react';

// Replace each logo with a logoUrl (string)
const integrations = [
  { name: 'Cashfree', category: 'Payments', logoUrl: '/assets/cashfree.png' },
  { name: 'Razorpay', category: 'Payments', logoUrl: '/assets/razorpay.png' },
  { name: 'Paytm PG', category: 'Payments', logoUrl: '/assets/paytm.png' },
    { name: 'PhonePe PG', category: 'Payments', logoUrl: '/assets/phonePe.png' },

  { name: 'Stripe', category: 'Payments', logoUrl: '/assets/stripe.png' },
  { name: 'AWS S3', category: 'Storage', logoUrl: '/assets/aws.png' },
  { name: 'Google Cloud', category: 'Storage', logoUrl: '/assets/gcp.png' },
  { name: 'Digital Ocean', category: 'Storage', logoUrl: '/assets/do.png' },
  { name: 'Open AI', category: 'LLM Models', logoUrl: '/assets/oai.png' },
  { name: 'Claude AI', category: 'LLM Models', logoUrl: '/assets/cai.png' },
  { name: 'Mistral AI', category: 'LLM Models', logoUrl: '/assets/mistral.png' },
  { name: 'Gemini', category: 'AI/ML', logoUrl: '/assets/gemini.png' },
  { name: 'Hugging Face', category: 'AI/ML', logoUrl: '/assets/huggingFace.png' },
  { name: 'Twilio', category: 'Communication', logoUrl: '/assets/twilio.png' },
  { name: 'MSG91', category: 'Communication', logoUrl: '/assets/msg91.png' },
  { name: 'Mtalkz', category: 'Communication', logoUrl: '/assets/mtalkz.png' },
    { name: 'ShadowFax', category: 'Logisctics', logoUrl: '/assets/shadowfax.png' },
    { name: 'Delhivery', category: 'Logisctics', logoUrl: '/assets/delhivery.png' },

  { name: 'Pidge', category: 'Logisctics', logoUrl: '/assets/pidge.png' },
  { name: 'Porter', category: 'AI/ML', logoUrl: '/assets/porter.png' },
  
];

const categories = [...new Set(integrations.map(i => i.category))];

const Integrations = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="integrations" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 my-4 rounded-full bg-blue-800/10 border border-blue-600/20 text-yellow-500 text-sm relative overflow-hidden group hover:bg-blue-600/20 transition-all duration-300 animate-fade-in-up [animation-delay:400ms]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
            <PlaneTakeoff className="h-4 w-4 mr-2 animate-pulse text-yellow-400" />
            Launching integrations in coming weeks!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            20+ Ready-to-Use Integrations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect to any service instantly. We maintain the integrations, 
            you focus on building amazing products.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="px-4 py-2 text-sm bg-gray-700 text-gray-300 hover:bg-gray-600">
              {category}
            </Badge>
          ))}
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <img
                    src={integration.logoUrl}
                    alt={integration.name + " logo"}
                    className="h-10 w-10 object-cover group-hover:scale-110 transition-transform bg-white rounded-full shadow-md"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-white mb-1">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {integration.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't see your service? We'll add it!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Request any integration and our team will prioritize it. 
              Most requests are completed within 48 hours.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Integration
            </button>
          </div>
        </div>
        {showForm && <SDKRequestForm onClose={() => setShowForm(false)} />}
      </div>
    </section>
  );
};

export default Integrations;