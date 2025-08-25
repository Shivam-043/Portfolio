import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@assets/Shivam Image_1755805364371.jpg";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
      data-testid="hero-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl animate-bounce-subtle ring-4 ring-primary ring-offset-4 ring-offset-transparent" data-testid="profile-avatar">
              <img 
                src={profileImage} 
                alt="Shivam Krishan Varshney - Software Engineer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse mb-4" data-testid="availability-badge">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
              Available for Immediate Joining
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            <span className="gradient-text">Shivam Krishan</span><br />
            <span className="text-gray-800">Varshney</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4" data-testid="hero-subtitle">Software Engineer</p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto" data-testid="hero-description">
            Passionate Flutter & Android Developer from NIT Kurukshetra, crafting exceptional mobile experiences 
            and leading cross-functional teams to deliver innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              data-testid="button-contact"
            >
              <a href="#contact">
                <i className="fas fa-envelope mr-2"></i>Get In Touch
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              data-testid="button-work"
            >
              <a href="#experience">
                <i className="fas fa-briefcase mr-2"></i>View Work
              </a>
            </Button>
          </div>
          <div className="mt-12 flex justify-center space-x-6" data-testid="hero-stats">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary" data-testid="stat-users">100K+</div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary" data-testid="stat-rating">4.7★</div>
              <div className="text-sm text-gray-500">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent" data-testid="stat-leetcode">500+</div>
              <div className="text-sm text-gray-500">LeetCode</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <ChevronDown className="text-2xl text-gray-400" />
      </div>
    </section>
  );
}
