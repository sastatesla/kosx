import { X, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const ComingSoonPopup = ({ 
  isOpen, 
  onClose, 
  title, 
  description 
}: ComingSoonPopupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }, 1500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-gray-900 rounded-xl p-6 max-w-md w-full relative overflow-hidden animate-popup-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-30"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-4 h-4 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="relative z-10">
          {!isSubmitted ? (
            <>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-600/20 p-3 rounded-full">
                  <Clock className="h-8 w-8 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {description}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="relative z-10">Sending...</span>
                  ) : (
                    <>
                      <span className="relative z-10">Notify Me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-gray-400 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-600/20 p-3 rounded-full">
                  <Check className="h-8 w-8 text-green-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-300 text-center mb-6">
                We'll notify you when this plan becomes available.
              </p>
              
              <Button 
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                OK
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};