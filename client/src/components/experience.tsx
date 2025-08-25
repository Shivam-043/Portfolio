import { Rocket, Smartphone, Shield, Users, Settings, TrendingUp, Layers, Palette, ChefHat, Car, MessageCircle, Clock } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50" data-testid="experience-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="experience-title">
            <span className="gradient-text">Professional</span> Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="experience-description">
            Leading development teams and creating impactful mobile applications
          </p>
        </div>

        <div className="space-y-12">
          {/* BOSS RESTAURANT SOFTWARE - FREELANCE */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-testid="experience-boss-restaurant">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    <ChefHat className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="boss-restaurant-company">Boss Restaurant Software</h3>
                    <p className="text-lg text-orange-600 font-semibold" data-testid="boss-restaurant-role">Full Stack Developer - Freelance</p>
                    <p className="text-gray-600" data-testid="boss-restaurant-tech">Next.js, Node.js, MongoDB, Redis</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="boss-restaurant-duration">
                  DEC 2024 - PRESENT
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Settings className="text-orange-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Designed Restaurant Management System with <span className="font-semibold text-orange-600">multi-location integration</span>, reducing operational overhead by <span className="font-semibold">30%</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="text-red-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Built cash summary module improving <span className="font-semibold text-red-600">financial reporting efficiency by 40%</span></p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Rocket className="text-orange-600 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Implemented end-to-end order processing with automated emails, <span className="font-semibold">cutting manual follow-ups by 60%</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-red-600 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Developed staff management system and employee portal, <span className="font-semibold text-red-600">reducing HR intervention by 35%</span></p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-yellow-800"><strong>Note:</strong> Cannot show publicly due to policy permissions</p>
              </div>
            </div>
          </div>

          {/* AUTOMATE - PERSONAL PROJECT */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-testid="experience-automate">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    <Car className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="automate-company">AutoMate</h3>
                    <p className="text-lg text-blue-600 font-semibold" data-testid="automate-role">Full Stack Developer - Personal Project (Team)</p>
                    <p className="text-gray-600" data-testid="automate-tech">Node.js, Express.js, MongoDB, MySQL, WebSockets</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="automate-duration">
                  JAN 2023 - MAR 2023
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="text-blue-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Built ride-sharing platform enabling college students to form groups and <span className="font-semibold text-blue-600">reduce commute costs by 50%</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="text-cyan-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Implemented time-bound group creation with <span className="font-semibold">smart scheduling (±30 minutes)</span></p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="text-blue-600 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Integrated <span className="font-semibold text-cyan-600">real-time chat functionality</span> (group chat and one-to-one messaging)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Layers className="text-cyan-600 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Utilized <span className="font-semibold">MongoDB for chat history</span> and <span className="font-semibold">MySQL for scheduling data</span></p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-sm text-blue-800"><strong>Hackathon Project</strong> - Built with team collaboration</p>
              </div>
            </div>
          </div>

          {/* MEMONEET */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-testid="experience-memoneet">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    M
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="memoneet-company">MEMONEET</h3>
                    <p className="text-lg text-primary font-semibold" data-testid="memoneet-role">Android Developer Internship</p>
                    <p className="text-gray-600" data-testid="memoneet-location">Chennai - Remote</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="memoneet-duration">
                  NOV 2023 - APRIL 2024
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Rocket className="text-primary mt-1 w-5 h-5" />
                    <p className="text-gray-700">Pioneered cross-functional initiative to revamp user experience, <span className="font-semibold text-primary">increasing user retention by 20%</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Smartphone className="text-secondary mt-1 w-5 h-5" />
                    <p className="text-gray-700">Implemented <span className="font-semibold">5 major online exam test features</span> for enhanced user experience</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-accent mt-1 w-5 h-5" />
                    <p className="text-gray-700">Optimized key functionalities leading to <span className="font-semibold text-accent">35% decrease in crash rates</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-vibrant mt-1 w-5 h-5" />
                    <p className="text-gray-700">Led team of <span className="font-semibold">5 Flutter developers</span>, achieved <span className="font-semibold text-vibrant">4.7-star rating</span> for 100K+ users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUKKIZ */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-testid="experience-bukkiz">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    B
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="bukkiz-company">BUKKIZ</h3>
                    <p className="text-lg text-purple-600 font-semibold" data-testid="bukkiz-role">Flutter Team Lead</p>
                    <p className="text-gray-600" data-testid="bukkiz-location">Gurugram, Haryana</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="bukkiz-duration">
                  JAN 2023 - NOV 2023
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Settings className="text-purple-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Built full-stack ERP with e-Commerce features, <span className="font-semibold text-purple-600">improving efficiency by 40%</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="text-pink-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Integrated live test results and performance dashboards for parents</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Layers className="text-indigo-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Created <span className="font-semibold">4 comprehensive applications</span>: User, Retailer, Admin, and Delivery Apps</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Palette className="text-blue-500 mt-1 w-5 h-5" />
                    <p className="text-gray-700">Expertise in Figma UI/UX design, Clean Architecture, and <span className="font-semibold">20+ Flutter features</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
