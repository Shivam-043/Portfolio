import { GraduationCap, School } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="about-title">
            <span className="gradient-text">Education &</span> Background
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="about-description">
            Building a strong foundation in engineering and technology through premier institutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* NIT Kurukshetra */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="education-nit">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center text-white text-2xl">
                <GraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid="nit-name">National Institute of Technology</h3>
                <p className="text-primary font-semibold mb-1" data-testid="nit-degree">BTech, Civil Engineering</p>
                <p className="text-gray-600 mb-2" data-testid="nit-location">Kurukshetra, Haryana • 2021-2025</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Premier Institute</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Current</span>
                </div>
              </div>
            </div>
          </div>

          {/* Jaypee Vidya Mandir */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="education-jaypee">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl">
                <School />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid="jaypee-name">Jaypee Vidya Mandir</h3>
                <p className="text-green-600 font-semibold mb-1" data-testid="jaypee-degree">Central Board of Secondary School</p>
                <p className="text-gray-600 mb-2" data-testid="jaypee-location">Anoopshahar, Uttar Pradesh • 2018-2020</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">XII & X</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">CBSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
