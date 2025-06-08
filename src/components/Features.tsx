
import { Zap, Shield, Code, RefreshCw, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Go from idea to integration in under 2 minutes. No complex configurations or lengthy documentation to read.",
    color: "text-yellow-400"
  },
  {
    icon: Code,
    title: "Universal API Layer",
    description: "One consistent interface for all services. Switch between providers without changing your business logic.",
    color: "text-blue-400"
  },
  {
    icon: RefreshCw,
    title: "Zero-Friction Switching",
    description: "Migrate between services instantly. Test different providers or switch due to business needs with a single command.",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security best practices, automatic key rotation, and compliance with international standards.",
    color: "text-red-400"
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description: "Track performance, monitor usage, and get alerts. Built-in analytics to optimize your integrations.",
    color: "text-purple-400"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share configurations, manage permissions, and collaborate seamlessly across your development team.",
    color: "text-indigo-400"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Developers Love KOSX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built by developers, for developers. We understand the pain of complex integrations, migration issues, 
            and built the solution we always wanted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gray-800 hover:bg-gray-750 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gray-900 shadow-sm group-hover:shadow-md transition-shadow ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all cursor-pointer">
            See All Features
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Features;
