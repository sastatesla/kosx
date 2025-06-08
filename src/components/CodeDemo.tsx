
import { useState } from 'react';
import { Check, Copy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Testimonials from './Testimonials';

const codeExamples = {
  payments: `// Setup Razorpay in 30 seconds
import {PaymentManager} from "@sastatesla/payment-gateway-sdk"

const payment = PaymentManager.init({
	provider: "razorpay",
	config: {
		keyId: "YOUR_KEY_ID",
		keySecret: "YOUR_SECRET"
	}
});

// Usage
const paymentResult = await payment.charge(
  amount: 500,
  currency: "INR",
  source: "customer_abc123",
  metadata: { orderId: "order_001" }
  );

console.log("Result:", paymentResult);`,

  storage: `// Setup S3 in seconds
import {CloudStorage} from "@sastatesla/cloud-storage-sdk"

const storage = CloudStorage.init({
	provider: "s3",
	config: {
		region: process.env.AWS_REGION!,
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
		bucketName: process.env.S3_BUCKET!
	},
	allowedFileTypes: [
  "image/jpeg", 
  "image/png", 
  "application/pdf"
  ]
  // Usage
const result = await storage.uploadBuffer(file)
console.log(result.url);
})`,

//   auth: `// Authentication across providers
// import { auth } from '@devsdk/core';

// // Works with Auth0, Firebase, AWS Cognito
// const user = await auth.signIn({
//   email: 'user@example.com',
//   password: 'securePassword123'
// });

// // Enable 2FA with one line
// await auth.enable2FA(user.id);`,

//   notifications: `// Multi-channel notifications
// import { notify } from '@devsdk/core';

// // Send via email, SMS, push notifications
// await notify.send({
//   to: 'user@example.com',
//   template: 'welcome',
//   channels: ['email', 'push'],
//   data: { userName: 'John' }
// });`
};

const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState('payments');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real code examples showing how DevSDK transforms complex integrations 
            into simple, readable code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tab Navigation */}
   <div className="space-y-4">
  {Object.keys(codeExamples).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`w-full text-left p-6 rounded-xl transition-all ${
        activeTab === tab
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-semibold capitalize">{tab}</h3>
      </div>
      <p className="text-sm opacity-80">
        {tab === 'payments' && 'Seamlessly integrate any payment gateway provider. Currently supports Razorpay and Cashfree.'}
        {tab === 'payments' && (
          <div className="flex items-center gap-2">
            <img src="/assets/razorpay.png" alt="Razorpay" className="h-8 w-8 rounded-full" />
            <img src="/assets/cashfree.png" alt="Cashfree" className="h-8 w-8 rounded-full bg-white" />
        
          </div>
        )}
        {tab === 'storage' && 'Store and manage files across cloud providers. Currently supports AWS S3 and GCP.'}
        {tab === 'storage' && (
          <div className="flex items-center gap-2">
            <img src="/assets/aws.png" alt="Razorpay" className="h-8 w-8 rounded-full bg-white object-cover" />
            <img src="/assets/gcp.png" alt="Cashfree" className="h-8 w-8 rounded-full bg-white object-cover" />
        
          </div>
        )}
        {tab === 'auth' && 'Secure authentication with any provider'}
        {tab === 'notifications' && 'Send notifications across all channels'}
      </p>
    </button>
  ))}
</div>


          {/* Code Display */}
          <div className="relative">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">{activeTab}.js</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCode}
                  className="text-gray-400 hover:text-white"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="p-6">
                <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                  <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                </pre>
              </div>
            </div>

            {/* Floating elements */}
               <div className="inline-flex items-center rounded-full absolute -top-4 -right-4 bg-green-600/30 text-white px-3 py-1 text-sm font-medium overflow-hidden group hover:bg-blue-600/20 transition-all duration-300 animate-fade-in-up [animation-delay:400ms]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
            <Zap className="h-4 w-4 mr-2 animate-pulse text-yellow-400" />
            Works Instantly
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
