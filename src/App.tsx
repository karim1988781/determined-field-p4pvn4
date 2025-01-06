import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">KARIMUNDA KALIMU</h1>
          <nav>
            <ul className="flex space-x-6">
              <li
                className={`cursor-pointer hover:text-blue-200 ${
                  activeTab === "about" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleTabClick("about")}
              >
                About
              </li>
              <li
                className={`cursor-pointer hover:text-blue-200 ${
                  activeTab === "education" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </li>
              <li
                className={`cursor-pointer hover:text-blue-200 ${
                  activeTab === "research" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleTabClick("research")}
              >
                Research
              </li>
              <li
                className={`cursor-pointer hover:text-blue-200 ${
                  activeTab === "contact" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleTabClick("contact")}
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {activeTab === "about" && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
            <div className="flex items-start">
              <div className="mr-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A highly motivated and innovative researcher with a strong
                  background in computer technology and a passion for applying
                  artificial intelligence to solve real-world problems,
                  particularly in plant production. Holding a Master's degree in
                  Computer Technology from Beijing Jiaotong University, and
                  currently pursuing a PhD at the University of South Bohemia, I
                  aim to make a significant contribution to the field by
                  developing and implementing advanced AI techniques.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My expertise lies in machine learning, natural language
                  processing, and computer vision. I am dedicated to advancing
                  sustainable and efficient agricultural practices through
                  technological innovation.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeTab === "education" && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                PhD in Technology and Cybernetics
              </h3>
              <p className="text-gray-600">
                University of South Bohemia, Czech Republic
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Master's Degree in Computer Technology
              </h3>
              <p className="text-gray-600">
                Beijing Jiaotong University, China
              </p>
              <p className="text-gray-600">
                Relevant Courses: Machine Learning, Natural Language Processing,
                Computer Vision, Algorithm Design and Analysis, Mobile
                Computing, Big Data Engineering, Optimization Theory, Convex
                Optimization
              </p>
            </div>
          </section>
        )}

        {activeTab === "research" && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Research Interests
            </h2>
            <p className="text-gray-700 leading-relaxed">
              My research focuses on the application of artificial intelligence
              methods in plant production. I am particularly interested in
              exploring innovative techniques in:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Machine learning for crop yield prediction</li>
              <li>Computer vision for plant disease detection</li>
              <li>
                Natural language processing for agricultural knowledge
                management
              </li>
              <li>
                Design and development of software for an autonomous robotic
                platform{" "}
              </li>
            </ul>
          </section>
        )}

        {activeTab === "contact" && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
            <p className="text-gray-700">Email: karimundak@gmail.com</p>
            <p className="text-gray-700">
              LinkedIn: https://www.linkedin.com/in/karimunda-kalim-aa688715a/
            </p>
            <p className="text-gray-700">GitHub: github.com/example</p>
          </section>
        )}
      </main>

      <footer className="bg-gray-200 text-gray-600 text-center p-4 mt-8">
        <p>
          &copy; {new Date().getFullYear()} KARIMUNDA KALIMU. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
