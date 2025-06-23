import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <Image
                  src="/photoKRSJ.jpeg"
                  alt="Profile Picture"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover bg-gray-800"
                />
              </div>
            </div>
          </div>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              I am a passionate full-stack developer with over 1 years of
              experience building web applications. I love turning complex
              problems into simple, beautiful designs that provide exceptional
              user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in tech started with a curiosity about how websites
              work, and it has evolved into a career where I get to create
              digital solutions that make a real impact. I specialize in React,
              Next.js, and modern web technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I am not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and mentoring other developers.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Experience</h3>
                <p className="text-purple-300">1 Year</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Projects</h3>
                <p className="text-purple-300">10+ Completed</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-purple-300">Udaipur, Rajasthan</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Availability</h3>
                <p className="text-purple-300">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
