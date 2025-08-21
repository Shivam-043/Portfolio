import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2" data-testid="footer-name">Shivam Krishan Varshney</h3>
            <p className="text-gray-400" data-testid="footer-tagline">Software Engineer • Flutter Developer • Tech Enthusiast</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8" data-testid="footer-links">
            <a href="mailto:shivamvarshney114@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+919520443591" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-phone">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-linkedin">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-github">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm" data-testid="footer-copyright">
              © 2024 Shivam Krishan Varshney. All rights reserved. Built with passion and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
