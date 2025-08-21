import { Code, Layers, Database, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "gradient-bg",
      skills: [
        { name: "Java", level: 90 },
        { name: "Dart", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Rust", level: 70 },
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      gradient: "from-green-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-green-500 to-teal-500",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Socket.IO", level: 75 },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Firebase", level: 95 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphCMS", level: 75 },
        { name: "Redis", level: 70 },
      ]
    },
    {
      title: "Other Technologies",
      icon: Settings,
      gradient: "from-orange-50 to-red-50",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 85 },
        { name: "OAuth", level: 80 },
        { name: "Kubernetes", level: 60 },
        { name: "Agile/Scrum", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="skills-title">
            <span className="gradient-text">Technical</span> Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="skills-description">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-gradient-to-br ${category.gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              data-testid={`skill-category-${category.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  <category.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900" data-testid={`skill-title-${category.title.toLowerCase().replace(' ', '-')}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item" data-testid={`skill-${skill.name.toLowerCase().replace(' ', '-')}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700" data-testid={`skill-name-${skill.name.toLowerCase().replace(' ', '-')}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500" data-testid={`skill-level-${skill.name.toLowerCase().replace(' ', '-')}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 skill-bar">
                      <div 
                        className={index === 0 ? "gradient-bg h-2 rounded-full" : category.iconBg + " h-2 rounded-full"}
                        style={{ width: `${skill.level}%` }}
                        data-testid={`skill-bar-${skill.name.toLowerCase().replace(' ', '-')}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
