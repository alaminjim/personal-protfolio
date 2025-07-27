import profileImage from "../../public/images/profile/Profile-image.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl pl-4">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m Al-Amin Islam — a passionate Frontend Developer with a
            strong focus on JavaScript and React. I specialize in building
            interactive, real-world applications like e-commerce platforms,
            expense trackers, and real-time chat systems. I'm not just a coder —
            I'm a problem-solver who believes in learning by building. With a
            solid grasp of JavaScript fundamentals and a deep curiosity about
            how things work under the hood (like the JS engine), I continuously
            sharpen my skills through hands-on projects. I love transforming
            ideas into smooth, responsive, and accessible user experiences.
            Currently, I’m seeking a remote frontend developer opportunity where
            I can contribute, learn from a talented team, and stay on the edge
            of modern web technologies.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
