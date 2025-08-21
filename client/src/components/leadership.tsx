import { Crown, Trophy, Users, Plane, Code, Smartphone } from "lucide-react";

export default function Leadership() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-testid="leadership-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="leadership-title">
            <span className="gradient-text">Leadership &</span> Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="leadership-description">
            Demonstrating leadership skills and technical excellence beyond development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Leadership Positions */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid="leadership-positions">
            <div className="text-center mb-6">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <Crown />
              </div>
              <h3 className="text-2xl font-bold text-gray-900" data-testid="leadership-positions-title">Leadership Positions</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl" data-testid="position-asce">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Users />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900" data-testid="asce-title">Society President, ASCE</h4>
                  <p className="text-primary font-semibold" data-testid="asce-duration">2024 - 2025</p>
                  <p className="text-gray-600 text-sm mt-1" data-testid="asce-description">Leading student activities and technical initiatives</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl" data-testid="position-aero">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                  <Plane />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900" data-testid="aero-title">Member, AeroModelling Society</h4>
                  <p className="text-secondary font-semibold" data-testid="aero-duration">2021 - 2025</p>
                  <p className="text-gray-600 text-sm mt-1" data-testid="aero-description">Active participation in technical projects and competitions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Achievements */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid="technical-achievements">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-vibrant rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <Trophy />
              </div>
              <h3 className="text-2xl font-bold text-gray-900" data-testid="achievements-title">Technical Achievements</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl" data-testid="achievement-leetcode">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
                  <Code />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900" data-testid="leetcode-title">LeetCode Knight</h4>
                  <p className="text-accent font-semibold" data-testid="leetcode-problems">500+ Problems Solved</p>
                  <p className="text-gray-600 text-sm mt-1" data-testid="leetcode-rank">Global Rank 521 in Weekly Contest • 2023-2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl" data-testid="achievement-excalibur">
                <div className="w-12 h-12 bg-vibrant rounded-lg flex items-center justify-center text-white">
                  <Smartphone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900" data-testid="excalibur-title">Excalibur Made Automate</h4>
                  <p className="text-vibrant font-semibold" data-testid="excalibur-type">Fair Sharing App</p>
                  <p className="text-gray-600 text-sm mt-1" data-testid="excalibur-description">Innovative mobile application development • 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
