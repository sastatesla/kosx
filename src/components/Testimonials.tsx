
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Senior Developer',
    company: 'TechCorp India',
    avatar: '👨‍💻',
    rating: 5,
    text: 'DevSDK saved us 3 months of development time. The payment integration that would have taken us weeks was done in 30 minutes. Incredible!'
  },
  {
    name: 'Priya Patel',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Switching between cloud providers used to be a nightmare. With DevSDK, we migrated our entire storage system in an afternoon. Game changer!'
  },
  {
    name: 'Rahul Verma',
    role: 'Full Stack Developer',
    company: 'InnovateLabs',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'The code consistency across different services is amazing. My team can work on any integration without learning new APIs every time.'
  },
  {
    name: 'Sneha Gupta',
    role: 'Lead Engineer',
    company: 'FintechPlus',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Security and compliance features built-in saved us from hiring a dedicated DevOps engineer. The ROI is incredible.'
  },
  {
    name: 'Vikash Kumar',
    role: 'Startup Founder',
    company: 'NextGenApps',
    avatar: '👨‍🚀',
    rating: 5,
    text: 'As a solo founder, DevSDK lets me move fast and focus on product instead of infrastructure. It\'s like having a whole DevOps team!'
  },
  {
    name: 'Anita Desai',
    role: 'Product Manager',
    company: 'CloudSolutions',
    avatar: '👩‍🎯',
    rating: 5,
    text: 'Our development velocity increased by 60% after adopting DevSDK. The time-to-market improvement is substantial.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-10  ">
      <div className="">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by 10,000+ Developers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers who have revolutionized their workflow with DevSDK.
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Vendor Lock-In Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2 mins</div>
              <div className="text-blue-100">Average Integration time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0%</div>
              <div className="text-blue-100">Devops Overhead</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
