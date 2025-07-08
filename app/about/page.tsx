import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub, IoLogoYoutube, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaReact, FaJs, FaPython, FaCamera, FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full border-2 border-white overflow-hidden mx-auto mb-4">
          <Image
            src="/vinhnguyen.jpeg"
            alt="Vinh Nguyen profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-xl text-teal-400">Frontend Engineer & Digital Craftsman</p>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <div className="rounded-lg p-6 bg-[#323234] backdrop-blur-md shadow mb-6">
          <p className="text-white leading-relaxed">
            Hello! I'm Vinh Nguyen, a passionate frontend engineer based in the vibrant city of Ho Chi Minh, Vietnam. 
            I'm a digital craftsman who loves building innovative digital services and products that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2 text-teal-400" />
          Background & Experience
        </h2>
        <div className="space-y-4 text-white">
          <p>
            As a frontend engineer, I specialize in creating engaging user experiences through modern web technologies. 
            My journey in software development has been driven by a deep passion for turning ideas into functional, 
            beautiful digital products.
          </p>
          <p>
            I have extensive experience building various types of applications including SaaS platforms, 
            web applications, websites, portfolios, and blogs. My approach combines technical expertise 
            with creative problem-solving to deliver solutions that truly matter.
          </p>
          <p>
            Beyond coding, I'm also an entrepreneur and investor, always looking for opportunities to 
            create value and impact through technology. This multifaceted perspective helps me understand 
            both the technical and business sides of product development.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaGraduationCap className="mr-2 text-teal-400" />
          Technical Expertise
        </h2>
        <div className="rounded-lg p-6 bg-[#323234] backdrop-blur-md shadow">
          <p className="text-white mb-4">
            I love working with cutting-edge technologies, particularly JavaScript, Python, and AI. 
            Here are some of the tools and technologies I work with:
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#202023] rounded-lg">
              <FaJs className="text-teal-400 w-5 h-5" />
              <span className="text-white">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#202023] rounded-lg">
              <BiLogoTypescript className="text-teal-400 w-5 h-5" />
              <span className="text-white">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#202023] rounded-lg">
              <FaReact className="text-teal-400 w-5 h-5" />
              <span className="text-white">React</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#202023] rounded-lg">
              <DiNodejs className="text-teal-400 w-5 h-5" />
              <span className="text-white">Node.js</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#202023] rounded-lg">
              <FaPython className="text-teal-400 w-5 h-5" />
              <span className="text-white">Python</span>
            </div>
          </div>
          <p className="text-white">
            I have a knack for all things product development - from initial planning and designing 
            all the way to solving real-life problems with code. My experience spans the entire 
            product lifecycle, ensuring that every solution I build is both technically sound and user-focused.
          </p>
        </div>
      </section>

      {/* Content Creation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <IoLogoYoutube className="mr-2 text-teal-400" />
          Content Creation
        </h2>
        <div className="rounded-lg p-6 bg-[#323234] backdrop-blur-md shadow">
          <p className="text-white mb-4">
            I'm passionate about sharing knowledge and helping others grow in their development journey. 
            I create content through various channels:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <IoLogoYoutube className="text-teal-400 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Dev Gen YouTube Channel</h3>
                <p className="text-white text-sm">Over 200k subscribers learning about web development, programming tutorials, and tech insights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineMail className="text-teal-400 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Weekly Newsletter</h3>
                <p className="text-white text-sm">Behind-the-scenes coding journey with weekly updates on projects, tutorials, and videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaHeart className="mr-2 text-teal-400" />
          Beyond Code
        </h2>
        <div className="rounded-lg p-6 bg-[#323234] backdrop-blur-md shadow">
          <p className="text-white mb-4">
            When I'm not coding, I have a passion for photography and exploration. I love hanging out 
            with my camera, discovering hidden nature gems throughout Vietnam, Asia, and around the world.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <FaCamera className="text-teal-400 w-6 h-6" />
            <span className="text-white">Photography enthusiast capturing nature's beauty</span>
          </div>
          <p className="text-white">
            This love for exploration and discovery often inspires my work, bringing fresh perspectives 
            to the digital products I create. I believe that experiencing the world helps me build better, 
            more empathetic solutions for users everywhere.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-white mb-6">
          I'm always interested in new opportunities, collaborations, and interesting conversations about technology and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition"
          >
            <HiOutlineMail className="mr-2" />
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-[#323234] text-white rounded-lg font-semibold shadow hover:bg-[#2d2d2f] transition"
          >
            View my work
          </Link>
        </div>
      </section>
    </div>
  );
}
