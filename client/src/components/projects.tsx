import { Rocket, Settings, TrendingUp, Users, Car, MessageCircle, Clock, Layers, ChefHat } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white" data-testid="projects-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="projects-title">
            <span className="gradient-text">Featured</span> Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="projects-description">
            Freelance and personal projects showcasing full-stack development skills
          </p>
        </div>

        <div className="space-y-12">
          {/* BOSS RESTAURANT SOFTWARE - FREELANCE */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-testid="project-boss-restaurant">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    <ChefHat className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="boss-restaurant-title">Boss Restaurant Software</h3>
                    <p className="text-lg text-orange-600 font-semibold" data-testid="boss-restaurant-type">Freelance Project</p>
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
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-testid="project-automate">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    <Car className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="automate-title">AutoMate</h3>
                    <p className="text-lg text-blue-600 font-semibold" data-testid="automate-type">Personal Project (Team Collaboration)</p>
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
        </div>
      </div>
    </section>
  );
}